# 阿巴阿巴的导航站

一个简洁、美观、支持深色模式切换的个人导航页面，专为 Cloudflare Pages 打造，一键部署即可拥有属于自己的高逼格导航站。

**当前版本已包含「福利类」分区**，请确保你所在地区法律允许访问此类内容后再使用。

**Live Demo**：https://你的用户名.pages.dev （部署完成后替换这里）

## 快速预览

![预览图](https://i.imgur.com/0yZf5kP.png)  
（深色模式示例，实际效果请自行部署查看）

## 项目结构
my-nav/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 主题切换 + 搜索功能
└── assets/
└── favicon.ico     # （可选）网站图标


## 一键部署到 Cloudflare Pages（推荐）

1. 把本仓库 Fork 到你自己的 GitHub 账号
2. 登录 https://dash.cloudflare.com
3. Workers & Pages → Pages → Create a project → Connect to Git
4. 选择你刚 Fork 的仓库
5. Framework preset 选 **None**，Build command 和 Output directory 都留空
6. 点击 Deploy → 完成！几秒钟就有一个 xxx.pages.dev 的免费域名

也可以绑定自己的域名，操作在 Pages 设置里一键完成。

## 所有外链（方便你直接复制修改）

```markdown
### 开发工具
- GitHub      → https://github.com
- GitLab      → https://gitlab.com
- Vercel      → https://vercel.com
- Cloudflare  → https://cloudflare.com
- Excalidraw  → https://excalidraw.com
- Carbon      → https://carbon.now.sh

### 常用网站
- 哔哩哔哩    → https://bilibili.com
- YouTube     → https://youtube.com
- Twitter / X → https://twitter.com
- 知乎        → https://zhihu.com
- 掘金        → https://juejin.cn
- Docs.rs     → https://docs.rs

### 福利类（请遵守当地法律法规）
- 男同网         → https://91nt.com/
- h动漫          → https://18hdm.com/
- 小蓝视频网      → https://xlgvw.com/
- 黑料吃瓜网      → https://hlcgw.com/
- 91porna        → https://91porna.com/
- 好色TV         → https://hstvx.com/
- 海角社区        → https://hjvideo.com/
- swag           → https://swagc.com/
- 91视频         → https://91spx.com
- 国产av网       → https://gcav1.com/
自定义建议

改标题：直接改 <title> 和 <h1> 里的「阿巴阿巴的导航」
加头像：在 <header> 里加
<img src="https://your-avatar-url.jpg" class="avatar" alt="头像">
然后在 style.css 里加点样式就行
改主色调：修改 style.css 最上面的 --primary 颜色值即可
加新分区：复制一个 <section class="category"> 粘过去就行

免责声明
本仓库仅提供静态页面模板，所有链接由使用者自行添加。
「福利类」分区链接仅作技术展示之用，请遵守你所在国家/地区的法律法规，访问者请满18周岁并自行承担一切后果。作者不对任何链接内容承担法律责任。
License
MIT © 阿巴阿巴
随便用，随便改，随便拿去装逼

喜欢的话点个 Star 吧～
有问题直接提 Issue，我看到就回（或者直接私信我，我很闲的）
部署完记得把第一行的 Live Demo 链接改成你自己的 `.pages.dev` 地址，逼格立刻拉满！
