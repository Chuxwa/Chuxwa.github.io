# 论文展示页面模板使用说明

这是一个数据驱动的论文展示页面模板，通过修改JSON数据文件即可快速创建新的论文展示页面。

## 文件结构

```
project_DEST/
├── index.html              # 主HTML模板文件
├── main.css               # 样式文件
├── paper-renderer.js      # JavaScript渲染引擎
├── paper-data.json        # 论文数据文件 ⭐
├── css2                   # Google Fonts文件
├── jquery-1.12.4.min.js   # jQuery库
└── figures/               # 图片文件夹
    ├── Figure_1_00.png
    ├── Figure_2_00.png
    └── ...
```

## 快速开始

### 1. 创建新的论文页面

只需要修改 `paper-data.json` 文件中的数据即可：

```json
{
  "metadata": {
    "title": "你的论文标题",
    "conference": "会议名称 2024",
    "keywords": ["关键词1", "关键词2"],
    // ... 其他元数据
  },
  "authors": [
    {
      "name": "作者姓名",
      "url": "作者主页链接",
      "affiliations": ["1", "2"]
    }
    // ... 其他作者
  ],
  // ... 其他数据
}
```

### 2. 数据字段说明

#### metadata (元数据)
- `title`: 论文标题
- `shortTitle`: 简短标题 (用于SEO)
- `conference`: 会议名称
- `conferenceUrl`: 会议官网链接
- `keywords`: 关键词数组
- `description`: 论文描述
- `lastUpdate`: 最后更新日期

#### authors (作者信息)
- `name`: 作者姓名
- `url`: 作者主页链接 (可选)
- `affiliations`: 机构编号数组

#### affiliations (机构信息)
机构编号到机构信息的映射：
```json
"1": {
  "name": "机构名称",
  "url": "机构链接"
}
```

#### links (相关链接)
- `paper`: 论文链接
- `code`: 代码链接
- `website`: 项目网站
- `poster`: 海报链接
- `bibtex`: BibTeX文件

#### sections (内容章节)
支持多层嵌套的章节结构：
```json
"motivation": {
  "title": "章节标题",
  "content": "章节内容",
  "figure": {
    "src": "图片路径",
    "alt": "图片描述",
    "caption": "图片说明"
  },
  "subsections": [
    {
      "title": "子章节标题",
      "content": "子章节内容",
      "figure": { ... }
    }
  ]
}
```

### 3. 图片管理

1. 将图片放入 `figures/` 文件夹
2. 在JSON中使用相对路径引用：`"./figures/your-image.png"`
3. 建议图片格式：PNG, JPG
4. 建议图片大小：宽度不超过1000px

### 4. 样式自定义

在 `main.css` 中可以自定义：
- 颜色主题
- 字体样式
- 布局调整
- 响应式断点

## 高级功能

### 1. 动态内容加载
页面内容完全通过JavaScript动态生成，支持：
- 实时数据更新
- 错误处理
- 加载状态显示

### 2. SEO优化
自动生成：
- Meta标签
- Open Graph标签
- 结构化数据 (Schema.org)

### 3. 响应式设计
支持：
- 桌面端、平板、手机
- 深色模式
- 打印样式
- 可访问性优化

### 4. 性能优化
包含：
- 图片懒加载
- 资源预加载
- CSS/JS最小化

## 部署说明

### GitHub Pages部署
1. 将文件推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择分支和文件夹
4. 访问生成的URL

### 自定义域名
在仓库根目录添加 `CNAME` 文件，内容为你的域名。

## 常见问题

### Q: 图片无法显示？
A: 检查图片路径是否正确，确保图片文件存在于指定位置。

### Q: 数据不显示？
A: 打开浏览器控制台查看错误信息，通常是JSON格式错误。

### Q: 如何添加新的章节类型？
A: 在 `paper-renderer.js` 中的 `renderSection` 函数中添加新的渲染逻辑。

### Q: 如何修改按钮样式？
A: 在 `main.css` 中修改 `.btn-*` 类的样式。

## 示例模板

参考当前的 `paper-data.json` 文件作为模板，包含了完整的数据结构示例。
