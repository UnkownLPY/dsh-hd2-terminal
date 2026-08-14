# dsh-hd2-terminal

《Helldivers 2》超级地球「民主战术终端」粉丝主题插件，适用于 DeepSeek Harness (DSH)。

将整个 Web GUI 改造成超级地球风格：

- **全局配色**：超级地球黄 `#FFE710` + 深空蓝黑面板（浅色模式为宣传海报纸质感 + 旗帜蓝交互色）
- **字体**：Black Ops One（军事模板标题）、Chakra Petch（界面）、Share Tech Mono（终端读数），经 Google Fonts 加载
- **终端框架**：顶部指挥条（超级地球鹰徽 + 宣传语轮播 + SEST 时钟 + UPLINK 状态）、底部宣传跑马灯、四角黄框、扫描线
- **SEST 时钟**：超级地球标准时（GMT+2），年份 = 真实年份 + 160（2026 → 2186），昼夜图标
- **输入区**：UPLINK 战术读条与统计信息融合（轮数/步数/LLM/工具时长/首 token/速率/缓存/出入 token）
- **侧栏**：工作区标题行 companion titlebox 斜纹样式、会话/工作区行为新会话式黄底切角按钮、弹出菜单 45° 切角 + 黄色线框
- **图标**：helldivers.wiki.gg 官方战役图标（侦察/解放/紧急解放战役 + 增援战略）
- **公民简报面板**：潜兵徽记 + 战况读数（顶栏 ⓘ 或侧栏 ★ SUPER EARTH 打开）
- **会话标题栏**：RECON 轮数读数 + 斜纹分割带
- **设置开关**：设置 → 常规 → 「超级地球终端」一键开启/关闭（持久化，切换即时生效）

## 安装

前提：一台已部署 DeepSeek Harness 的机器。

### 方式 A：npm 包

```bash
# 在 DSH 部署的 node_modules 所在目录执行
npm install dsh-hd2-terminal
```

### 方式 B：目录复制

```bash
cp -r dsh-hd2-terminal <部署>/node_modules/dsh-hd2-terminal
```

### 注册插件行

在你的 profile 的 `cordis.patch.yml` 中添加：

```yaml
- insert:
    - id: hd2-terminal
      name: dsh-hd2-terminal
```

（web profile 位于 `~/.dsh/profiles/web/cordis.patch.yml`。）

重启 DSH 进程后生效；在「设置 → 常规」中可随时开关主题。

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
