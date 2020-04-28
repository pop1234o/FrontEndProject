# ajax

ajax 需要放在网站服务器中，用浏览器查看
不能用浏览器直接打开 file://这样 ajax 不起效果

https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started （请求示例）
https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX/Getting_Started 中文版

JSON 是 window 对象下的

ajax 请求可以在 chrome 的 Network xhr 里看到

### post请求
Content-Type指的是请求体中的数据格式

// httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//httpRequest.send("name=aaa&age=20"); 把内容放到请求体中


httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.send(JSON.stringify({name:'aaa',age:12}));
这样请求体里的就是 json格式的数据了

当然服务端也要做响应的bodyparser处理，所以一般都用application/x-www-form-urlencoded
传统的from表单提交也是这种格式，我们不能改

### chrome调试工具
network一栏中有三个功能，
一个是online，可以模拟网络状态
一个是 disable cache 禁用缓存
一个是 preventlog 刷新页面 控制台log不清除

### ajax封装

### response类型
响应头里包含
'Content-Type', 'application/json'
代表响应的数据是json

### 参数默认值
定义default对象 ,这样options中定义的就能覆盖 default
Object.assign(default,options)

### 客户端的模板引擎 - art-template
同时支持 NodeJS 和浏览器
https://github.com/aui/art-template

https://aui.github.io/art-template/zh-cn/docs/index.html 官方文档








