# dsh-hd2-terminal

《Helldivers 2》超级地球「民主战术终端」粉丝主题插件，适用于 DeepSeek Harness (DSH)。

将整个 Web GUI 改造成超级地球风格：

- **全局配色**：超级地球黄 `#FFE710` + 深空蓝黑面板（浅色模式为宣传海报纸质感 + 旗帜蓝交互色）
- **字体**：Black Ops One（军事模板标题）、Chakra Petch（界面）、Share Tech Mono（终端读数），经 Google Fonts 加载
- **终端框架**：顶部指挥条（超级地球鹰徽 + 宣传语轮播 + SEST 时钟 + UPLINK 状态）、底部宣传跑马灯、四角黄框、扫描线
- **SEST 时钟**：超级地球标准时（GMT+2），年份 = 真实年份 + 160（2026 → 2186），昼夜图标
- **输入区**：UPLINK 战术读条与统计信息融合（轮数/步数/LLM/工具时长/首 token/速率/缓存/出入 token），遮蔽内置统计行
- **侧栏**：工作区标题行 companion titlebox 斜纹样式、会话/工作区行为新会话式黄底切角按钮、弹出菜单 45° 切角 + 黄色线框
- **图标**：helldivers.wiki.gg 官方战役图标（侦察/解放/紧急解放战役 + 增援战略）
- **公民简报面板**：潜兵徽记 + 战况读数（顶栏 ⓘ 或侧栏 ★ SUPER EARTH 打开）
- **会话标题栏**：RECON 轮数读数 + 斜纹分割带
- **设置开关**：设置 → 常规 → 「超级地球终端」一键开启/关闭（持久化，切换即时生效）

## 安装

前提：一台已部署 DeepSeek Harness 的机器。

### 方式 A：一键安装脚本（推荐）

```bash
git clone https://github.com/UnkownLPY/dsh-hd2-terminal.git
cd dsh-hd2-terminal
./install.sh                          # 安装到 web profile（默认）
./install.sh --profile <name>         # 安装到其他 profile
./install.sh --deploy <node_modules>  # 或手动指定 node_modules 绝对路径
```

脚本自动完成三件事：把插件包复制到 profile 的 `node_modules`（`$DSH_HOME/profiles/<profile>/node_modules/`）→ 在 profile 的 `cordis.patch.yml` 幂等注册插件行（重复执行安全）。

### 方式 B：目录复制

```bash
git clone https://github.com/UnkownLPY/dsh-hd2-terminal.git
cp -R dsh-hd2-terminal "$DSH_HOME/profiles/web/node_modules/dsh-hd2-terminal"
```

然后在 `$DSH_HOME/profiles/web/cordis.patch.yml` 中注册插件行：

```yaml
- insert:
    - id: hd2-terminal
      name: dsh-hd2-terminal
```

（方式 A 会替你完成这一步；`$DSH_HOME` 未设置时默认 `~/.dsh`。）

### 方式 C：npm 包（发布 npm 后可用）

```bash
npm install dsh-hd2-terminal
```

安装后仍需按方式 B 注册插件行。

**生效方式**：DSH 正在运行的话，保存 patch 后直接刷新 Web 页面即可（patch 层热重载）；未启动则正常启动。主题开关位于「设置 → 常规 → 超级地球终端」。

## 验证与故障排查

安装完成后：

- 页面应出现超级地球黄主题与终端框架（顶栏鹰徽、SEST 时钟、宣传跑马灯、四角黄框、扫描线）；
- 输入区显示 UPLINK 统计条（遮蔽内置 token 统计行）；
- 「设置 → 常规 → 超级地球终端」可随时开关主题，切换即时生效且持久化。

若主题没有出现：

1. 确认 `cordis.patch.yml` 里保留着本插件的 insert 行（`- id: hd2-terminal` / `name: dsh-hd2-terminal`），且没有被其他内容替换；
2. 确认 `lib/client.js` 与仓库一致——客户端半边是预构建的浏览器 bundle（`window.__ModuleLoader__.load` 格式），请勿手动修改；
3. 重启 DSH 进程后刷新页面。

注意：`cordis.patch.yml` 只接受 loader 补丁条目（insert / 配置覆盖 / disable）。不要在组合行上添加插件代码内部的字段——例如 slot 注册优先级（`priority`）属于插件 bundle 内部实现，出现在组合配置里没有意义。

## 发布到 GitHub / npm

```bash
git init
git add .
git commit -m "dsh-hd2-terminal: Helldivers 2 Democracy Tactical Terminal fan theme"
git branch -M main
git remote add origin https://github.com/<你的用户名>/dsh-hd2-terminal.git
git push -u origin main
```

（可选）发布 npm：`npm publish` 后可按方式 C 安装。

## 素材来源与版权

本主题为**非官方粉丝作品**，与 Arrowhead Game Studios / Sony Interactive Entertainment 无关联。《Helldivers 2》及超级地球相关标识、设定与美术版权归其各自权利人所有。

| 素材 | 来源 | 许可 |
|---|---|---|
| Super Earth Icon（鹰徽球徽） | [helldivers.wiki.gg](https://helldivers.wiki.gg/wiki/File:Super_Earth_Icon.svg) | 粉丝维基资产 |
| Helldiver Icon（潜兵徽记） | [helldivers.wiki.gg](https://helldivers.wiki.gg/wiki/File:Helldiver_Icon.svg) | 粉丝维基资产 |
| Recon / Liberation / Urgent Liberation Campaign Icons | [helldivers.wiki.gg](https://helldivers.wiki.gg/wiki/Category:Helldivers_2_-_Icons) | 粉丝维基资产 |
| Reinforce Stratagem Icon | [helldivers.wiki.gg](https://helldivers.wiki.gg/wiki/File:Reinforce_Stratagem_Icon.svg) | 粉丝维基资产 |
| SEST 时钟太阳图标路径 | [helldiverscompanion.com](https://helldiverscompanion.com/) | 粉丝站点元素 |
| Black Ops One / Chakra Petch / Share Tech Mono | [Google Fonts](https://fonts.google.com/) | OFL（SIL 开放字体许可） |

分发请保留本 README 与来源链接；商用需自行向权利方取得授权。
