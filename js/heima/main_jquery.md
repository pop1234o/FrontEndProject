===============
=======day01===
===============
## JQuery
js库，封装好的函数的集合，一个js文件
例如：
prototype
yui
dojo
ext js
移动端 zepto 操作dom的

为了方便dom，更快捷高效，write less do more
js query 查询dom
dom操作，事件处理，动画封装，ajax交互

### 使用
jquery.com 下载
1x 2x不维护了 现在3x

production -生产环境，压缩过的
development -开发环境

### 页面加载顺序
html从上到下解析，js要获取到元素，必须写到body最下面
也可以监听 winodw.onload 或者 Domcontentloaded
DomContentloaded 是不需要页面中js css img等加载完毕的

jq写法 === DomContentloaded
$(document).ready(function(){});

或者
$(function(){})；

### jq 的 $
$是jQuery的别名
$('选择器')
jQuery("div").hide();

$是顶级对象，

### jq对象和dom对象
$('div') 是对dom对象的封装，是一种伪数组的形式

div.style.display = 'none';
$('div').hide();

### jq对象和dom对象转换
jq能实现的 dom对象都能实现

//dom->jq
$(div) 

//jq->dom  jq是个伪数组，是查询出来所有元素的集合
$('video')[index]
$('video').get(index);


### jq常用api
#### 获取元素
$('选择器')

$('.class')

$('ul>li')//子代选择器
$('ul a')//后代选择器

### 隐式迭代 - 重要

$('div').css('background','pink');
所有的都改了颜色
隐式迭代：内部遍历了元素

### jq的筛选选择器
$('ul li:fisrt').css('color','red');

ul li:eq(2);
ul li:odd;
ul li:even;

### 筛选方法
找到父子兄
$().parent();//亲爸爸
$().children(‘li’);//亲儿子

$().find(‘li’);//所有孩子
$().siblings(selector);//兄弟元素

$().nextAll();//当前后面兄弟元素
$().prevAll();//当前后面兄弟元素

$('li').eq(2) == $('li:eq(2)') //第三个li

$('li').hasClass('classNmae');
这个元素是否有类名 （选择器）

### 案例：下拉菜单
$().mouseover(function(){
    //这里的this指的是dom元素，所以要用jq方法要转换一下
    $(this).children('ul').show();

});
mouseout

### jq排他思想
自定义单选的radioButton
以前只能用for来遍历，重置其他的状态

用jq一句话实现
$(this).siblings('button').css('background','');

### 案例：tab栏切换
事件中
$(this).index();当前触发事件元素的index

### jq样式操作

设置
$('div').css('color','red');

获取
$('div').css('color');//字符串


设置多个,可以设置一个对象
$('div').css({
    'color':'red',
    'width':20, //可以是数字
    backgroundColor:'red' //驼峰命名
    });
//对象的属性可以不加引号

### jq类操作
也可以设置类名
$('div').addClass('class')//不用加点

删除类名
$('div').removeClass('class')

切换类名，没有就加上
$('div').toggleClass('class')
可以加上css过渡动画

### jq类操作和 div.className 区别
className 会覆盖
jq类操作 只是增加

### 案例：tab栏切换

## jq动画效果
可以查jq手册
显示隐藏
jq对象.show([speed, easing , callback]);
hide();
toggle();

滑动： 其实就是高度从0到height的变化
sildeDown();
sildeUp();
sildeToggle();
之前隐藏也没事

淡入淡出：
fadeIn();
fadeOut();
fadeToggle();
fadeTo();

自定义动画：
animate();

### 事件切换
事件切换，hover，不用mouseover和out了
$('div').hover(fn_over,fn_out)；

//over和out都会调用这个函数
$('div').hover(function(){
    $(this).children('ul').sildeToggle();
})；

### 动画队列排队问题
快速多次hover，动画就一直做
应该新的动画执行，先停止之前的动画
//stop写在前面
$('div').hover(function(){
    $(this).children('ul').stop().sildeToggle();
})；

### 淡入淡出：高亮显示案例

### 自定义动画
fn - 回调函数
$('div').animate(params,[speed],[easing],[fn])

$('div').animate({
    left:500,
    top:300,
    opacity:0.4
});
//驼峰命名法

### 案例：王者荣耀 手风琴效果（折叠卡片）
li中有一个小图，盖住一个大图
li hover 的时候，改变li的宽度，把小图片隐藏
其他的li都复原
$(this).animate({
    width:225px
}).find('.small').stop().fadeOut()
.siblings('.big').stop().fadeIn();


