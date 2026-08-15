#!/usr/bin/env bash
set -euo pipefail

# dsh-hd2-terminal 一键安装脚本
# 自动完成三件事：定位 profile 的 node_modules → 复制插件包 → 在 profile 的
# cordis.patch.yml 幂等注册插件行（重复执行安全）。
#
# 用法:
#   ./install.sh                          # 安装到 web profile（默认）
#   ./install.sh --profile <name>         # 安装到其他 profile
#   ./install.sh --deploy <node_modules>  # 手动指定 node_modules 绝对路径

PKG_NAME="dsh-hd2-terminal"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DSH_HOME_DIR="${DSH_HOME:-$HOME/.dsh}"
PROFILE="web"
DEPLOY_NM=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --profile) PROFILE="$2"; shift 2 ;;
    --deploy) DEPLOY_NM="$2"; shift 2 ;;
    *) echo "未知参数: $1" >&2; exit 1 ;;
  esac
done

if [[ -z "$DEPLOY_NM" ]]; then
  # 出树插件的位置：profile 自己的 node_modules（Node 从 profile 目录
  # 向上查找时最先命中；无需 pnpm，普通目录拷贝即可解析）。
  DEPLOY_NM="$DSH_HOME_DIR/profiles/$PROFILE/node_modules"
fi
mkdir -p "$DEPLOY_NM"

TARGET="$DEPLOY_NM/$PKG_NAME"
rm -rf "$TARGET"
cp -R "$HERE" "$TARGET"
rm -rf "$TARGET/.git"
echo "✓ 插件包已安装: $TARGET"

PATCH="$DSH_HOME_DIR/profiles/$PROFILE/cordis.patch.yml"
mkdir -p "$(dirname "$PATCH")"

if [[ -f "$PATCH" ]] && grep -q "id: hd2-terminal" "$PATCH"; then
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
echo "完成！"
echo "  · DSH 正在运行：直接刷新 Web 页面即可（patch 层热重载）。"
echo "  · DSH 未启动：正常启动后即生效。"
echo "主题开关位于: 设置 → 常规 → 超级地球终端"
echo "如需卸载: 删除 $PATCH 中的 hd2-terminal 行并移除 $TARGET 目录。"
