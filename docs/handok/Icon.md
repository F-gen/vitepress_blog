# Learn use Icon from [antfu](https://github.com/antfu)
1. [icones](https://icones.js.org/collection/all)    该网站可在vscode 中安装同名插件   Icones  ,再点击 Ctrl+shift+P 即可快捷打开  并复制icon    

2. ##### 有以下几种方式   

​        **之安装 [iconfiy](https://www.npmjs.com/package/@iconify/iconify )**   如果你用的是Vuecli+v2 建议直接使用此法，其他 进阶 vite+v3+ts  可参考如下 两种

```
1.npm i @iconify/iconify     也可以不安装  使用链接引入
2.main.js  中  import '@iconify/iconify'
3. 👇 Copy the Snippets Icon 
```

​    复制 此处快速使用,

![image-20220710163928096](https://friend101.oss-cn-beijing.aliyuncs.com/img/image-20220710163928096.png)	

**之 组件引入式 [unplugin-icon](https://github.com/antfu/unplugin-icons)**    

可参考  GitHub中配置  [案例](https://github.com/antfu/unplugin-icons/tree/main/examples)
还可以配合大佬的另外一个vue自动导入组件  进行进一步的 便捷使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)  ,[详情参考](https://antfu.me/posts/journey-with-icons-continues)   [案列](https://github.com/antfu/unplugin-vue-components/tree/main/examples)

**之  [unocss](https://uno.antfu.me/)**        [案例](https://github.com/unocss/unocss/tree/main/examples)

```
如果你想在项目中尝试这个图标解决方案，你可以安装 UnoCSS 和图标预设：

npm i -D unocss @unocss/preset-icons @iconify/json
@iconify/json 包含了所有 Iconify 收录的图标集（120MB 左右）。或者，你也可以按图标集的方式进行安装以节省流量和储存空间，例如，需使用 Material Design 的图标，你可以安装 @iconify-json/mdi，使用 Carbon 的图标，你可以安装 @iconify-json/carbon 等。

接着配置你的 vite.config.js：

import { defineConfig } from 'vite'
import UnoCSS from 'unocss'
import UnocssIcons from '@unocss/preset-icons'

export default defineConfig({
  plugins: [
    UnoCSS({
      // 但 `presets` 被指定时，默认的预设将会被禁用，
      // 因此你可以在你原有的 App 上使用纯 CSS 图标而不需要担心 CSS 冲突的问题。
      presets: [
        UnocssIcons({
          // 其他选项
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block'
          }
        }),
        // presetUno() - 取消注释以启用默认的预设
      ],
    }),
  ],
})
```

   i-material-symbols-360      

​		使用前的[配置](https://github.com/unocss/unocss) 见GitHub       

![image-20220710164105433](https://friend101.oss-cn-beijing.aliyuncs.com/img/image-20220710164105433.png)