===============
=======day02===
===============
### jq获取元素属性
获取
$('').prop("属性名")
设置
$('').prop("属性名","属性值")

$("input").change(function(){
    $(this).prop('checked');
});

这个只能获取原有的属性

### 获取自定义属性
$().attr("index");
$().attr("index",2);

### h5 data自定义属性
$().attr("data-index");

### 数据缓存 data()
$().data("key",""); 这个不会改dom结构
而是存放在元素对象之中

获取h5 data-属性,不用写data- 而且返回数字类型，上面attr是字符串
$().data(”index“); 

### 案例：购物车全选案例

## jq对元素内容修改
$().html();//获取内容,包括元素标签
$().html("xxx");//设置内容
等于innerHTML

$().text();//只有内容，不包含标签

获取表单
$('input').val();
设置
$('input').val(”xxx“);

### 案例：修改购物车商品数量


## jq元素操作

### 遍历元素
$('div').each(function(index,domEle){
    domEle是dom对象
    可以转化
    $(domEle).css('color',"red");

});

### 遍历
$.each(obj,function(index,e){

});

obj可以是 jq对象
可以是arr[]
可以是对象

$.each({name:"xxx"},function(key,value){

});

### 创建添加删除元素

var li = $("<li>123</li>")//创建了

1.内容添加，添加到元素内部
$("ul").append(li);
$("ul").prepend(li);//添加到最前面

2.外部添加
$("ul").after(div);
$("ul").befor(div);

删除元素：
$("ul").remove();//删除元素本身
$("ul").empty();//删里面所有元素
$("ul").html("")//删除内容

### 案例：商品添加删除操作


===============
=======day03===
===============
## jq事件处理

### 事件注册
单个事件注册
$('div').click(function(){});
change(); resize ; scroll

### on绑定
多个事件
$('div').on({
    click:function(){},
    mouseover:function(),

});
多个事件同一个响应
$('div').on("click mouseover",funciton(){

});

优势2：事件委派，把子元素的事件绑定在父元素身上
这样我们就可以给一个元素绑定事件了

$('ul li').click();这样每个li都绑定了事件

$('ul').on('click',"li",function(){

});
这个的触发对象是li，但是事件处理是绑定在父元素身上的

* 老版本用bind ，现在用on

优势3：
未来创建的元素也能点击。用click不行
比如ol中没有li，然后绑定了点击事件，那么传统的方法不会触发
用on会触发


### 案例：发布删除微博
创建的li，开始是display:none的
如果显示，调用 li.sildeDown()就行 jq动画

这时li是动态添加的，所以里面的删除 事件得用on来注册
删除：li.remove(); 删除自身

### 解绑事件 off

$('ul').off();//解除所有事件
$('ul').off('click');//解除指定事件

$('ul').off('click',"li");//解除事件委托


### one事件
只能触发事件一次
写法同on

### 自动触发事件 

$('div').click();//自动调用click

$('div').trigger('click');//

//不会触发元素默认行为，比如input有焦点，点击就会获得焦点
//这个方法触发的click不会有光标在闪烁
$('div').triggerHandler('click');

### jq事件对象
$(div).on('click',function(e){
    //和之前的点击事件对象差不多

});

## jq其他方法

### jq拷贝对象
$.extend([deep],target,object1,[objectN]);
deep 默认false，浅拷贝
target要拷贝的对象

### 多库共存
jq用$来做标识符，和别的库冲突了，如何解决

jq解决方案
1.就是把 $换成jQuery
2.换成自己的名称
var xxx = $.noConflict();
var div = xxx(‘div’);

### jq插件
jq主要是做dom操作的
www.jq22.com //jq插件库
www.htmlleaf.com //jq之家
比如：瀑布流，响应式（根据宽度改变布局）插件
把demo css js引入，复制html css js代码


### 图片懒加载
展示的时候再加载，在list中
减轻服务器压力
www.jq22.com 搜索懒加载
EasyLazyload.js
引入js必须写在body的最后面

### 整屏滚动
滚动一下滚动一整屏，想竖直的viewpager
github.com/alvarotrigo/fullPage.js
可以用中文翻译网站
www.dowebok.com/demo/2014/77/
使用方法还是一样，引入相关js，css
复制html结构，
如果要自定义配置，可以看看各个属性的作用
修改样式：chrome中找到元素的样式，你覆盖就行

### bootstrap js 插件
bootstrap基于jq
v3.bootcss.com
全局css样式：这个是人家给你定义好的样式，你拿来用就行
组件（组合好的控件）：比如导航条，下拉菜单
js插件：模态框(dialog)，tab栏，切换按钮，轮播图






