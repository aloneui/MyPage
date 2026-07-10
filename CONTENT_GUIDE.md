# 页面内容修改说明

页面上的标题、副标题和项目卡片都在这个文件里修改：

`src/siteContent.js`

## 修改标题和副标题

打开 `src/siteContent.js`，修改这两行：

```js
title: "BREATH DEAR MEDUSAE",
subtitle: "一个基于 React 19 + Three.js 的粒子水母艺术空间",
```

## 修改浏览器标题和图标

浏览器标签页标题和图标也在 `src/siteContent.js`：

```js
browserTitle: "FKO虚拟卡密网站",
iconHref: "/vite.svg",
iconType: "image/svg+xml",
```

如果你把图标文件放到 `public` 文件夹，比如 `public/icon.png`，这里就写：

```js
iconHref: "/icon.png",
iconType: "image/png",
```

## 修改 SEO 信息

搜索引擎标题、描述、关键词、站点域名在 `seo` 里：

```js
seo: {
  siteUrl: "https://www.fko.cc/",
  description: "FKO虚拟卡密网站，提供简洁、安全、便捷的虚拟卡密项目导航与服务入口。",
  keywords: ["FKO", "fko.cc", "虚拟卡密", "卡密网站", "项目导航", "数字产品"],
  author: "FKO",
  image: "/vite.svg",
  locale: "zh_CN",
  themeColor: "#ffffff",
},
```

如果正式域名不是 `https://www.fko.cc/`，需要同时修改：

`src/siteContent.js` 里的 `seo.siteUrl`

`public/robots.txt` 里的 `Sitemap`

`public/sitemap.xml` 里的 `<loc>`

## 修改备案号和版权

底部备案号和版权在 `footer` 里：

```js
footer: {
  copyright: "© 2026 FKO. All rights reserved.",
  icpText: "备案号待填写",
  icpHref: "",
},
```

如果备案号需要跳转链接，可以这样写：

```js
icpText: "粤ICP备xxxxxxxx号",
icpHref: "https://beian.miit.gov.cn/",
```

## 添加一个项目卡片

在 `projects` 数组里复制一段项目配置，并改成你的内容：

```js
{
  title: "新项目名称",
  description: "项目简介",
  href: "https://example.com",
  tag: "Project",
},
```

## 删除一个项目卡片

从 `projects` 数组里删除对应的这一整段：

```js
{
  title: "项目名称",
  description: "项目简介",
  href: "项目链接",
  tag: "标签",
},
```

## 修改项目链接

修改项目里的 `href`：

```js
href: "https://你的链接.com",
```

如果是页面内跳转，可以继续使用 `#about` 这种写法。
