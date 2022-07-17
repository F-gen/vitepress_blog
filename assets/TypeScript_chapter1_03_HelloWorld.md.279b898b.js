import{_ as s,c as n,o as a,a as p}from"./app.0334e2f2.js";const i=JSON.parse('{"title":"3. \u7B2C\u4E00\u4E2A TypeScript \u7A0B\u5E8F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F16\u5199 TS \u7A0B\u5E8F","slug":"\u7F16\u5199-ts-\u7A0B\u5E8F"},{"level":2,"title":"\u624B\u52A8\u7F16\u8BD1\u4EE3\u7801","slug":"\u624B\u52A8\u7F16\u8BD1\u4EE3\u7801"},{"level":2,"title":"vscode\u81EA\u52A8\u7F16\u8BD1","slug":"vscode\u81EA\u52A8\u7F16\u8BD1"},{"level":2,"title":"\u7C7B\u578B\u6CE8\u89E3","slug":"\u7C7B\u578B\u6CE8\u89E3"},{"level":2,"title":"\u63A5\u53E3","slug":"\u63A5\u53E3"},{"level":2,"title":"\u7C7B","slug":"\u7C7B"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"TypeScript/chapter1/03_HelloWorld.md","lastUpdated":1658063460000}'),l={name:"TypeScript/chapter1/03_HelloWorld.md"},o=p(`<h1 id="_3-\u7B2C\u4E00\u4E2A-typescript-\u7A0B\u5E8F" tabindex="-1">3. \u7B2C\u4E00\u4E2A TypeScript \u7A0B\u5E8F <a class="header-anchor" href="#_3-\u7B2C\u4E00\u4E2A-typescript-\u7A0B\u5E8F" aria-hidden="true">#</a></h1><h2 id="\u7F16\u5199-ts-\u7A0B\u5E8F" tabindex="-1">\u7F16\u5199 TS \u7A0B\u5E8F <a class="header-anchor" href="#\u7F16\u5199-ts-\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p>src/helloworld.ts</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Yee</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(user))</span></span>
<span class="line"></span></code></pre></div><h2 id="\u624B\u52A8\u7F16\u8BD1\u4EE3\u7801" tabindex="-1">\u624B\u52A8\u7F16\u8BD1\u4EE3\u7801 <a class="header-anchor" href="#\u624B\u52A8\u7F16\u8BD1\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4F7F\u7528\u4E86 <code>.ts</code> \u6269\u5C55\u540D\uFF0C\u4F46\u662F\u8FD9\u6BB5\u4EE3\u7801\u4EC5\u4EC5\u662F JavaScript \u800C\u5DF2\u3002</p><p>\u5728\u547D\u4EE4\u884C\u4E0A\uFF0C\u8FD0\u884C TypeScript \u7F16\u8BD1\u5668\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tsc helloworld.ts</span></span>
<span class="line"></span></code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\u4E00\u4E2A <code>helloworld.js</code> \u6587\u4EF6\uFF0C\u5B83\u5305\u542B\u4E86\u548C\u8F93\u5165\u6587\u4EF6\u4E2D\u76F8\u540C\u7684 JavsScript \u4EE3\u7801\u3002</p><p>\u5728\u547D\u4EE4\u884C\u4E0A\uFF0C\u901A\u8FC7 Node.js \u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">node helloworld.js</span></span>
<span class="line"></span></code></pre></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Hello, Yee</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vscode\u81EA\u52A8\u7F16\u8BD1" tabindex="-1">vscode\u81EA\u52A8\u7F16\u8BD1 <a class="header-anchor" href="#vscode\u81EA\u52A8\u7F16\u8BD1" aria-hidden="true">#</a></h2><pre><code>1). \u751F\u6210\u914D\u7F6E\u6587\u4EF6tsconfig.json
    tsc --init
2). \u4FEE\u6539tsconfig.json\u914D\u7F6E
    &quot;outDir&quot;: &quot;./js&quot;,
    &quot;strict&quot;: false,    
3). \u542F\u52A8\u76D1\u89C6\u4EFB\u52A1: 
    \u7EC8\u7AEF -&gt; \u8FD0\u884C\u4EFB\u52A1 -&gt; \u76D1\u89C6tsconfig.json
</code></pre><h2 id="\u7C7B\u578B\u6CE8\u89E3" tabindex="-1">\u7C7B\u578B\u6CE8\u89E3 <a class="header-anchor" href="#\u7C7B\u578B\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u770B\u770B TypeScript \u5DE5\u5177\u5E26\u6765\u7684\u9AD8\u7EA7\u529F\u80FD\u3002 \u7ED9 <code>person</code> \u51FD\u6570\u7684\u53C2\u6570\u6DFB\u52A0 <code>: string</code> \u7C7B\u578B\u6CE8\u89E3\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Yee</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(user))</span></span>
<span class="line"></span></code></pre></div><p>TypeScript \u91CC\u7684\u7C7B\u578B\u6CE8\u89E3\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u4E3A\u51FD\u6570\u6216\u53D8\u91CF\u6DFB\u52A0\u7EA6\u675F\u7684\u65B9\u5F0F\u3002 \u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u5E0C\u671B <code>greeter</code> \u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u53C2\u6570\u3002 \u7136\u540E\u5C1D\u8BD5\u628A <code>greeter</code> \u7684\u8C03\u7528\u6539\u6210\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(user))</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u65B0\u7F16\u8BD1\uFF0C\u4F60\u4F1A\u770B\u5230\u4EA7\u751F\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">error TS2345: Argument of type &#39;number[]&#39; is not assignable to parameter of type &#39;string&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7C7B\u4F3C\u5730\uFF0C\u5C1D\u8BD5\u5220\u9664 <code>greeter</code> \u8C03\u7528\u7684\u6240\u6709\u53C2\u6570\u3002 TypeScript \u4F1A\u544A\u8BC9\u4F60\u4F7F\u7528\u4E86\u975E\u671F\u671B\u4E2A\u6570\u7684\u53C2\u6570\u8C03\u7528\u4E86\u8FD9\u4E2A\u51FD\u6570\u3002 \u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E2D\uFF0CTypeScript\u63D0\u4F9B\u4E86\u9759\u6001\u7684\u4EE3\u7801\u5206\u6790\uFF0C\u5B83\u53EF\u4EE5\u5206\u6790\u4EE3\u7801\u7ED3\u6784\u548C\u63D0\u4F9B\u7684\u7C7B\u578B\u6CE8\u89E3\u3002</p><p>\u8981\u6CE8\u610F\u7684\u662F\u5C3D\u7BA1\u6709\u9519\u8BEF\uFF0C<code>greeter.js</code> \u6587\u4EF6\u8FD8\u662F\u88AB\u521B\u5EFA\u4E86\u3002 \u5C31\u7B97\u4F60\u7684\u4EE3\u7801\u91CC\u6709\u9519\u8BEF\uFF0C\u4F60\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 TypeScript\u3002\u4F46\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CTypeScript \u4F1A\u8B66\u544A\u4F60\u4EE3\u7801\u53EF\u80FD\u4E0D\u4F1A\u6309\u9884\u671F\u6267\u884C\u3002</p><h2 id="\u63A5\u53E3" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u8BA9\u6211\u4EEC\u7EE7\u7EED\u6269\u5C55\u8FD9\u4E2A\u793A\u4F8B\u5E94\u7528\u3002\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u63A5\u53E3\u6765\u63CF\u8FF0\u4E00\u4E2A\u62E5\u6709 <code>firstName</code> \u548C <code>lastName</code> \u5B57\u6BB5\u7684\u5BF9\u8C61\u3002 \u5728 <code>TypeScript</code> \u91CC\uFF0C\u53EA\u5728\u4E24\u4E2A\u7C7B\u578B\u5185\u90E8\u7684\u7ED3\u6784\u517C\u5BB9\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u7C7B\u578B\u5C31\u662F\u517C\u5BB9\u7684\u3002 \u8FD9\u5C31\u5141\u8BB8\u6211\u4EEC\u5728\u5B9E\u73B0\u63A5\u53E3\u65F6\u5019\u53EA\u8981\u4FDD\u8BC1\u5305\u542B\u4E86\u63A5\u53E3\u8981\u6C42\u7684\u7ED3\u6784\u5C31\u53EF\u4EE5\uFF0C\u800C\u4E0D\u5FC5\u660E\u786E\u5730\u4F7F\u7528 <code>implements</code> \u8BED\u53E5\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastName</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Yee</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Huang</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(user))</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B" tabindex="-1">\u7C7B <a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a></h2><p>\u6700\u540E\uFF0C\u8BA9\u6211\u4EEC\u4F7F\u7528\u7C7B\u6765\u6539\u5199\u8FD9\u4E2A\u4F8B\u5B50\u3002 TypeScript \u652F\u6301 JavaScript \u7684\u65B0\u7279\u6027\uFF0C\u6BD4\u5982\u652F\u6301\u57FA\u4E8E\u7C7B\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u3002</p><p>\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A <code>User</code> \u7C7B\uFF0C\u5B83\u5E26\u6709\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u548C\u4E00\u4E9B\u516C\u5171\u5B57\u6BB5\u3002\u56E0\u4E3A\u7C7B\u7684\u5B57\u6BB5\u5305\u542B\u4E86\u63A5\u53E3\u6240\u9700\u8981\u7684\u5B57\u6BB5\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u80FD\u5F88\u597D\u7684\u517C\u5BB9\u3002</p><p>\u8FD8\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u5728\u7C7B\u7684\u58F0\u660E\u4E0A\u4F1A\u6CE8\u660E\u6240\u6709\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u8FD9\u6837\u6BD4\u8F83\u4E00\u76EE\u4E86\u7136\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fullName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastName</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">fullName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastName</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastName</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">User</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Yee</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Huang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(user))</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u65B0\u8FD0\u884C <code>tsc greeter.ts</code>\uFF0C\u4F60\u4F1A\u770B\u5230 TypeScript \u91CC\u7684\u7C7B\u53EA\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u672C\u8D28\u4E0A\u8FD8\u662F <code>JavaScript</code> \u51FD\u6570\u7684\u5B9E\u73B0\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5230\u8FD9\u91CC\uFF0C\u4F60\u5DF2\u7ECF\u5BF9 TypeScript \u6709\u4E86\u4E00\u4E2A\u5927\u81F4\u7684\u5370\u8C61\uFF0C\u90A3\u4E48\u4E0B\u4E00\u7AE0\u8BA9\u6211\u4EEC\u6765\u4E00\u8D77\u5B66\u4E60 TypeScript \u7684\u4E00\u4E9B\u5E38\u7528\u8BED\u6CD5\u5427\u3002</p>`,35),e=[o];function c(r,t,y,D,F,C){return a(),n("div",null,e)}var d=s(l,[["render",c]]);export{i as __pageData,d as default};