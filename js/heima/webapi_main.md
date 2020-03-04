==================
======day01=======
==================
js=>(ecmastript+dom+bom)
ecmastript =>js语法规则
dom+bom => webapi

轮播图，下拉菜单，倒计时效果，得用webapi

webapis是 w3c组织的标准，是浏览器来实现

前面js基础是地基，webapis是上层表现

## api和webapi
api application programming interface 应用编程接口
是给程序员提供的一种工具，一般是预定义的函数，我们调用就能实现功能

webapi是浏览器实现的api，给我们提供一些功能
比如弹窗，alert('xxx');就是浏览器实现的api

web常用的api，developer.mozilla.org/zh-CN/docs/Web/API

## DOM

### Dom
document object model 文档对象模型
w3c组织推荐的处理html的api

### dom树
文档：一个网页就是一个文档
文档下是html标签
用document表示

元素：一个标签就是一个元素，
用 element 表示

节点：（网页中所有的内容）标签，属性，文本，注释，都是节点
用node表示

### 获取元素 Element
学习接口：干什么的，有什么参数，返回值，操作一下
script 要写在下面，因为文档从上到下加载
1.根据id获取
document.getElementById();
2.根据标签名获取
document.getElementsByTagName('a');
伪数组存储，数组中存的也是 Element 对象

获取指定元素中的子元素
element.getElementsByTagName('a');

3.通过类名选择 h5新增 ie9以上支持
document.getElementsByClassName('className');

4.选择器 h5新增 ie9以上支持  -推荐使用
document.querySelector('选择器')//返回第一个元素对象
document.querySelector('.class');
document.querySelectorAll('#id');//返回所有元素对象

### 打印对象
可以方便的查看属性和方法
consolr.dir(obj);

### 获取特殊元素
1.获取body
console.dir(document.body);
2.获取html
var html = document.documentElement;

## 事件基础
js侦测到的行为
事件三要素：事件源，事件类型，事件处理程序

1.事件源
var btn = document.getElementById('btn');
2.事件类型 事件处理程序
btn.onclick = function(){};

* 页面中任何一个元素都能添加事件
* 分析出事件三要素再写
### 常见的鼠标事件
on开头，
onmouseover

## 操作元素 操作dom

### 改变元素内容
以下都是属性，都是获取标签中的内容
element.innerText = ’xxx‘;//修改元素内容
element.innerHtml = '<s>xxx</s>';

innerText非标准 -ie
innerHtml标准 - w3c推荐-使用最多
区别：
1.innerText 不识别里面的html标签，innerHtml 可以
2.innerText去掉空格和换行，innerHtml 不去
### 获取元素内容
var str = element.innerText;
var str = element.innerHtml;

### 修改元素属性
1.获取元素
2.注册事件
3.修改属性
element.属性名 = 属性值;
var img = document.querySelector('img');
img.src='image.jpg';

### 修改表单元素属性
innerHtml只有普通盒子才有，表单需要修改value
input.value = ''
input.disabled = true;
this.disable = true;//this指向的是函数的调用者，就是input

### 案例：仿京东显示密码的案例

### 修改元素样式
div.onclick = function(){
    //属性采取驼峰命名法
    this.style.backgroudColor = 'red';
    this.style.width = '250px';
}
//添加的是行内样式，权重高

案例：关闭弹窗
点击x隐藏div

改完后再chrome显示的是 element.style{}
说明这个是通过代码来改变的

案例：循环精灵图
以前我们给每个li设置背景，都要手动设置background-position
现在我们用js循环来写

精灵图要有规律，从上到下排序
这样横坐标就是0，y坐标循环计算

lis[i].style.backgrondPosition = '0 -'+ i*44 + 'px';

案例：显示隐藏文本框内容
input
onfocus 获得焦点， onblur 失去焦点
修改里面的文案，和文字样式

#### 多属性修改
定义 .change 样式
修改了元素的类名，会覆盖原来的类名
element.className = 'change';
解决方案：
element.className = 'first change';
element.className += ' change';//???

### 案例：密码长度提示
判断表单失去焦点，判断里面输入内容，长度小，div里修改文字提示

### 作业
input失去焦点获得焦点案例
弹窗关闭案例
鼠标悬浮，显示下拉菜单案例

