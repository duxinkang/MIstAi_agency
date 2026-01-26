# Start Point

这是一个基于 [Next.js](https://nextjs.org) 的项目，包含品牌营销博客功能，展示来自 Demand Curve 的精选营销文章。

## 项目功能

- 📝 **博客系统**: 包含10篇已翻译的中文营销文章
- 🎨 **现代化UI**: 使用 Tailwind CSS 构建的响应式设计
- 📱 **移动端适配**: 完美支持各种设备尺寸
- 🚀 **高性能**: 基于 Next.js 16 和 Turbopack 构建

## 项目结构

```
startpoint/
├── app/                      # 应用主要页面
│   ├── blog/                # 博客相关页面
│   │   ├── [slug]/         # 动态博客文章页面
│   │   ├── layout.tsx      # 博客布局
│   │   └── page.tsx        # 博客首页
│   ├── viperVC/            # viperVC页面
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── components/              # 可复用组件
│   ├── layout/             # 布局组件
│   │   ├── footer.tsx      # 页脚
│   │   └── header.tsx      # 头部
│   ├── sections/           # 页面区块组件
│   │   ├── advantages.tsx  # 优势部分
│   │   ├── client-case.tsx # 客户案例
│   │   ├── comparison.tsx  # 对比部分
│   │   ├── cta.tsx         # 行动号召
│   │   ├── engine.tsx      # 引擎部分
│   │   ├── faq.tsx         # 常见问题
│   │   ├── hero.tsx        # 英雄区
│   │   ├── pricing.tsx     # 价格部分
│   │   ├── problems.tsx    # 问题部分
│   │   ├── promise.tsx     # 承诺部分
│   │   └── team.tsx        # 团队部分
│   └── ui/                 # UI组件
│       └── button.tsx      # 按钮组件
├── hooks/                   # 自定义钩子
│   └── use-scroll-animation.ts # 滚动动画钩子
├── lib/                     # 工具库和数据
│   ├── blog-data.ts        # 博客文章数据
│   ├── types/              # TypeScript 类型定义
│   │   └── blog.types.ts   # 博客相关类型
│   └── utils.ts            # 通用工具函数
├── data/                    # 数据文件
│   └── blog/
│       └── data/           # Markdown 格式的博客文章源文件
├── next.config.ts           # Next.js 配置
└── package.json             # 项目依赖和脚本
```

## Getting Started

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

访问 [http://localhost:3000/blog](http://localhost:3000/blog) 查看博客首页。

您可以通过修改 `app/page.tsx` 来编辑首页。页面会在您编辑文件时自动更新。

## 博客管理

### 添加新文章

1. 在 `data/blog/data/` 目录下创建新的 Markdown 文件
2. 运行处理脚本生成数据文件：

```bash
node process-blog-files.js
```

3. 新文章会自动添加到博客系统中

### 文章命名规范

文章文件名应遵循以下格式：
```
{序号}_{英文标题}_zh.md
```

例如：`01_ecommerce-meta-ads-agency_zh.md`

## 技术栈

- **框架**: Next.js 16 (App Router)
- **构建工具**: Turbopack
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **包管理**: pnpm

## Learn More

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 功能和 API
- [Learn Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程

您可以查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js) - 欢迎您的反馈和贡献！

## Deploy on Vercel

部署 Next.js 应用最简单的方法是使用 Next.js 创建者提供的 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

查看我们的 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。

## 构建项目

在生产环境构建项目：

```bash
pnpm run build
```

运行生产服务器：

```bash
pnpm start
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License
