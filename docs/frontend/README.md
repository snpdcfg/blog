---
sidebarDepth: 2
---
# 一些学习笔记
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
```html
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
> `<meta name="viewport" content="width=device-width,initial-scale=1" />`
- 宽度百分比
- 相对字体rem/em
- 流动布局，利用float  or  display：fixed等
- 使用css media模块
- 图片自适应，max-widht/min-widht。

### 布局
- 传统布局（借助浮动，定位等）
- flex布局
- 百分比布局
- grid布局（display：grid），本质上还是百分比布局。

- 元素的分类
> 从元素布局特性来分，主要可以分为三类元素，block-level（块级）元素、inline-level（行内级）元素和inline-block-level（行内块级）元素。
- 块级元素

块级元素独占一行（width默认为100%,height为0）

可以设置任何尺寸相关的属性（width、padding、margin、border）

display属性取block、table、flex、grid、list-item等值独占一行显示
> 块级元素有div , p , form, ul, li , ol, dl, form, address, fieldset, hr, menu, table, address, h1~h6, article, aside, audio, blockquote, canvas, dd, dl, fieldset, figcaption, figure, footer, header, hgroup, hr, noscript, ol, output, p, pre, section, table, tfoot, bideo。

- 行内元素
> 行内元素有：b, big, i, small, tt
abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
a, bdo, br, img, map, object, q, script, span, sub, sup
button, input, label, select, textarea

#### 三栏布局

- 浮动

兼容性比较好，但是要清除浮动。（高度撑开，沿着线排序，创建BFC）
```html
<section class="section">
    <article class="box">
      <div class="left"></div>
      <div class="right"></div>
      <div class="mid"></div>
    </article>
  </section>

  <style>
  .section .box div {
    min-height: 100px;
  }

  .section .box .left {
    width: 300px;
    float: left;
    background-color: blue;
  }

  .section .box .right {
    width: 300px;
    float: right;
    background-color: red;
  }

  .section .box .mid {
    background-color: black;
  }
</style>
```

- 绝对定位

比较快速直观，但是已经脱离文档流了，你下面的子元素也要脱离文档流，可使用性比较差。
```html
<style>
  .section .box div {
    min-height: 100px;
  }

  .section .box {
    position: relative;
  }

  .section .box .left {
    width: 300px;
    position: absolute;
    left: 0;
    background-color: blue;
  }

  .section .box .right {
    width: 300px;
    position: absolute;
    right: 0;
    background-color: red;
  }

  .section .box .mid {
    background-color: black;
  }
</style>
```
- flex布局

css3引入的，比较容易上手，但是游览器兼容性比较差（IE9）（高度未知可以使用）
```html
<style>
  .section .box div {
    min-height: 100px;
  }

  .section .box {
    display: flex;
  }

  .section .box .left {
    width: 300px;
    background-color: blue;
  }

  .section .box .right {
    width: 300px;
    background-color: red;
  }

  .section .box .mid {
    flex: 1;
    background-color: black;
  }
</style>
```


- 表格布局

兼容性很好，但是当其中一个单元格高度超出的时候，两侧单元格也是会跟着一起变高的。（高度未知可以使用）
```html
<style>
  .section .box div {
    display: table-cell;
  }

  .section .box {
    height: 100px;
    width: 100%;
    display: table;
  }

  .section .box .left {
    width: 300px;
    background-color: blue;
  }

  .section .box .right {
    width: 300px;
    background-color: red;
  }

  .section .box .mid {
    background-color: black;
  }
</style>
```
- 网格布局

```html
<style>
  .section .box {
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: 300px auto 300px;
  }

  .section .box .left {
    background-color: blue;
  }

  .section .box .right {
    background-color: red;
  }

  .section .box .mid {
    background-color: black;
  }
</style>
```

## JavaScript

### DOM

- DOM事件类

事件级别
> DOM0  element.onclick=function(){}
>
> DOM2  element.addEventListener('click',function(){},false)
>
>DOM3  element.addEventListener('keyup',function(){},false)

事件流

DOM事件的捕获具体流程
> window -> document -> html -> body -> ...  -> 目标元素

Event对象
```
event.preventDefault()// 阻止默认事件的执行
event.stoPropagation() // 防止事件冒泡，就是不触发任何前辈元素上的事件处理函数。
event.stoplmmendiatePropagation()// 阻止事件冒泡并且阻止相同事件的其他侦听器被调用。
event.currentTarget // 标示是当事件沿着DOM触发事件的当前标。它总是指向事件绑定元素 
event.target
```

- 自定义捕获事件
```html
<script>
  let ev = document.getElementById('ve');
  let eve = new Event('test');
  ev.addEventListener('test', function () {
    console.log(123)
  });
  ev.dispatchEvent(eve)