==================
======day02=======
==================
### 排他效果
多个按钮都绑定点击事件
用for循环
先设置所有样式，再设置自己的样式
用this就行，指向当前点击事件的元素

案例：banner指示器效果

### 案例：百度换肤

### 案例：表格鼠标悬浮换色
给每个tr设置悬浮事件。onmouseover
onmouseout
经过设置className ，移走清空 className

### 案例：表单全选，取消全选
onclick事件，改变元素的checked属性

### 自定义属性操作
#### 获取元素属性：
element.属性名;//只能获取元素内置的（元素自带的）属性
element.getAttribute('属性名');

<div 自定义属性 = 1></div>
获取自定义属性
element.getAttribute('自定义属性名');

#### 设置属性值：
element.属性名 = 属性值;
element.setAttribute('属性名','属性值');//主要用于自定义属性

* class属性是用，element.className 因为class是保留字

#### 移除属性
element.removeAttribute('属性值');

### 案例：tab栏切换案例 （重点）
给li添加点击事件，点击后给li添加.current样式
然后下面div display:none block切换即可

给所有的li添加自定义属性，
用for循环给li加 index 属性

根据index来选中下面的第几个div设置显示，其他设置隐藏
div垂直排序就行

### 自定义属性的目的
为了保存一些数据
* 为了不引起歧义，所有的自定义属性 ，前缀都加data-

h5新增获取自定义属性方法
element.dataset.自定义属性名称;//不包含data-
element.dataset['自定义属性名称']; ie11开始支持//不包含data-
dataset里面存放了所有data开头的自定义属性
#### 特例
<div data-list-name='xxx'></div>
这样带横线的属性,必须用驼峰来获取
element.dataset.listName;
element.dataset['listName'];

#### 总结
一般用getAttribute，dataset有兼容问题


## 节点操作
利用dom获取元素操作比较繁琐
现在利用节点关系来操作，操作更简单

节点：页面中所有元素都是节点
li，li中的文字，空格换行都是文本节点，还有属性节点

element.nodeName nodeType nodeValue
nodeType：
元素节点 1 常用
属性节点 2
文本节点 3 

### 节点层级
父子，兄弟
node.parentNode 父节点 如果没有就是null
node.childNodes 所有节点
比如获取ul中的所有li，里面的换行也是text本文节点

#### 解决方案 - 常用
// 获取所有子元素节点
var list = node.children;//非标准，但是浏览器都支持

### 获取头尾节点
node.firstChild;//包含文本节点
node.firstElementChild;//第一个元素节点，不包含文本节点
ie9以上才支持
解决方案： （实际开发的写法）
node.children[0];
node.children[node.children.length-1];

### 案例：下拉菜单
li用鼠标经过，下拉菜单ul用定位定位到li下面
下拉菜单写到li中，然后y移动到底部就行

### 兄弟节点 - 用的少
node.nextSibling;//包括文本节点，不用
node.previousSibling;

node.nextElementSibing;//只包括元素节点
node.previousElementSibling;
ie9以上才支持
解决方案：
用nextSibling ，for循环找到第一个nodeType ==1 的

## 创建节点 添加节点
var element = document.createElement('tagName');

node.appendChild(element);//在最后追加
node.insertBefore(child,指定元素);在指定元素前面插入

### 案例：简单留言板
输入的内容要创建一个节点，然后插入到评论中
ul.insertBefore(li,ul.children[0]);


===============
=====day03=====
===============
### 删除节点

element.removeChild(element.children[0]);

### 删除留言案例
删除 a链接，<a href='javascrpit:;'> 这样就不会跳转#号了

### 复制节点
node.cloneNode(); 
如果是空或者false，是浅拷贝，只复制标签，不复制里面的内容

node.cloneNode(true); //深拷贝

### 动态生成表格
准备好数据list
创建tr，插入tbody中
根据属性个数创建 td，加入tr，可以用for in 来遍历属性
td.innerHTML = 属性值
最后动态生成td中包含a - 删除

找到a element对象，设置点击事件，找到对应tr，然后删除

### 三种动态创建元素的区别

document.wirte('<div>123</div>');
如果文档流执行完毕后，执行会重新绘制，导致head中的东西都没了

element.innerHTML += '<div>123</div>'
//100个 3000毫秒

var e = document.createElement();
element.appendChild(e);
//100个20毫秒

