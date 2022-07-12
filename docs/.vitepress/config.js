export default {
  title: 'VitePress',
  base:"/vitepress_blog/",
  description: 'Just playing around.',
  lastUpdated: true,
  themeConfig: {
   
    algolia: {
      apiKey: '903ce6559fe4295baa6d01a73c60bb12',
      indexName: 'fugen',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: 'W5HGSTCWC2'
    },
    lastUpdatedText:'最后更新',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Fugen'
    },
    siteTitle: 'My Custom Title',
    nav: [
      { text: 'Book', link: '/handok/Book' },
      { text: 'Other Recommend',  items: [
        { text: 'Telegram', link: '/handok/telegram' },
        { text: 'EslintConfig', link: '/handok/Eslint' },
        { text: 'Icon', link: '/handok/Icon' },
       
      ] },
      
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/F-gen' },
      { icon: 'twitter', link: 'https://twitter.com/wu91327892' },
      { icon: 'youtube', link: '...' }
    ],
    sidebar: [
      {
        text: 'Learn',
        collapsible: true,
        items: [
          { text: 'Book', link: '/handok/Book' },
          { text: 'telegram ', link: '/handok/telegram' },
          { text: 'Icon ', link: '/handok/Icon' },
          { text: 'Eslint ', link: '/handok/Eslint' },
          { text: 'WebFontRecommend ', link: '/handok/WebFontRecommend' },
         
        ]
      },
      {
        text: 'Vue3',
        collapsible: true,
        items: [
          { text: 'Vue3快速上手', link:  '/vue/Vue3快速上手'},
          { text: '创建Vue3.0工程 ', link: '/vue/创建Vue3.0工程' },
          { text: '常用 Composition API ', link: '/vue/常用 Composition API' },
          { text: '其它 Composition API ', link: '/vue/其它 Composition API' },
          { text: 'Composition API 的优势 ', link: '/vue/Composition API 的优势' },
          { text: '新的组件 ', link: '/vue/新的组件' },
         
        ]
      }
    ]
  }
}
