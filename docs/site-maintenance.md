# 网站维护说明

## 内容与图片

- `content.js`：主页文案、中英文翻译与项目卡片。
- `project-data.js`：详情页的中英文文案、图片说明、项目链接与视频配置。
- `project.js`：详情页排版、语言切换与图片放大浏览。
- `project.css`：详情页样式，沿用主页的米白与绿色风格。
- `assets/projects/`：从提供的项目素材中整理的 WebP 图片。Echoes 的版本对比使用此前整理的真实迭代截图。
- `projects/`：生成的静态 HTML，关闭 JavaScript 后仍能阅读项目正文。
- `ambient.js`：页面周围的像素粒子、鼠标反馈，以及基于原项目精灵的二维动效。素材来源见 `assets/motion/README.md`。
- `world.js`：原有曲面与碎片收集小游戏。暂停按钮同时控制周围粒子；系统开启“减少动态效果”时，环境动效关闭。

## 更新项目内容

修改 `project-data.js` 后运行：

```bash
node scripts/build-projects.mjs
```

然后一起提交数据文件和生成的 `projects/*.html`。网站直接由 GitHub Pages 提供静态页面，不需要安装依赖。

本地预览可在仓库目录运行 `python3 -m http.server 8000`，打开终端给出的地址。

## 添加视频

把视频放入 `assets/videos/`，在 `project-data.js` 对应项目的 `videos` 数组中添加：

```js
{
  src: 'assets/videos/limbo-demo.mp4',
  poster: 'assets/projects/limbo-dolls.webp',
  caption: { zh: 'Limbo 玩法演示', en: 'Limbo gameplay' }
}
```

再次运行生成命令并提交。视频会显示播放器，支持手机播放；空的视频数组不会显示占位模块。`poster` 可省略，字幕可通过 `captions` 指定 VTT 文件路径。

## 联系

胡哲瀚 / Zhehan Hu
huzhehanhuzhehan@gmail.com