但是这两种效率不一样
第一个拼接字符串，要耗时

如果用arr.push('')
然后element.innerHTML = arr.join('');
这个效率最高，100个6毫秒

总结：用数组效率最高，但是麻烦点。

## DOM重点核心
元素增删改查，属性操作（增删改查），事件操作on-

查：包括获取兄弟节点

## 事件高级

### 注册事件
两种方式
1. x.onclick = function(){}
特点：只能处理一个函数
2.w3c推荐方式 ie9以前不支持
addEventListener -推荐使用
可以用attachEvent代替,但不是标准
可以注册多个事件
//不带on 
x.addEventListener('click',function(){});
x.addEventListener('click',func);
//ie9以前版本支持
x.attachEvent('onclick',function(){});

解决方案：可以写个兼容方法
if(x.addEventListener)
x.addEventListener('click',function(){});

### 删除事件
x.onclick = null;
x.removeEventListener('click',func);

## DOM事件流 
事件在元素之间的传递顺序

事件捕获阶段：外向里传递
冒泡阶段：里网外传播
onclick和 attachEvent只能得到冒泡阶段的事件
addEventListener(type,listener,[useCapture])
useCapture true 表示在捕获阶段，默认是false冒泡阶段

* 一般都用冒泡阶段事件
有些事件没有冒泡，比如 onfocus onblur onmouseenter onmouseleave

## 事件对象
div.onclick = function(event){}
evnet就是事件对象，判断用户按了哪个键
有 x y坐标 ，事件类型，谁绑定了这个事件
ie 678 不支持
只能用 window.event获取
兼容写法
e = e||window.event;

### 常用属性
event.target => button
和this 区别
target是触发事件的对象
this是绑定事件的对象
比如 ul绑定onclick ,点击了li，li是触发对象

event.currentTarget 和this一样


事件类型：
e.type;//click

### 阻止默认行为
让链接不跳转，
a.preventDefault();//ie 678不支持

或者点击事件直接return false，只限于传统注册方式
onclick = 

### 阻止冒泡
多个盒子都注册了点击事件，那么里层点击事件执行，也会执行外层的
e.stopPropagation();//停止传播
e.cancelBubble = true;

### 事件委托 委派
事件冒泡的好处
把事件监听添加到父节点上 ul
然后点击li，就能获取 e.target 点击对象

优点：只操作一次dom，提高性能

### 常用鼠标事件

* 如果body是空的，document.body.onclick无效
必须body里有节点才行，但是给body设置背景却是全屏的

### 案例：禁用鼠标右键
document.addEventListener('contextmenu',function(e){
    e.preventDefault();
})

### 案例：禁用选中文字
document.addEventListener('selectstart',function(e){
    e.preventDefault();
})

### 鼠标事件对象 MouseEvent
MouseEvent 
e.clientX;可视区的坐标
e.pageX;//算上滚动的时候，的坐标
e.screenX;

### 案例：跟随鼠标效果
给整个document加一个鼠标跟随事件，获取到x ,y
把图片设置到对应坐标

示例：鼠标跟随的放大镜

===============
=====day04=====
===============
### 常用键盘事件
//文字已经在文本框中的
onkeyup 
//能识别 ctrl shift 上下左右
onkeydown
//不能识别ctrl shift 上下左右
onkeypress

document.onkeyup=function(){};
//不加on
document.addEventListener('keyup',funciton(){})

区别：？
#### 键盘事件对象 KeybroadEvent
KeybroadEvent

e.keycode 返回ascii值

#### 案例：京东搜索
按下s键，自动聚焦到搜索框
给document加事件，
input.focus();//获得焦点
得用keyup ，这样s就不会输入到里面了

#### 案例：京东快递单号查询
输入数字的时候，上面有个放大的效果
给表单加键盘事件，然后取出值，
如果有，就显示放大ui。

## BOM
Browser Object Model 浏览器对象模型
学习bom就是学习浏览器为我们提供的api

js语法是ecma组织的标准的实现
dom是是w3c组织的标准，各个浏览器实现
bom最早是netscape 浏览器标准的一部分

我们学习一些兼容比较好的内容。
区别：
dom定级对象是document,bom是window
dom是操作页面元素，bom是滚动条滚动，刷新页面等浏览器行为

window => document ,location ,navigation screen history

