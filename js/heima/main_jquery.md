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




