</script>
```

### 原型链

- 创建对象方式
```html
<script>
  // 字面量
  var o1 = {
    name:'o1'
  };
  var o2 = new Object({
    name: 'o2'
  });
  // 构造函数
  var M = function(name){
    this.name = name;
  };
  var o3 = new M('o3')
  // Object.create
  var p = {
    name: 'p'
  };
  var o4 = Object.create(p);
</script>
```

***

## HTTP协议

- HTTP协议主要特点

简单快速
> 向服务端请求服务时，就传送方法和路径。每个资源都是固定的。

灵活
> HTTP可以传输任意数据对象。

无连接
> 每进行一次HTTP通讯，就要断开一次TCP连接。不会保持连接。

无状态
> HTTP协议无法根据之前的状态进行本次请求处理。上一次连接状态和这一次连接状态是没有办法区分的。

- HTTP报文

请求报文
> 请求行、请求头、空行、请求体

响应报文
> 状态行、响应头、空行、响应体


- HTTP方法
> GET（获取资源）
>
> POST（传输资源）
>
> PUT（更新资源）
>
> DELETE（删除资源）
>
> HEAD（获得报文首部）

- POST和GET的区别

  GET在游览器回退是无害的，而POST会再次提交。

  GET产生的URL地址可以被Bookmark，而POST不可以。

  GET请求会被浏览器主动cache，而POST不会，除非手动设置

  GET请求只能进行url编码，而POST支持多种编码方式。

  GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

  GET请求在URL中传送的参数是有长度限制的，而POST么有

  对参数的数据类型，GET只接受ASCII字符，而POST没有限制。

  GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。

  GET参数通过URL传递，POST放在Request body中。

**---**
  > 大多数游览器url长度在2k个字节，服务器最多处理64k大小的url，超出部分则不会处理。
  >
  > GET会产生一个TCP数据包，POST会产生两个TCP数据包
  >
  > GTE方式的请求，游览器会把HTTP header和data一起发出去，服务器响应200返回数据
  >
  > POST请求的话，游览器先发送的header，服务器响应100 continue，游览器在发送data，服务器响应200返回数据
  >
  > 并不是所有游览器POST发送两次，Firefox就发送一次。


  - HTTP状态码

  1xx: 指示信息 - 表示请求已接收，继续处理。
  
  2xx：成功 - 表示请求已经被成功接收。

  3xx：重定向- 要完成请求必须进行更进一步的操作。

  4xx：服务的错误 - 请求有语法错误或者请求无法实现。

  5xx：服务器错误 - 服务器未能实现合法的请求。

- 持久连接

HTTP协议采用**请求-应答**模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成或立即断开连接

当使用Keep-Alive模式（持久连接，连接重用），Keep-Aive功能使客户端到服务的的连接持久有效，当出现对服务器后续请求时，Keep-Alive功能避免了建立或者重新连接。

> HTTP1.0是不支持的，到HTTP1.1才支持

- 管线化

在使用持久连接的情况下，某个连接上消息的传递类似于
> 请求1 -> 响应1 -> 请求2 -> 响应2 -> 请求3 -> 响应3

管线化后连接上的消息变成这样，把请求打包过去，服务端在把响应打包回来。
> 请求1 -> 请求2 -> 请求3 -> 响应1 -> 响应2 -> 响应3

管线化机制通过持久连接完成，仅HTTP/1.1支持此技术

只有GET和HEAD请求可以进行管线化，而POST则有限制

初次创建连接时不启动管线机制，因为服务器不一定支持HTTP1.1版本的协议

管线化不会影响应到来的顺序，响应返回的顺序并没有改变

HTTP/1.1要求服务器支持管线化，但并不要求服务器一堆响应进行管线化处理，只是要求对于管线化的请求不失败即可

上面提到的服务端的问题，开启管线化可能不会带来大幅度的性能提升，而且很多服务端和代理程序对管线化的支持并不好，游览器如Chrome和Firefox默认没有开启管线化支持


## 通信

- 同源策略

    同源策略限制从一个源加载的文档或脚本如何于来自另一个源的资源进行交互。是一个用于隔离潜在恶意文件的关键的安全机制。
>Cookie、LocalStorage和IndexDB无法读取
>
>DOM无法获得
>
>AJAX不能发送
>
> 协议/主机/端口。默认端口是 80 。

### 前端通信
  Ajax（同源通信方式）

  WebSocket（不受同源策略限制）

  CORS（支持跨域也支持同源）
  
- Ajax

  1. 创建 XMLHttpRequest 对象
  2. 使用 open 方法设置请求的参数。open ( method , url, 是否异步)。
  3. 发送请求。
  4. 注册事件。 注册 onreadystatechange 事件，状态改变时就会调用。如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
  5. 获取返回的数据，更新UI。

```html
<script>
  var util = {};
  // 获取Ajax请求后
  util.json = function (options) {
    var opt = {
      url: '',
      type: 'get',
      data: {},
      success: function () {

      },
      error: function () {

      }
    };
    Object.assign(opt, options);
    // IE兼容性处理，检查游览器是否存在XMLHttpRequest这个api，没有的话，就用IE的api
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');
    var data = opt.data,
    var type = pot.type.toUpperCase();
    var dataArr = [];
    if (opt.url) {
      var url = opt.url;
    }
    for (var key in data) {
      dataArr.push(key + '=' + data[key]);
    }
    if (type === 'GET') {
      url = url + '?' + dataArr.join('&');
      xhr.open(type, url.replace(/\?$/g, ''), true);
      xhr.send();
    }
    if (type === 'POST') {
      xhr.opt(type, url, true);
      // 如果想要使用post提交，需要明确Request Header
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send(dataArr.join('&'));
    }

    xhr.onreadystatechange = function () {
      // 200表示ok，304表示使用缓存即可，206是获取媒体资源
      if (xhr.status === 200 || xhr.status === 304) {
        var res;
        if (opt.success && opt.success instanceof Function) {
          res = xhr.responseText;
          if (typeof res === 'string') {
            res = JSON.parse(res);
            opt.successcall(xhr, res);
          }
        }
      } else {
        if (opt.error && opt.error instanceof Function) {
          opt.error.call(xhr, res);
        }
      }
    };
  }
