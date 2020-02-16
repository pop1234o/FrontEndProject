css3

##css3
移动端支持优于pc端，ie9以下不行

###属性选择器
<button disabled>禁用
选择有disabled属性的button元素
button[disabled]{
	
}

属性选择器权重和类选择器是 10

input[type="search"]{
	
}

替代并集选择器
div[class^="icon"]{} 开头
div[class$="icon"]{} 结尾
div[class*="icon"]{} 包含

## 结构伪类选择器

选中第一个元素
ul li:first-chlid{}
ul li:last-chlid{}
ul li:nth-chlid(n){} 选第n个

### nth-chlid
li的index从1开始
ul li:nth-chlid(n){}
n也可以是 odd even偶数

n是公式 ，从0，1，2。。n
2n
2n+1
n+5 从第5个开始
5-n 前5个

###nth-chlid
div :nth-child(1){}
选的是div中的第一个元素

div span:nth-child(1){}
它选择的是div中的第一个，而且是span的
如果div中第一个不是span，那么没有元素被选择

### first-of-type
div span:first-of-type{}
选中div中的第一个span，不管div的第一个元素是不是span

div span:last-of-type{}

div span:nth-of-type(2){}

这种只用在子元素类型不同的地方，ul中只能是li，所以上面两者选择效果是一样

## 伪元素选择器
伪元素选择器 两个冒号

### :before 

div::before{
	display:block; 
	content:"xxx"; //必须有
	width:
	height:
	background-color
}

插入的是一个盒子，都是行内元素，但是可以改变

因为在dom中看不见创建的盒子，所以叫伪类
调试只能看到 ::before
权重是1 


### 伪元素选择器案例
比如给div最右面加个三角，我们可以用定位，浮动，新写个盒子
也可以用after ，给个定位

======================
=========day2=========
=====================
##2d转换 transform

translate
scale
rotate

### translate
移动盒子
1.定位
2.外边距
3.translate
div{
transform:translate(x,y);
transform:translateX(x);
//x是50%代表相对于自身的宽度
transform:translateY(y);
}
* 不会影响其他盒子
绝对定位会脱离普通流
外边距也会

示例：
* hover时候item图片向上移动
* 实现子盒子居中，
absolute
top:50%
right:50%
transform:translate(-50%,-50%)
* 对行内元素无效

### ratate
transform:rotate(-45deg)

* 圆形边框，border-radius:50%

案例：三角箭头
正方形只有两个边，旋转45度
用::after直接加盒子就行
用绝对定位变成行内块

三角旋转div:hover::after{}

#### 旋转中心点
transform-origin:x y;
默认50% 中点
也可以是方位名词 left bottom center

案例：
:hover的时候内容旋转上来

### scale
transform:scale(x,y)
1 1 倍
简写
transform:scale(2)
优势：
以前修改宽高，往左右往下边走
而且影响其他盒子
scale是中心点，不影响其他盒子。

案例：item:hover放大
页码item:hover 放大

### 转换综合写法
transform:translate() rotate() scale()
顺序不一样，效果不一样。一般translate在最前

## css动画 Animation
过渡一般是鼠标经过，而这个用在页面一打开就执行动画
过渡做不了一打开就执行
1.定义动画
@keyframes anim_move{
	0%{
		transform:translateX(0px);
	}

	100%{
		transform:translateX(100px);
	}

	或者
	from{} 0%
	to{} 100%

}
百分比是总时间的百分比
2.使用动画
div{
	animation-name:anim_move
	animation-duration:10s;
}

### 多个状态动画
可以定义25%的状态

### 动画属性
animation-name:
animation-duration:
animation-timing-function: linear
animation-delay:
animation-iteration-count:infinite
animation-direction: alternate 反方向播放
animation-fill-mode: forwards 是否是结束状态
animation-play-state: paused running
案例：鼠标经过停止播放，移走继续播放

简写：
animation:myfirst 5s linear 2s infinite alternate forwards
前两个要写

案例：
热点图，三个圆圈放大效果，无限循环
opacity:0.8透明

#### steps
animation-timing-function:steps(3)
步长，非线性的变化
案例：打字机效果
white-space:nowrap;文字一行内显示
overflow:hidden

案例：奔跑的熊大
用step实现帧动画+用精灵图
background-position:-x 0;变化

一个元素可以添加多个动画，用逗号分隔

这个比gif支持色彩更多，更灵活

=============================
===========day03=============
=============================
## 3d转换
特点：
1.近大远小
2.遮挡
z轴，屏幕外是正

### 3d位移 -常用
transfrom:translateZ(100px)
一般都用px
transfrom:translate3d(x,y,z);

### 3d透视 perspective
让网页产生3d效果
视距：眼睛到屏幕的距离
透视写在3d转化的盒子的父盒子上

perspective:200px 视距，
越小代表眼睛离屏幕越近，那么物体越大

### 旋转 rotate3d 旋转

transform:rotateX(180deg)
沿着x轴旋转
必须要加透视（500px）才能看到立体的翻转效果

左手法则：大拇指指向x正方向，那么四指方向是正
rotateY 也服从

rotateZ和2d效果基本一样

简写：
rotate3d(x,y,z,deg);
rotate3d(1,0,0,45deg);

### transform-style - 重要
一个盒子3d旋转，父盒子也3d旋转，子盒子就变2d了
让子盒子保持3d空间，
transform-style:
flat 平面
preserve-3d 3d
默认不开启3d空间

### 3d案例
* 两个面翻转的盒子

* 3d导航栏
立方体翻转效果
用到translate来进行立方体的拼接
先构造立方体，然后给父盒子3d旋转
* 旋转木马

## 浏览器私有前缀
为了兼容老版本
-moz- firefox
-ms- ie
-webkit-  safari chrome
-o- opera

-webkit-border-radius:10px


