### window
1.window对象是js操作浏览器的接口
2.
全局变量是window的属性
全局函数也是window的函数
alert() 也是window的函数

可以省略

* window有name属性，我们自己不要定义

### window常见事件

#### onload
以前script必须要写到最后面
现在写里面
window.onload = function(){

}
表示页面中所有元素都加载完了，执行
只能写一次，以最后一次为准

如果要加多个
window.addEventListener('load',function(){})

#### 窗口加载事件  
window.addEventListener('DOMContentLoaded',function(){})
仅当dom加载完成时，不包括css img，flash等
ie 9以上支持

这个比onload触发更早

#### 窗口大小事件
一直调用
window.onresize = function(){
    window.innerWidth;
}
做响应式布局

#### 定时器
var timer1 = window.setTimeout(function(){},delayMs);
var timer2 = window.setTimeout(’func()‘,delayMs);//不提倡这种写法
停止定时器：
window.clearTimeout(timer1);

setInterval(function(){},间隔时间);//从第1s开始调用？
window.clearInterval(timer);
案例：倒计时，轮播图

倒计时：
setInterval + innerHTML
我们可以先调用一次函数防止第一次有空白

倒计时发送短信：
倒计时到0清除定时器


### this指向
指向调用函数的对象，如果是全局函数，那么就是window调用的

如果是构造函数，this指向构造函数的实例

btn.onclick //this指向 btn
btn.addEventListener 也是 btn

## js执行队列
js是单线程的。
h5提出了 web worker标准
允许js创建多个线程，于是js出现了同步和异步
setTimeout(func,0); 

同步任务，

异步任务
click resize
load error
setInterval setTimeout 
把回调函数放到消息队列

点击事件，点击后，把任务放入异步队列中，
同步任务执行完后，执行点击事件

### 执行顺序
先执行主线程中的同步任务，如果遇到回调，加入任务队列中
同步任务结束后，再找异步任务中的任务，在同步任务后执行

和Android中的handler一样

## location对象
window.location
提供获取 设置url，

url ：protocol://host[:port]/path[?query]#fragment
port默认80

location.href = '' 整个url
location.host
location.search //就是query


### chrome调试
在console中直接能执行js代码
### 跳转链接
location.href = ''

### 案例：5秒后自动跳转
setTimeout + location.href

var time = 10;
setInterval(function(){
    if(time == 0){
        log('时间到');
        clearInterval();
        return;
    }
    time--;
},1000);

### 案例：不同页面间传递数据
可以用 location.href='xxx'+query;
或者用表单跳转
第二个页面 用 location.search获取
然后去掉第一个? ，用&分隔，然后用=分隔

### 重定向
location.assign('http://xxx.com');//和href差不多
location.replace('http://xxx.com');//替换当前页面，不记录历史，不能后退
location.reload();//重新加载当前页面

location.reload(true);//强制刷新,不用缓存，所有数据重新请求
ctrl+f5

## navigator对象
获取浏览器信息，最常用的是userAgent
navigator.userAgent

### 案例：根据设备不同跳转h5页面
服务端根据 客户端发送的user-agent请求头判断设备
pc的返回pc网页，手机跳转到h5页面

### h5判断设备 - 了解
navigator.userAgent.match(/phonexxxx);
 window.location.href='../h5.html'
一般是服务端做的

## history 对象
history.back();
history.forward();
history.go(1);//前进1页面
history.go(-1);//后退1页面

================
======day05=====
================
# 网页特效
js动态获取和设置元素的位置
## offset 
### 获取元素相对位置
获取元素相对父元素位置（父元素要有定位）
如果父元素没有定位，就以body为准
div.offsetTop;
div.offsetLeft;

### 获取元素宽高
包括padding,border
div.offsetWidth;
div.offsetHeight;


### 获取元素有定位的父元素
没有就返回body
div.offsetParent;

### offset和style区别
1.style只能获取 行内样式
div.style.width
offset都能获取·

2.offset返回的没有单位的数值
style是带单位的字符串

3.offset包含padding border
style不包含

4.offset是只读
style才能改变盒子大小

5.使用场景：
offset用来获取元素大小和位置，只读
style用来设置。只能读取行内样式

### 案例：得到鼠标在盒子内的坐标
获取鼠标在屏幕中的坐标，减去盒子的坐标偏移

