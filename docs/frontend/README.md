---
sidebarDepth: 2
---
# 关于前端的一些笔记整理
> 并不是很准确，有错误的地方请原谅。

## HTML

### 语义化
一般情况下使用div+css就可以实现静态页面了，但是这样写会使文档结构不够清晰，不利于开发和维护。结构化也是为了代码的可读性，提升网页质量。

语义化，顾名思义，就是你写的HTML结构，是用相对应的有一定语义的英文字母（标签）表示的，标记的，因为HTML本身就是标记语言。不仅对自己来说，容易阅读，书写。别人看你的代码和结构也容易理解，甚至对一些不是做网页开发的人来说，也容易阅读。那么，我们以后再开发的过程中，一定要注意了，尽量使用官方的有语义的标签，不要再使用一堆无意义的标签去堆你的结构。

### 语义化的目的
- 在没有css的情况下，页面也能呈现出很好的内容结构。
- 用户体验，例如title、alt等用于解释名词或者解释图片信息的标签尽量填写有含义的词语
label标签的活用等。
- 有利于SEO，和搜索引擎建立良好的沟通，有助于爬虫爬取更多的有效信息。爬虫依赖于标签来确定上下文和各个关键字的权重。
- 方便于团队开发和维护，语义化更具有可读性遵循W3C标准的团队都遵循这个标准，可以减少差异化。

### HTML5新增特性
- 增加了语义标签
> header、footer、nav、section文档中的一节、article页面的独立内容区域、aside页面侧边栏内容、detailes文档某个细节部分、summary包含details元素的标题、dialog对话框。
- 增强表单
> 提供input更多输入类型，如color、date、email、number、range、tel、week、url、search等；新的表单元素datalist(其id属性与input的list属性绑定，实现选项列表输入)；新表单元素keygen、output等；新增placehoder、required、pattern、min、max、step、height、width、autofocus、multiple属性。
- 提供audio、video标签
- 新增canvas容器标签，结合js绘制图形、路径、文本等。

### 其他结构元素
- HTML5节元素标签包括body article nav aside section header footer hgroup ，还有h1-h6和address。
- address代表区块容器，必须是作为联系信息出现，邮编地址、邮件地址等等,一般出现在footer。demo
- h1-h6因为hgroup，section和article的出现，h1-h6定义也发生了变化，允许一张页面出现多个h1。

### SEO优化
- h1标签页面只能出现一次，权重最高。
- 减少div标签的使用，尽量用语义化强的标签。
- 注重meta标签的使用，如那么属性设置description、keywords等，对搜索引擎有帮组。
- 注重a标签的img标签的链接和图片说明。
- 减少http请求次数，合理设置http缓存


## CSS

### CSS选择器
- 标签选择器
- 类选择器 （ . ）(通过设置元素class属性，文档中多个元素可以拥有同一个类名。)
- id选择器 ( # ) (设置元素的id属性，每个id在文档中必须是唯一的)
- 关系选择器
```
 A E (元素A的任一子元素E，后代节点A的字节点，子节点的子节点，以此类推)
 A > E (元素A的任一字元素E，就是后代直系后代)
 E:first-child（任一是其父母节点的第一个子节点元素）
 B + E （元素B的任一下一个元素E）
 B ~ E （B元素后面拥有共同父元素的兄弟元素E）
 ```
 - 伪类选择器 (是加在选择器后面的用来指向元素状体的关键字,  :hover等等)
 ### CSS三大特性
 - 继承性  (给父元素设置一些属性，子元素也可以使用)
 > 并不是所有属性都可以继承，只有color/font/text-/line-开头的属性才可以继承。只要是后代都可以基础。
 >
 >a标签的文字颜色和下划线不能被继承，h标签的文字大小是不能继承的。
 - 层叠性 （多个选择器选中同一个标签，设置同一个属性时，是否生效由优先级判断）
 - 优先级
 > !important 声明最高  然后行内样式 > 内部样式 > 外部样式
 >
 >link链入外部样式和style内部样式优先级，取决于先后顺序。
 > 样式表中优先级 Id选择器 > class选择器 > 标签选择器 > 通配符
 >
 >!important > 内联样式 > ID选择器 > class选择器 > 标签选择器 > 通配符（*） > 浏览器默认样式 > 继承样式

 ### 盒模型
 盒模型（Box MOdel）,包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个元素。

 - IE模型和标准盒模型唯一的区别就是内容计算方式的不同
 >IE模型元素宽度width = content + padding，高度计算相同。
 >
 >标准模型元素宽度widht = content，高度计算相同

 通过css3新增属性`box-sizing: content-box | border-box`分别设置盒模型为标准（content-box）和IE模型（border-box）游览器默认是`content-box`

 - js获取盒模型对应的宽高
 >`dom.style.widht/height`只能取到行内样式的宽和高，style标签中和link外链样式取不到。
 >
 >`dom.currentStyle.widht/height`取到的是最终渲染后的，但是只有IE支持此属性。
 >
 >`window.getComputedStyle(dom).widht/height`同上一个，但是多游览器支持，IE9以上支持。
 >
 >`dom.getBOundingClientRect().widht/height`同上一个，还可以取到相对于视窗上下左右的距离。

 ### 外边距重叠
当两个垂直外边距相遇时，他们形成一个外边距，合并后外边距高度等于两个合并的外边距高度中较大者。**注意**：只有普通文档流中块框的垂直外边距才会发生外边距合并，行内框、浮动框或者绝对定位之间的外边距不会合并。

### BFC
这里父元素section的高度是100px，但是我们给section设置了`overflow:hidden`后高度就变成了110px，这里是给父元素创建了BFC。
```
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            #sec {
                background: #f00;
            }
            .child {
                height: 100px;
                margin-top: 10px;
                background: yellow;
            }
        </style>
    <section id="sec">
        <article class="child"></article>
    </section>
```
- BFC（Block Formatting Context）：块级格式化上下文。
> BFC决定了元素如何对其内容进行定位，和其他元素的关系，相互关系。相当于BFC提供了一个环境，HTML元素在这个环境按照一定的规则进行布局，一个环境中的元素不会影响到其他环境的布局。

- BFC渲染规则
>BFC元素垂直方向的边距会发生重叠，属于不同BFC外边距不会发生重叠。
>
>BFC的区域不会与浮动元素的布局重叠。
>
>BFC元素是一个独立的容器，外边的元素不会影响里面的元素。里面也不会影响外面的。
>
>计算BFC高度的时候，浮动元素也会参与计算（清除浮动）。

- 如何创建BFC
>overflow不为visible。
>
>float的值不为none。
>
>position的值不为static  or  relative
>
>display设置为inline-blocks, table,table-cell, table-caption, flex, inline-flex。

### 屏幕适配以及页面自动调整
- 允许网页宽度自动调整
> <meta name="viewport" content="width=device-width,initial-scale=1" />