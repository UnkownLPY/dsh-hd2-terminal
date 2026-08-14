#!/usr/bin/env bash
set -euo pipefail

# dsh-hd2-terminal 一键安装脚本
# 自动完成：定位部署 node_modules → 复制插件包 → 在 web profile 的 patch 层注册插件行
# 用法:
#   ./install.sh                          # 自动探测部署
#   ./install.sh --deploy <node_modules>  # 手动指定部署 node_modules 绝对路径

PKG_NAME="dsh-hd2-terminal"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

DEPLOY_NM=""
if [[ "${1:-}" == "--deploy" ]]; then
  DEPLOY_NM="$2"
  shift 2 || true
fi

if [[ -z "$DEPLOY_NM" ]]; then
  for d in "$HOME"/.npm/_npx/*/node_modules; do
    if [[ -d "$d/@deepseek-ai/dsh-web-app" ]]; then
      DEPLOY_NM="$d"
      break
    fi
  done
fi

if [[ -z "$DEPLOY_NM" || ! -d "$DEPLOY_NM" ]]; then
  echo "✗ 未找到 DSH 部署 node_modules。" >&2
  echo "  请手动指定: ./install.sh --deploy <node_modules绝对路径>" >&2
  exit 1
fi
echo "✓ 部署 node_modules: $DEPLOY_NM"

TARGET="$DEPLOY_NM/$PKG_NAME"
rm -rf "$TARGET"
cp -R "$HERE" "$TARGET"
rm -rf "$TARGET/.git"
echo "✓ 插件包已安装: $TARGET"

PROFILE_DIR="${DSH_HOME:-$HOME/.dsh}/profiles/web"
PATCH="$PROFILE_DIR/cordis.patch.yml"
mkdir -p "$PROFILE_DIR"

if [[ -f "$PATCH" ]] && grep -q "$PKG_NAME" "$PATCH"; then
  echo "✓ 插件行已存在: $PATCH"
else
  # 移除空数组占位（若存在），再追加 insert 条目
  if [[ -f "$PATCH" ]]; then
    grep -v '^\[\]$' "$PATCH" > "$PATCH.tmp" && mv "$PATCH.tmp" "$PATCH" || true
  fi
  {
    cat "$PATCH" 2>/dev/null || true
    echo "- insert:"
    echo "    - id: hd2-terminal"
    echo "      name: $PKG_NAME"
  } > "$PATCH.tmp"
  mv "$PATCH.tmp" "$PATCH"
  echo "✓ 已注册插件行: $PATCH"
fi

echo
echo "完成！重启 DSH 进程后生效。"
echo "主题开关位于: 设置 → 常规 → 超级地球终端"
echo "如需卸载: 删除 $PATCH 中的 hd2-terminal 行并移除 $TARGET 目录，重启即可。"
