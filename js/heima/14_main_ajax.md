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



### ajax跨域问题 同源问题
同源 = 协议，域名，端口 一样
xx.com 和www.xx.com也是不同源

目的：为了防止在你的网站，请求别人的服务器（因为这样你请求的时候会带上那个服务器的cookie）

跨域是xhr请求能发送出去，也能收到，但是浏览器拒绝接收


### jsonp解决同源问题
json with padding 
<script src='http://www.xx.com'></script>
script标签是可以发送请求的，不受同源限制，但是内容必须返回js代码

jsonp就是根据这个来解决浏览器同源问题的

### jsonp封装
回调函数名称动态生成，然后挂载到window上
//动态添加函数名
window[funcname] = function(){}

需要把callback名称发送给服务端，服务端返回调用这个函数，传入参数

### 服务端jsonp返回优化
res.jsonp({name:'aa'}); 估计默认解析callback参数，然后把数据拼接起来

### jsonp案例-腾讯天气
https://tianqi.qq.com/
里面请求天气的接口
https://wis.qq.com/weather/common?source=pc&weather_type=observe%7Cforecast_1h%7Cforecast_24h%7Cindex%7Calarm%7Climit%7Ctips%7Crise&province=%E6%B2%B3%E5%8C%97%E7%9C%81&city=%E7%9F%B3%E5%AE%B6%E5%BA%84%E5%B8%82&county=&callback=jQuery1113047846258471468794_1588041260659&_=1588041260661

最后也是把callbacl名称传过去了

返回数据的格式类似于，这样下面这个js代码就执行了，然后就能收到函数的参数
jQuery1113047846258471468794_1588041260659({"data":"10109011","message":"OK","status":200})



No 'Access-Control-Allow-Origin' header is present on the requested resource
### 一种解决方案
同源是浏览器对ajax的限制，我们可以访问同源服务器，然后服务器去访问其他服务器
### 服务端解决方案
服务端返回的时候告诉浏览器哪些情况不要拦截跨域响应

//设置哪些网站可以跨域请求我（告诉浏览器不要拦截跨域响应）
res.header('Access-Control-Allow-Origin','http://xx.com')
//设置允许跨域请求的方法
res.header('Access-Control-Allow-Methods','get,post')

//允许客户端发送跨域请求时，携带cookie信息
res.header('Access-Control-Allow-Credentials',true)
需要配合客户端的跨域请求，代表发送ajax跨域请求时携带上这个html网址对应cookie
httpRequest.withCredentials = true;


### 跨域拓展
res中返回
允许客户端跨域请求头
Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type,X-Request-Id,X-Version,X-Timestamp,X-Signature,X-Expire-In

Access-Control-Expose-Headers: X-Expire-In



### jq发送ajax

$.ajax();

### 获取表单参数
$('#from').serialize(); 自动把form中的参数拼接

或者
from.serializeArray(); 得到from表单中所有控件 name value的数组
我们遍历一下就能拿到参数了





http://v5-dy.ixigua.com/06dd0a2671f12fb1e3921fc820662e64/5ea84450/video/tos/cn/tos-cn-ve-15/5b2850275833415ca5d130485932bb47/?a=1128&br=0&bt=2328&cr=0&cs=0&dr=0&ds=3&er=&l=202004282157080100140470852537EBE2&lr=aweme&qs=0&rc=M2h0OG06O3E7dDMzNGkzM0ApM2Y8NTg2PDxmNzY8ZWgzaWcvcTYvMmtpNTNfLS1gLS9zczUuYC81My5eXmAtYjQuY2M6Yw%3D%3D&vl=&vr=


http://v5-dy.ixigua.com/e7a4fd38b88034c4827daa063e0db015/5ea84625/video/tos/cn/tos-cn-ve-15/df4be74cc8694139bd7d5fed454055a3/?a=1128&br=0&bt=2596&cr=0&cs=0&dr=0&ds=3&er=&l=202004282204570100120340510C3E7AAF&lr=&qs=0&rc=M2h0OG06O3E7dDMzNGkzM0ApOTszZGdkNjw5NzxkNjRnaGcvcTYvMmtpNTNfLS1gLS9zc2EyLi9iLmAuYDQ0NGA0NGE6Yw%3D%3D&vl=&vr=


http://v5-dy.ixigua.com/b85abe2a8f46dbe40da911654370bfc0/5ea846ed/video/tos/cn/tos-cn-ve-15/5b2850275833415ca5d130485932bb47/?a=1128&br=0&bt=2328&cr=0&cs=0&dr=0&ds=3&er=&l=202004282208170100080612061544A4CA&lr=aweme&qs=0&rc=M2h0OG06O3E7dDMzNGkzM0ApM2Y8NTg2PDxmNzY8ZWgzaWcvcTYvMmtpNTNfLS1gLS9zczUuYC81My5eXmAtYjQuY2M6Yw%3D%3D&vl=&vr=

