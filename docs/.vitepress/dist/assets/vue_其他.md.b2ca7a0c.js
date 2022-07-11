import{_ as s,c as n,o as a,a as l}from"./app.c8eba651.js";const A=JSON.parse('{"title":"\u516D\u3001\u5176\u4ED6","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u5168\u5C40API\u7684\u8F6C\u79FB","slug":"_1-\u5168\u5C40api\u7684\u8F6C\u79FB"},{"level":2,"title":"2.\u5176\u4ED6\u6539\u53D8","slug":"_2-\u5176\u4ED6\u6539\u53D8"}],"relativePath":"vue/\u5176\u4ED6.md","lastUpdated":1657555297000}'),p={name:"vue/\u5176\u4ED6.md"},o=l(`<h1 id="\u516D\u3001\u5176\u4ED6" tabindex="-1">\u516D\u3001\u5176\u4ED6 <a class="header-anchor" href="#\u516D\u3001\u5176\u4ED6" aria-hidden="true">#</a></h1><h2 id="_1-\u5168\u5C40api\u7684\u8F6C\u79FB" tabindex="-1">1.\u5168\u5C40API\u7684\u8F6C\u79FB <a class="header-anchor" href="#_1-\u5168\u5C40api\u7684\u8F6C\u79FB" aria-hidden="true">#</a></h2><ul><li><p>Vue 2.x \u6709\u8BB8\u591A\u5168\u5C40 API \u548C\u914D\u7F6E\u3002</p><ul><li><p>\u4F8B\u5982\uFF1A\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u3001\u6CE8\u518C\u5168\u5C40\u6307\u4EE4\u7B49\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyButton</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;button @click=&quot;count++&quot;&gt;Clicked {{ count }} times.&lt;/button&gt;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u6CE8\u518C\u5168\u5C40\u6307\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">directive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">focus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">inserted</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> el </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> el</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>Vue3.0\u4E2D\u5BF9\u8FD9\u4E9BAPI\u505A\u51FA\u4E86\u8C03\u6574\uFF1A</p><ul><li><p>\u5C06\u5168\u5C40\u7684API\uFF0C\u5373\uFF1A<code>Vue.xxx</code>\u8C03\u6574\u5230\u5E94\u7528\u5B9E\u4F8B\uFF08<code>app</code>\uFF09\u4E0A</p><table><thead><tr><th>2.x \u5168\u5C40 API\uFF08<code>Vue</code>\uFF09</th><th>3.x \u5B9E\u4F8B API (<code>app</code>)</th></tr></thead><tbody><tr><td>Vue.config.xxxx</td><td>app.config.xxxx</td></tr><tr><td>Vue.config.productionTip</td><td><strong style="color:#DD5145;">\u79FB\u9664</strong></td></tr><tr><td>Vue.component</td><td>app.component</td></tr><tr><td>Vue.directive</td><td>app.directive</td></tr><tr><td>Vue.mixin</td><td>app.mixin</td></tr><tr><td>Vue.use</td><td>app.use</td></tr><tr><td>Vue.prototype</td><td>app.config.globalProperties</td></tr></tbody></table></li></ul></li></ul><h2 id="_2-\u5176\u4ED6\u6539\u53D8" tabindex="-1">2.\u5176\u4ED6\u6539\u53D8 <a class="header-anchor" href="#_2-\u5176\u4ED6\u6539\u53D8" aria-hidden="true">#</a></h2><ul><li><p>data\u9009\u9879\u5E94\u59CB\u7EC8\u88AB\u58F0\u660E\u4E3A\u4E00\u4E2A\u51FD\u6570\u3002</p></li><li><p>\u8FC7\u5EA6\u7C7B\u540D\u7684\u66F4\u6539\uFF1A</p><ul><li><p>Vue2.x\u5199\u6CD5</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-enter</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-leave</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-enter-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>Vue3.x\u5199\u6CD5</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-enter-from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-leave-from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-enter-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p><strong style="color:#DD5145;">\u79FB\u9664</strong>keyCode\u4F5C\u4E3A v-on \u7684\u4FEE\u9970\u7B26\uFF0C\u540C\u65F6\u4E5F\u4E0D\u518D\u652F\u6301<code>config.keyCodes</code></p></li><li><p><strong style="color:#DD5145;">\u79FB\u9664</strong><code>v-on.native</code>\u4FEE\u9970\u7B26</p><ul><li><p>\u7236\u7EC4\u4EF6\u4E2D\u7ED1\u5B9A\u4E8B\u4EF6</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;my-component</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-on:close=&quot;handleComponentEvent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-on:click=&quot;handleNativeClickEvent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5B50\u7EC4\u4EF6\u4E2D\u58F0\u660E\u81EA\u5B9A\u4E49\u4E8B\u4EF6</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">emits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">close</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p><strong style="color:#DD5145;">\u79FB\u9664</strong>\u8FC7\u6EE4\u5668\uFF08filter\uFF09</p><blockquote><p>\u8FC7\u6EE4\u5668\u867D\u7136\u8FD9\u770B\u8D77\u6765\u5F88\u65B9\u4FBF\uFF0C\u4F46\u5B83\u9700\u8981\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BED\u6CD5\uFF0C\u6253\u7834\u5927\u62EC\u53F7\u5185\u8868\u8FBE\u5F0F\u662F \u201C\u53EA\u662F JavaScript\u201D \u7684\u5047\u8BBE\uFF0C\u8FD9\u4E0D\u4EC5\u6709\u5B66\u4E60\u6210\u672C\uFF0C\u800C\u4E14\u6709\u5B9E\u73B0\u6210\u672C\uFF01\u5EFA\u8BAE\u7528\u65B9\u6CD5\u8C03\u7528\u6216\u8BA1\u7B97\u5C5E\u6027\u53BB\u66FF\u6362\u8FC7\u6EE4\u5668\u3002</p></blockquote></li><li><p>......</p></li></ul>`,5),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