</script>
```
- WebSocket

HTTP协议有一个缺陷，通信只能又客户端发起。于是出现了WebSocket。它最大特点是服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，双向平等对话，属于服务器推送技术的一种。

1. 建立在TCP协议之上，服务器的实现比较容易。
2. 于HTTP协议有着良好的兼容性，默认端口也是80和443，并且握手阶段采用HTTP协议，因此握手不容易屏蔽，能通过各种HTTP代理服务器。
3. 数据格式比较轻量，性能开销小，通信高效。
4. 可以发送文本，也可以发送二进制数据。
5. 没有同源策略，客户端可以于任意服务器通信。
6. 协议标识符是ws（如果加密，则未wss），服务器网址是URL。

通常协议连接
> ws://example.com:80/some/path


WebSocket 的实现需要后端搭建一个 WebSocket 服务器，但是如果想搭建一个 WebSocket 服务器就没有那么轻松了，因为 WebSocket 是一种新的通信协议，目前还是草案，没有成为标准，比如 PyWebSocket , WebSocket-Node , LibWebSockets 等等，这些库文件已经实现了WebSocket 数据包的封装和解析，我们可以调用这些接口，这在很大程度上减少了我们的工作量。

```html
<script>
  // 再js文件中 创建WebSocket对象
  var ws = new WebSocket(‘wss://echo.WebSocket.org’);
  ws.onopen = function (evt) {
      console.log(‘connnection……’);
      ws.send('hello WebSocket');
  }
  ws.onmessage = function (evt) {
      console.log('received message' + evt.data);
      ws.close();
  }
  ws.onclose = dunction(evt){
      console.log('connection closed.');
  }   
  // ws的使用，以为按钮添加发送信息事件为例
  $("#send").click(function(){
      ws.send($("#msg").val());
  });
</script>
```
- CORS

CORS是一个 W3C 标准，跨域资源共享（CORS ）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，允许网页从不同的域访问其资源。而这种访问是被同源策略所禁止的。CORS 系统定义了一种浏览器和服务器交互的方式来确定是否允许跨域请求。 它是一个妥协，有更大的灵活性，但比起简单地允许所有这些的要求来说更加安全。简言之， CORS 就是为了让 AJAX 可以实现可控的跨域访问而生的。

- 前后端跨域通信
1. JSONP
2. Hash
3. WebSocket
4. CORS
5. postMessage

JSONP

本质是利用了script标签具有可跨域的特性，由服务端返回预先定义好的JavaScript全局函数的调用，并将服务端数据以该函数参数的形式传递过来。

客户端这样写
> `<script src="http://www.smyhvae.com/?data=name&callback=myjsonp"></script>`

```html
<script>
  var util = {};
  //定义方法：动态创建script标签
  util.createScript = function (url, charset) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    charset && script.setAttribute('charset', charset);
    script.setAttribute('src', url);
    script.async = true;
    return script;
  };
  util.jsonp = function (url, onsuccess, onerror, charset) {
    //事先约定好的函数名
    var callbackName = util.getName('tt_player');
    //根据回调名称注册一个全局的函数 
    window[callbackName] = function () {
      if (onsuccess && util.isFunction(onsuccess)) {
        onsuccess(arguments[0]);
      }
    };
    //动态创建一个script标签
    var script = util.createScript(url + '&callback=' + callbackName, charset);
    //监听加载成功的事件，获取数据
    script.onreadystatechange = function () {
      if (!script.readyState || /loaded|complete/.test(script.readyState)) {
        if (script.parentNode) {
          // 删除函数或变量
          script.parentNode.removeChild(script);
        }
        //最后不要忘了删除           
        window[callbackName] = null;
      }
    };
    script.onerror = function () {
      if (onerror && util.isFunction(onerror)) {
        onerror();
      }
    };
    //往html中增加这个标签，目的是把请求发送出去
    document.getElementsByTagName('head')[0].appendChild(script);
  };
