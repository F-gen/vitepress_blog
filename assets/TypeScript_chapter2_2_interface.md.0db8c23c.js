import{_ as s,c as n,o as a,a as l}from"./app.c8eba651.js";const A=JSON.parse('{"title":"2. \u63A5\u53E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63A5\u53E3\u521D\u63A2","slug":"\u63A5\u53E3\u521D\u63A2"},{"level":2,"title":"\u53EF\u9009\u5C5E\u6027","slug":"\u53EF\u9009\u5C5E\u6027"},{"level":2,"title":"\u53EA\u8BFB\u5C5E\u6027","slug":"\u53EA\u8BFB\u5C5E\u6027"},{"level":3,"title":"readonly vs const","slug":"readonly-vs-const"},{"level":2,"title":"\u51FD\u6570\u7C7B\u578B","slug":"\u51FD\u6570\u7C7B\u578B"},{"level":2,"title":"\u7C7B\u7C7B\u578B","slug":"\u7C7B\u7C7B\u578B"},{"level":3,"title":"\u7C7B\u5B9E\u73B0\u63A5\u53E3","slug":"\u7C7B\u5B9E\u73B0\u63A5\u53E3"},{"level":2,"title":"\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3","slug":"\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3"},{"level":2,"title":"\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3","slug":"\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3"}],"relativePath":"TypeScript/chapter2/2_interface.md","lastUpdated":1657556117000}'),p={name:"TypeScript/chapter2/2_interface.md"},o=l(`<h1 id="_2-\u63A5\u53E3" tabindex="-1">2. \u63A5\u53E3 <a class="header-anchor" href="#_2-\u63A5\u53E3" aria-hidden="true">#</a></h1><p>TypeScript \u7684\u6838\u5FC3\u539F\u5219\u4E4B\u4E00\u662F\u5BF9\u503C\u6240\u5177\u6709\u7684\u7ED3\u6784\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002\u6211\u4EEC\u4F7F\u7528\u63A5\u53E3\uFF08Interfaces\uFF09\u6765\u5B9A\u4E49\u5BF9\u8C61\u7684\u7C7B\u578B\u3002<code>\u63A5\u53E3\u662F\u5BF9\u8C61\u7684\u72B6\u6001(\u5C5E\u6027)\u548C\u884C\u4E3A(\u65B9\u6CD5)\u7684\u62BD\u8C61(\u63CF\u8FF0)</code></p><h2 id="\u63A5\u53E3\u521D\u63A2" tabindex="-1">\u63A5\u53E3\u521D\u63A2 <a class="header-anchor" href="#\u63A5\u53E3\u521D\u63A2" aria-hidden="true">#</a></h2><p>\u9700\u6C42: \u521B\u5EFA\u4EBA\u7684\u5BF9\u8C61, \u9700\u8981\u5BF9\u4EBA\u7684\u5C5E\u6027\u8FDB\u884C\u4E00\u5B9A\u7684\u7EA6\u675F</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">id\u662Fnumber\u7C7B\u578B, \u5FC5\u987B\u6709, \u53EA\u8BFB\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">name\u662Fstring\u7C7B\u578B, \u5FC5\u987B\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">age\u662Fnumber\u7C7B\u578B, \u5FC5\u987B\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">sex\u662Fstring\u7C7B\u578B, \u53EF\u4EE5\u6CA1\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6765\u89C2\u5BDF\u63A5\u53E3\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">\u5728 TypeScript \u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u63A5\u53E3\uFF08Interfaces\uFF09\u6765\u5B9A\u4E49\u5BF9\u8C61\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">\u63A5\u53E3: \u662F\u5BF9\u8C61\u7684\u72B6\u6001(\u5C5E\u6027)\u548C\u884C\u4E3A(\u65B9\u6CD5)\u7684\u62BD\u8C61(\u63CF\u8FF0)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">\u63A5\u53E3\u7C7B\u578B\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    \u591A\u4E86\u6216\u8005\u5C11\u4E86\u5C5E\u6027\u662F\u4E0D\u5141\u8BB8\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    \u53EF\u9009\u5C5E\u6027: ?</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    \u53EA\u8BFB\u5C5E\u6027: readonly</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">\u9700\u6C42: \u521B\u5EFA\u4EBA\u7684\u5BF9\u8C61, \u9700\u8981\u5BF9\u4EBA\u7684\u5C5E\u6027\u8FDB\u884C\u4E00\u5B9A\u7684\u7EA6\u675F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  id\u662Fnumber\u7C7B\u578B, \u5FC5\u987B\u6709, \u53EA\u8BFB\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  name\u662Fstring\u7C7B\u578B, \u5FC5\u987B\u6709</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  age\u662Fnumber\u7C7B\u578B, \u5FC5\u987B\u6709</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  sex\u662Fstring\u7C7B\u578B, \u53EF\u4EE5\u6CA1\u6709</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5B9A\u4E49\u4EBA\u7684\u63A5\u53E3</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> person1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7537</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7C7B\u578B\u68C0\u67E5\u5668\u4F1A\u67E5\u770B\u5BF9\u8C61\u5185\u90E8\u7684\u5C5E\u6027\u662F\u5426\u4E0EIPerson\u63A5\u53E3\u63CF\u8FF0\u4E00\u81F4, \u5982\u679C\u4E0D\u4E00\u81F4\u5C31\u4F1A\u63D0\u793A\u7C7B\u578B\u9519\u8BEF\u3002</p><h2 id="\u53EF\u9009\u5C5E\u6027" tabindex="-1">\u53EF\u9009\u5C5E\u6027 <a class="header-anchor" href="#\u53EF\u9009\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u63A5\u53E3\u91CC\u7684\u5C5E\u6027\u4E0D\u5168\u90FD\u662F\u5FC5\u9700\u7684\u3002 \u6709\u4E9B\u662F\u53EA\u5728\u67D0\u4E9B\u6761\u4EF6\u4E0B\u5B58\u5728\uFF0C\u6216\u8005\u6839\u672C\u4E0D\u5B58\u5728\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5E26\u6709\u53EF\u9009\u5C5E\u6027\u7684\u63A5\u53E3\u4E0E\u666E\u901A\u7684\u63A5\u53E3\u5B9A\u4E49\u5DEE\u4E0D\u591A\uFF0C\u53EA\u662F\u5728\u53EF\u9009\u5C5E\u6027\u540D\u5B57\u5B9A\u4E49\u7684\u540E\u9762\u52A0\u4E00\u4E2A <code>?</code> \u7B26\u53F7\u3002</p><p>\u53EF\u9009\u5C5E\u6027\u7684\u597D\u5904\u4E4B\u4E00\u662F\u53EF\u4EE5\u5BF9\u53EF\u80FD\u5B58\u5728\u7684\u5C5E\u6027\u8FDB\u884C\u9884\u5B9A\u4E49\uFF0C\u597D\u5904\u4E4B\u4E8C\u662F\u53EF\u4EE5\u6355\u83B7\u5F15\u7528\u4E86\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u65F6\u7684\u9519\u8BEF\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> person2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// sex: &#39;\u7537&#39; // \u53EF\u4EE5\u6CA1\u6709</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1">\u53EA\u8BFB\u5C5E\u6027 <a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u4E00\u4E9B\u5BF9\u8C61\u5C5E\u6027\u53EA\u80FD\u5728\u5BF9\u8C61\u521A\u521A\u521B\u5EFA\u7684\u65F6\u5019\u4FEE\u6539\u5176\u503C\u3002 \u4F60\u53EF\u4EE5\u5728\u5C5E\u6027\u540D\u524D\u7528 <code>readonly</code> \u6765\u6307\u5B9A\u53EA\u8BFB\u5C5E\u6027:</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u65E6\u8D4B\u503C\u540E\u518D\u4E5F\u4E0D\u80FD\u88AB\u6539\u53D8\u4E86\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> person2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// sex: &#39;\u7537&#39; // \u53EF\u4EE5\u6CA1\u6709</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// xxx: 12 // error \u6CA1\u6709\u5728\u63A5\u53E3\u4E2D\u5B9A\u4E49, \u4E0D\u80FD\u6709</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">person2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// error</span></span>
<span class="line"></span></code></pre></div><h3 id="readonly-vs-const" tabindex="-1">readonly vs const <a class="header-anchor" href="#readonly-vs-const" aria-hidden="true">#</a></h3><p>\u6700\u7B80\u5355\u5224\u65AD\u8BE5\u7528 <code>readonly</code> \u8FD8\u662F <code>const</code> \u7684\u65B9\u6CD5\u662F\u770B\u8981\u628A\u5B83\u505A\u4E3A\u53D8\u91CF\u4F7F\u7528\u8FD8\u662F\u505A\u4E3A\u4E00\u4E2A\u5C5E\u6027\u3002 \u505A\u4E3A\u53D8\u91CF\u4F7F\u7528\u7684\u8BDD\u7528 <code>const</code>\uFF0C\u82E5\u505A\u4E3A\u5C5E\u6027\u5219\u4F7F\u7528 <code>readonly</code>\u3002</p><h2 id="\u51FD\u6570\u7C7B\u578B" tabindex="-1">\u51FD\u6570\u7C7B\u578B <a class="header-anchor" href="#\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u63A5\u53E3\u80FD\u591F\u63CF\u8FF0 JavaScript \u4E2D\u5BF9\u8C61\u62E5\u6709\u7684\u5404\u79CD\u5404\u6837\u7684\u5916\u5F62\u3002 \u9664\u4E86\u63CF\u8FF0\u5E26\u6709\u5C5E\u6027\u7684\u666E\u901A\u5BF9\u8C61\u5916\uFF0C\u63A5\u53E3\u4E5F\u53EF\u4EE5\u63CF\u8FF0\u51FD\u6570\u7C7B\u578B\u3002</p><p>\u4E3A\u4E86\u4F7F\u7528\u63A5\u53E3\u8868\u793A\u51FD\u6570\u7C7B\u578B\uFF0C\u6211\u4EEC\u9700\u8981\u7ED9\u63A5\u53E3\u5B9A\u4E49\u4E00\u4E2A\u8C03\u7528\u7B7E\u540D\u3002\u5B83\u5C31\u50CF\u662F\u4E00\u4E2A\u53EA\u6709\u53C2\u6570\u5217\u8868\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u51FD\u6570\u5B9A\u4E49\u3002\u53C2\u6570\u5217\u8868\u91CC\u7684\u6BCF\u4E2A\u53C2\u6570\u90FD\u9700\u8981\u540D\u5B57\u548C\u7C7B\u578B\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">\u63A5\u53E3\u53EF\u4EE5\u63CF\u8FF0\u51FD\u6570\u7C7B\u578B(\u53C2\u6570\u7684\u7C7B\u578B\u4E0E\u8FD4\u56DE\u7684\u7C7B\u578B)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SearchFunc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> subString</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u5B9A\u4E49\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u4F7F\u7528\u5176\u5B83\u63A5\u53E3\u4E00\u6837\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\u7C7B\u578B\u7684\u63A5\u53E3\u3002 \u4E0B\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u5E76\u5C06\u4E00\u4E2A\u540C\u7C7B\u578B\u7684\u51FD\u6570\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u53D8\u91CF\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mySearch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SearchFunc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sub</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">search</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sub</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">mySearch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abcd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u7C7B\u578B" tabindex="-1">\u7C7B\u7C7B\u578B <a class="header-anchor" href="#\u7C7B\u7C7B\u578B" aria-hidden="true">#</a></h2><h3 id="\u7C7B\u5B9E\u73B0\u63A5\u53E3" tabindex="-1">\u7C7B\u5B9E\u73B0\u63A5\u53E3 <a class="header-anchor" href="#\u7C7B\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u4E0E C# \u6216 Java \u91CC\u63A5\u53E3\u7684\u57FA\u672C\u4F5C\u7528\u4E00\u6837\uFF0CTypeScript \u4E5F\u80FD\u591F\u7528\u5B83\u6765\u660E\u786E\u7684\u5F3A\u5236\u4E00\u4E2A\u7C7B\u53BB\u7B26\u5408\u67D0\u79CD\u5951\u7EA6\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">\u7C7B\u7C7B\u578B: \u5B9E\u73B0\u63A5\u53E3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">1. \u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">2. \u4E00\u4E2A\u63A5\u53E3\u53EF\u4EE5\u7EE7\u627F\u591A\u4E2A\u63A5\u53E3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Alarm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alert</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Light</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lightOn</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lightOff</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Alarm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alert</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Car alert</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3" tabindex="-1">\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3 <a class="header-anchor" href="#\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car2</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Alarm</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Light</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alert</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Car alert</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lightOn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Car light on</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lightOff</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Car light off</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3" tabindex="-1">\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u548C\u7C7B\u4E00\u6837\uFF0C\u63A5\u53E3\u4E5F\u53EF\u4EE5\u76F8\u4E92\u7EE7\u627F\u3002 \u8FD9\u8BA9\u6211\u4EEC\u80FD\u591F\u4ECE\u4E00\u4E2A\u63A5\u53E3\u91CC\u590D\u5236\u6210\u5458\u5230\u53E6\u4E00\u4E2A\u63A5\u53E3\u91CC\uFF0C\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u5C06\u63A5\u53E3\u5206\u5272\u5230\u53EF\u91CD\u7528\u7684\u6A21\u5757\u91CC\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LightableAlarm</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Alarm</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Light</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,36),e=[o];function c(t,r,y,F,D,C){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{A as __pageData,d as default};
