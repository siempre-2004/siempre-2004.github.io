# Zhehan Hu — Worlds you can play

A bilingual, buildless portfolio with an interactive geometric landscape and a playable fragment hunt. All animation is drawn with the browser Canvas API. No installation, paid hosting, external font, or build step is required.

## Preview

Open `index.html` in a current browser. All images and scripts are included locally. The separate ZhehanHu-Preview.html deliverable is a standalone preview, and does not need to be uploaded to the repository.

## Publish to GitHub Pages

1. Sign in to **siempre-2004** and create a **public** repository named **siempre-2004.github.io**. Direct link: https://github.com/new?name=siempre-2004.github.io&description=Zhehan+Hu+%E2%80%94+Game+design%2C+graphics+and+interaction&visibility=public
2. Upload **the extracted website files** to the repository root. `index.html` must sit at the repository root; do not upload the ZIP itself or place the whole `dist` folder inside the root. Preserve the `assets` folder. Commit to `main`.
3. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch → main → /(root)**, then **Save**.

After GitHub finishes publishing, the address will be **https://siempre-2004.github.io/**. That address is the intended deployment address; this package by itself does not create a live website. Use the deployment status shown in GitHub to confirm that publication succeeded.

GitHub's official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 中文发布步骤

1. 用 **siempre-2004** 账号创建名为 **siempre-2004.github.io** 的 Public 仓库。
2. 将 **解压后的网页文件（包括 assets 文件夹）** 上传到仓库根目录。上传后，首页应直接显示 `index.html`，旁边有 `style.css`、`content.js`、`world.js`、`app.js` 和 `assets` 文件夹。不要上传 ZIP 本身，也不要把整个解压目录再套在外面。
3. 到 **Settings → Pages**，选择 **Deploy from a branch → main → /(root)**，保存。等待 GitHub 显示发布成功。

## Interactions

- Move the pointer over the terrain to deform it; click for a ripple.
- Press **Play this world**. Use **WASD / arrow keys**, or click/tap a destination, to collect all five green crystals.
- Press **Space** to dash when the scene has keyboard focus.
- **Restart** resets the game; **Back to the surface** returns to the ambient scene.
- **Wireframe** changes the rendering style. The pause control pauses the scene.
- A reduced-motion preference pauses ambient animation until the visitor chooses to play.
- Filter projects, open notes in a keyboard-accessible dialog, or follow the original case study and source links.
- Switch between English and Chinese. This preference is stored locally when browser storage is available.

## Edit the portfolio

- `content.js`: translations, project descriptions, tags, and links.
- `index.html`: page structure, contact details, and metadata.
- `style.css`: colors, typography, and responsive layouts.
- `world.js`: interactive terrain and the miniature game.
- `app.js`: language switching, filters, and project dialogs.
- `assets`: project screenshots from the original portfolio and the portrait.

SkyTiles is described as a C++ / raylib prototype. Curve-guided Mesh Editing is described as an optimization baseline. The home-page landscape is an independent portfolio interaction, not a recording of either project's implementation.

## Verification

JavaScript syntax, local asset references, bilingual content completeness, and simulated game input are checked during preparation. Browser visual verification was blocked by a preview-browser timeout; desktop and phone layouts are provided in CSS but need a final visual review in your browser.