</script>
```

- Hash
url 的#后面的内容就叫 Hash 。Hash 的改变，页面不会刷新。这就是用 Hash 做跨域通信的基本原理。
补充：url 的?后面的内容叫 Search 。 Search 的改变，会导致页面刷新，因此不能做跨域通信。
使用举例：
场景：我的页面 A 通过 iframe 或 frame 嵌入了跨域的页面 B。
现在，我这个 A 页面想给B页面发消息，怎么操作呢？
 1. 首先，在我的A页面中：

```html
//伪代码  
var B = document.getElementsByTagName('iframe');  
//我们可以把JS对象，通过JSON.stringify()方法转成json字符串，发给B   
B.src = B.src + '#' + 'jsonString';
```
2. 在B页面中
```html
// B 中的伪代码     
window.onhashchange = function () { 
     //通过onhashchange方法监听，url中的hash是否发生变化         
     var data = window.location.hash;
};
```

## 安全
- CSRF
- XSS

### CSRF

跨站请求伪造（Cross-site request forgery）

防御措施
>Token验证
>
>Referer验证
>
>隐藏令牌

### XSS

XSS（cross-site scripting跨域脚本攻击）


## 游览器的一些

- DOCTYPE

DTD(document type definition,文档类型定义)是一系列的语法规则，用来定义XML或（X）HTML的文件类型。游览器用它来判断文档类型，决定使用那种协议来解析以及切换游览器模式。

DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途是文件的合法验证。如果文件代码不合法，那么游览器解析时会出一些差错。

HTML5
> `<!DOCTYPE html>`

HTML4.01有个严格模式和传统模式。严格模式不包括展示性的和弃用的元素，传统模式包括。

- 重排Reflow

  DOM结构中的各个元素都有自己的盒子（模型），这些都需要游览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称之为reflow。

**触发REFlow**

    当你增加、删除DOM节点是，会导致Reflow或Repaint。

    当你移动DOM的位置，或动画时。

    当你修改CSS样式。

    当你Resize窗口的时候（移动端没有这个问题），或滚动的时候。

    当你修改网页的默认字体。

- 重绘Repaint

当各种盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来后，游览器把这些元素都按照各自的铁行绘制了一遍，于是页面的内容出现了，这个过程称之为repaint。

**触发Repaint**

DOM改动 ， CSS改动。


## 页面

- 提升页面性能

1. 资源压缩合并，减少HTTP请求。
2. 非核心代码异步加载 -> 异步加载的方式 -> 异步加载的区别。
3. 利用浏览器缓存 -> 缓存的分类 -> 缓存的原理
4. 使用CDN
5. 预解析DNS
  > https开头的有一些是默认关闭预解析的，强制打开a标签的预解析。
  >
  > `<meta http-equiv="x-dns-prefetch-contol" content="on">`
  >
  > `<link rel="dns-prefetch" href="//host_name_to_prefetch.com">`

- 异步加载

异步加载的方式

1. 动态脚本加载、    2. defer、    3. async

> defer是在HTML解析完之后才会执行，如果是多个，按照加载顺序依次执行。
>
> async是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关。

- 浏览器缓存

    1. 浏览器在加载资源时，根据请求头的expires和cache-control判断是否命中强缓存，是则直接从缓存读取资源，不会发请求到服务器。
    2. 如果没有命中强缓存，浏览器一定会发送一个请求到服务器，通过last-modified和etag验证资源是否命中协商缓存，如果命中，服务器会将这个请求返回，但是不会返回这个资源的数据，依然是从缓存中读取资源
    缓存的分类
    3. 如果前面两者都没有命中，直接从服务器加载资源

1. 强缓存

通过Expires和Cache-Control两种响应头实现

Cache-Control出现于HTTP/1.1，优先级高于Expires，表示的是相对时间  
> Expires Expires:Thu,21 Jan 2019 23:39 GMT
> 
>Cache-Control Cache-Control:max-age=3600

2. 协商缓存

浏览器对某个资源的请求没有命中强缓存，会发一个请求到服务器，协商缓存，如果协商缓存，请求响应返回的HTTP状态为304并且会显示一个Not MOdified的字符串。

协商缓存是利用的是`Last-Modified，If-Modified-Since`和`ETag、If-None-Match`这两对Header来管理的

>Last-Modified If-Modifien-Since  Last-Modified:Wed,26 Jan 2017 00:35:11 GMT  Etag  If-None-Match

1. Last-Modified，If-Modified-Since
>Last-Modified 表示本地文件最后修改日期，浏览器会在request header加上If-Modified-Since（上次返回的Last-Modified的值），询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来
>
>但是如果在本地打开缓存文件，就会造成 Last-Modified 被修改，所以在 HTTP / 1.1 出现了 ETag

2. ETag、If-None-Match
>Etag就像一个指纹，资源变化都会导致ETag变化，跟最后修改时间没有关系，ETag可以保证每一个资源是唯一的
>
>If-None-Match的header会将上次返回的Etag发送给服务器，询问该资源的Etag是否有更新，有变动就会发送新的资源回来

## 错误

即时运行错误：代码错误
> 用`try..catch` `window.onerror`捕获

资源加载错误

资源加载错误不会冒泡
> `object.onerror` 、 `performance.getEntries()`、Error事件捕获

- 跨域js运行错误

错误信息是：Script error，但是出错行号列号都是0，没有权限。
> 在script标签上增加`crossorigin`属性(客户端)。
>
> 在js资源响应头`Access-Control-Allow-Origin:*`（服务端）

- 上报错误

1. 用Ajax通信上报。
2. 利用Image对象上报。
> `(new Image()).src='';`



## ES6

- let const

js是没有块级作用域的
```JavaScript
for (var i = 0; i < 10; i++) {
    console.log(1);
  }
  console.log(i);// 10