### 案例：模态框（div）拖拽
鼠标 mousedown mousemove mouseup
down的时候开始监听move，然后根据鼠标坐标和鼠标在盒子内的坐标
动态变化盒子的left和top

### 仿京东放大镜效果

## client系列
返回元素边框大小和元素大小
div.clientTop上边框大小
div.clientWidth;不包含边框,包含padding

### flexible.js源码分析
1.根据物理像素比，设置body文字大小
2.pageshow 和 load事件
a链接 刷新，前进和后退 触发 load事件
但是火狐中，原来页面会缓存，不会触发load事件
所以要用 pageshow兼容火狐
3.有些手机端浏览器不支持 0.5px ，这里面也做了兼容



#### 立即实行函数
js中用()包裹起来的函数，是立即执行函数
不需要函数调用，立即执行
可以传递参数 
写法：
(function(a,b){
    //xxx
})(1,2);

(function(){
    xxx
}());


好处：最大的作用就是创建了一个独立的作用域
函数执行完就释放了。所以不会产生命名冲突
这种写法多用在第三方库，避免命名冲突

#### dpr 物理像素比
物理像素比，在pc端是1
移动端可能是 2 
var dpr =  window.devicePixelRatio||1;

## scroll系列
设置获取元素滚动的位置

div.scrollTop;//向上滚动的距离 如果设置scroll:auto超出内容就可以滚动
div.scrollLeft;//
div.scrollWidth;//不含边框 ，包含超出边框内容的高度

### onscroll事件
滚动条滚动会触发
div.addEventListener('scroll',function(){
    div.scrollTop;
})

### 案例：仿淘宝右侧滚动侧边栏
原来盒子是绝对定位
当滚动到banner，变成固定定位，一直在页面右侧

document.addEventListener('scroll',function(){
    window.pageYOffset;//window的y坐标滚动距离
    如果和head高度一样（banner的offsetTop也行），那么侧边栏变成固定定位
    slidebar.style.position='fixed';
});

#### window.pageYOffset兼容问题
window.pageYOffset ie9开始支持


总结：
offsetWidth:包含padding，边框
clientWidth:包含padding，不包含边框
scrollWidth:自身宽度（好像包含padding？），不含边框
返回的是实际内容高度，包括溢出或者滚动的部分。

offset用于获取元素的位置：offsetLeft offsetTop
client用于获取元素的大小 clientWidth ,ClientHeight
scroll用于获取滚动的距离，scrollTop,scrollLeft

页面的滚动具体 通过pageXOffset获取


### mouseenter 和 mouseover 区别
mouseover经过自身和自身的子盒子都会触发一遍

mouseenter 只值经过自身会触发
mouseenter没有事件冒泡


## 动画函数封装
通过定时器不断移动盒子位置 setInterval
div要加定位才行，因为是不断改变div.style.left;
停止动画就是停止定时器

问题
每个动画都创建一个 setInterval，不好和对象关联
obj.timer = setInterval

================
======day06=====
================
## 动画函数封装
添加回调函数
把回调函数加到形参上
if(callback){
    callback();
}

### 案例：经过盒子，另一个盒子滑动出来
用到滑动动画
我感觉用css hover+css3的动画也行

### 案例：网页轮播图案例
滚动：用到上面的动画
用ul+li布局,浮动，可以把ul宽度设置很大
（但是ul外面div是有宽度的） 父亲overflow:hiden隐藏超出的
小圆圈也用ul+li，根据图片数量加li
动画是ul来做平移动画
循环播放：

### 案例：节流阀
点击右侧按钮，等轮播图静止的时候才能点击下一张

### 案例：返回顶部
把窗口滚动到指定位置
window.scroll(x,y)//不加px
没有过度效果，我们可以用自己封装的动画
可以用window.pageYOffset

### 案例：点击tab指示器滑动效果


## 移动端网页特效

### 触碰事件
和鼠标事件差不多
touchstart
touchmove
touchend 
给盒子加

TouchEvent
event.touches 所有触摸屏幕手指的集合
event.targetTouches 触摸当前dom的手指集合
event.changedTouches 手指状态改变
当我们手指离开屏幕 ，只有changedTouches对象

实现一个可拖动的div

### 案例：移动端轮播图
监听 touchstart，touchmove，touchend 就行


