```

`let`用法类似于`var`，但是只在所在的代码块有效

`const`是用来定义常量的


## typeScript

### 数据类型
typeScript为了代码更加规范，利于维护，增加了类型校验。

    元组（tuple）
    ```typescript
      // 属于数组的一种
      var arr:[number, string] = [123,'tuple']
    ```
    枚举（enum）

    ```typescript
      enum Flag {success = 1, error = 2};
      var s:Flag = Flag.success;
      console.log(s) // 1
      // 如果标识符没有赋值，就是下标
      enum Color {red, blue = 3, 'orange'};
      var s:Color = Color.orange;
      console.log(s) // 4
    ```
    任意（any）

    null和undefined

    void

    ```typescript
    // void表示没有任何类型，用于定义方法的时候没有返回值
    function fun ():void {
      console.log('void')
    }
    ```
    never
    > 其他类型（包括null，undefined0）的子类型，代表从不会出现的值，这一位着声明never的变量只能被never类型赋值

    ```typescript
    var a:never;
    a = (() => {
      throw new Error('错误')
    })()
    ```
### 函数
  函数
  ```typescript
  function fun():string {
    return 'string'
  }

  // 可选参数age(必须配置到参数的最后面)，默认参数name
  function (name:string = 'seagull', age?:number):string {
    return `${name}${age}`
  }

  // ts中重载
  function getInfo(name: string): string;
  function getInfo(age: number): number;
  function getInfo(str: any): any {
    if (typeof str === 'string') {
      return str
    } else {
      return str
    }
  }
  console.log(getInfo(45))
  ```

  - 类里面的修饰符
  public、protected、private
  没写默认是public
  ```typescript
    class Person {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
    run(): string {
      return `${this.name} run`
    }
  }
  class work extends Person {
    constructor(name: string) {
      super(name)
    }
    work(): string {
      return `${this.name} work`
    }
  }
  var w = new work('seagull')
  console.log(w.work())
  ```