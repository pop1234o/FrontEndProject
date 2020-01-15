CSS 指层叠样式表 (Cascading Style Sheets)

其实css学的就是选择器和样式属性
选择器能花样指定你给哪个元素设置属性





<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>

selector {declaration1; declaration2; ... declarationN }
selector {property: value}

h1 {color:red; font-size:14px;}


选择器的分组
h1,h2,h3,h4,h5,h6 {
  color: green;
}
  

继承及其问题
body {
     font-family: Verdana, sans-serif;
}
body下所有标签都用这个字体

派生选择器
li strong {
    font-style: italic;
    font-weight: normal;
}
<li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li>


========id 选择器
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。
id 选择器以 "#" 来定义。
#red {color:red;}
<p id="red">这个段落是红色。</p>

======id 选择器和派生选择器
#sidebar p {  
	font-style: italic;
	text-align: right;
	margin-top: 0.5em;
}
p标签下id为sidebar的样式

p#sidebar {  
	font-style: italic;
	text-align: right;
	margin-top: 0.5em;
}
（特指）id为sidebar的p标签

======CSS 类选择器=
在 CSS 中，类选择器以一个点号显示
.center {text-align: center}
<h1 class="center">
This heading will be center-aligned
</h1>

=====class 也可被用作派生选择器：
.fancy td {
	color: #f60;
	background: #666;
}
td中class为fancy的样式

td.fancy {
	color: #f60;
	background: #666;
}
class为fancy的td的样式


========CSS 属性选择器
为带有 title 属性的所有元素设置样式
[title]
{
color:red;
}

为 title="W3School" 的所有元素设置样式：
[title=W3School]
{
border:5px solid blue;
}

为title包含hello的所有元素设置样式
[title~=hello] { color:red; }


input[type="text"]
{
  width:150px;
  display:block;
  margin-bottom:10px;
  background-color:yellow;
  font-family: Verdana, Arial;
}

===================
======样式==========
===================

p {background-color: gray;}
body {
background-image: url(/i/eg_bg_04.gif);
 background-repeat: repeat-y;
  
  background-position:center;
  background-position:50% 50%;中点对齐
  background-position 的默认值是 0% 0%，在功能上相当于 top left
  background-position:50px 100px;
  
  
  background-attachment:fixed  禁止图像随网页滚动
}

======缩进文本
1em=一个字体的宽高，是个相对值
任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px
https://zhuanlan.zhihu.com/p/39270696 （如何更愉快地使用em —— 别说你懂CSS相对单位）

p {
text-indent: 5em;
text-indent: 20%; 缩进值是父元素的 20%
}
继承
div#outer {width: 500px;}
div#inner {text-indent: 10%;}
p {width: 200px;}

<div id="outer">
<div id="inner">some text. some text. some text.
<p>this is a paragragh.</p>
</div>
</div>

以上标记中的段落也会缩进 50 像素，这是因为这个段落继承了 id 为 inner 的 div 元素的缩进值。

=========对齐
text-align 不会控制元素的对齐，而只影响内部内容。元素本身不会从一段移到另一端，只是其中的文本受影响。

 justify多行文本两端对齐

====字间隔

p.spread {word-spacing: 30px;}
p.tight {word-spacing: -0.5em;}

=====字母间隔
多个字母组成一个字
h1 {letter-spacing: -0.5em}
h4 {letter-spacing: 20px}

=====字符转换
h1 {text-transform: uppercase}


=====文本装饰
text-decoration 有 5 个值：

none
underline
overline
line-through
blink


结合多种装饰
a:link a:visited {text-decoration: underline overline;}


========处理空白符
https://www.w3school.com.cn/css/css_text.asp 值的解释
p {white-space: normal;} 默认

========字体
body {font-family: sans-serif;}
Serif 字体
Sans-serif 字体
Monospace 字体
Cursive 字体
Fantasy 字体

=======斜体
font-style:normal; {font-style:italic;}


========加粗
p.thick {font-weight:bold;}
=======大小
h2 {font-size:40px;}


========设置链接的样式
a:link {color:#FF0000;}		/* 未被访问的链接 */
a:visited {color:#00FF00;}	/* 已被访问的链接 */
a:hover {color:#FF00FF;}	/* 鼠标指针移动到链接上 */
a:active {color:#0000FF;}	/* 正在被点击的链接 */


请按照以下次序规则：

a:hover 必须位于 a:link 和 a:visited 之后
a:active 必须位于 a:hover 之后


=========去掉链接下划线
a:link {text-decoration:none;}

=======CSS 列表
ul {list-style-type : square} 列表左侧marker的样式
ul li {list-style-image : url(xxx.gif)}
ul li { list-style-position  : inside}

li {list-style : url(example.gif) square inside}

list-style 的值可以按任何顺序列出，而且这些值都可以忽略。只要提供了一个值，其它的就会填入其默认值。

========CSS 表格
表格边框
table, th, td
  {
  border: 1px solid blue;
  }

上例中的表格具有双线条边框。这是由于 table、th 以及 td 元素都有独立的边框。

border-collapse 属性设置是否将表格边框折叠为单一边框：

<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>Bill</td>
<td>Gates</td>
</tr>
<tr>
<td>Steven</td>
<td>Jobs</td>
</tr>
</table>

宽高

table
  {
  width:100%;
  }

th
  {
  height:50px;
  }
  
对齐
td
  {
  height:50px;
   text-align:right;
  vertical-align:bottom; 
    padding:15px;
      border:1px solid green;
     background-color:green;
      color:white; 字体颜色
  }


border-collapse	设置是否把表格边框合并为单一的边框。
border-spacing	设置分隔单元格边框的距离。
caption-side	设置表格标题的位置。
empty-cells	设置是否显示表格中的空单元格。
table-layout	设置显示单元、行和列的算法。


=========轮廓
p 
{
border:red solid thin; 边框
outline:#00ff00 dotted thick;
}

==========内边距
上、右、下、左
h1 {padding: 10px 0.25em 2ex 20%;}
单独属性
h1 {
  padding-top: 10px;
  padding-right: 0.25em;
  padding-bottom: 2ex;
  padding-left: 20%;
  }
内边距的百分比数值 是相对于其父元素的 width 计算的


=========边框
元素的边框 (border) 是围绕元素内容和内边距的一条或多条线
https://www.w3school.com.cn/tiy/t.asp?f=csse_border-style
p.dotted {border-style: dotted}
p.dashed {border-style: dashed}
p.solid {border-style: solid}
p.double {border-style: double}
p.groove {border-style: groove}
p.ridge {border-style: ridge}
p.inset {border-style: inset}
p.outset {border-style: outset}

宽度
border-width: thick;

p {border-style: none; border-width: 50px;}
必须设置border-style才会有边框

颜色
border-color: blue rgb(25%,35%,45%) #909090 red;

========外边距
h2 {
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  }
p {margin: 20px 30px 30px 20px;}

=======CSS 外边距合并
合并后边距为较大者

==================
========css定位====
==================

div、h1 或 p 元素常常被称为块级元素。这意味着这些元素显示为一块内容，即“块框”。
与之相反，span 和 strong 等元素称为“行内元素”，这是因为它们的内容显示在行中，即“行内框”。


通过将 display 属性设置为 block，可以让行内元素（比如 <a> 元素）表现得像块级元素一样。
还可以通过把 display 设置为 none，让生成的元素根本没有框


======CSS 定位机制
CSS 有三种基本的定位机制：普通流（默认）、浮动和绝对定位。


普通流中的元素的位置由元素在 (X)HTML 中的位置决定。
块级框从上到下一个接一个地排列

=======CSS 相对定位
#box_relative {
  position: relative;
  left: 30px;
  top: 20px;
}
相对于其正常位置的偏移

========绝对定位
#box_relative {
  position: absolute;
  left: 30px;
  top: 20px;
}

===========css浮动
https://www.w3school.com.cn/css/css_positioning_floating.asp
CSS float 属性


====================
======CSS 元素选择器===
===================
CSS 元素选择器
选择器分组
h2, p {color:gray;}

通配符选择器
* {color:red;}

CSS 多类选择器
<p class="important warning">
This paragraph is a very important warning.
</p>
结合两个类的特性

.important.warning {background:silver;} 同时有两个类的样式
只要有就能匹配，不管顺序

=======CSS ID 选择器
#intro {font-weight:bold;}


========CSS 2 引入了属性选择器
a[href][title] {color:red;}
a[href="http://www.w3school.com.cn/about_us.asp"] {color: red;}


==========CSS 后代选择器

如果您希望只对 h1 元素中的 em 元素应用样式，可以这样写：
h1 em {color:red;}
不论 em 的嵌套层次多深,都有效
div.sidebar a:link {color:white;}
div.maincontent a:link {color:blue;}


=========CSS 子元素选择器

h1 > strong {color:red;}
只对子元素生效，嵌套的无效

==========后代和子结合
table.company td > p

========CSS 相邻兄弟选择器
如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector

h1 + p {margin-top:50px;}
给h1后面的p元素设置属性

========结合
html > body table + ul

父元素是html的body元素  中的 table 元素 后的ul元素 的属性

=======CSS 伪类 (Pseudo-classes)
CSS 伪类用于向某些选择器添加特殊的效果。

selector : pseudo-class {property: value}
selector.class : pseudo-class {property: value}

a:link {color: #FF0000}		/* 未访问的链接 */
a:visited {color: #00FF00}	/* 已访问的链接 */
a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
a:active {color: #0000FF}	/* 选定的链接 */

提示：在 CSS 定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
提示：在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
提示：伪类名称对大小写不敏感。


a.red : visited {color: #FF0000}
<a class="red" href="css_syntax.asp">CSS Syntax</a>

=========first-child 伪类
p:first-child {font-weight: bold;}
某元素第一个子元素的所有 p 元素设置为粗体

必须声明 <!DOCTYPE>，这样 :first-child 才能在 IE 中生效。

p > i:first-child {
  font-weight:bold;
} 
父元素是p的i元素，且是p中的第一个i元素

=======lang 伪类
:lang 伪类使你有能力为不同的语言定义特殊的规则
q:lang(no)
   {
   quotes: "~" "~" 定义引号类型
 }
<p>文字<q lang="no">段落中的引用的文字</q>文字</p>

:active	向被激活的元素添加样式。	1
:focus	向拥有键盘输入焦点的元素添加样式。	2
:hover	当鼠标悬浮在元素上方时，向元素添加样式。	1
:link	向未被访问的链接添加样式。	1
:visited	向已被访问的链接添加样式。	1
:first-child	向元素的第一个子元素添加样式。	2
:lang	向带有指定 lang 属性的元素添加样式。 2

===========伪元素
selector:pseudo-element {property:value;}
selector.class:pseudo-element {property:value;}

p:first-line
  {
  color:#ff0000;
  font-variant:small-caps;
  }

p:first-letter
  {
  color:#ff0000;
  font-size:xx-large;
  }

=====before 伪元素  after 伪元素
在每个 <h1> 元素前面插入一幅图片：
h1:before
  {
  content:url(logo.gif);
  }

:first-letter	向文本的第一个字母添加特殊样式。	1
:first-line	向文本的首行添加特殊样式。	1
:before	在元素之前添加内容。	2
:after	在元素之后添加内容。2


====================
========css高级=====
===================

对齐块元素
在其前后都会换行， 占据全部可用宽度的元素

居中效果
.center
{
margin-left:auto; 均等地分配可用的外边距
margin-right:auto;
width:70%;
background-color:#b0e0e6;
}

==========块级元素 内联元素
块级元素是一行一个，内联元素是都在一行内，超过一行会折行（但其实还是一行）


=================浮动 float
https://www.cnblogs.com/iyangyuan/archive/2013/03/27/2983813.html （经验分享：CSS浮动(float,clear)通俗讲解）
指定一个盒子（元素）是否可以浮动。
left
right
none
inherit

其实普通流是从上到下排列，而设置一个元素浮动，只会让他脱离普通流，后面的元素补上
但是这个元素还是在原来那个元素的下方
感觉float本意是让文字环绕在上个区块周围

float前面的元素也是float，那么就会横向排列，宽度不够会自动换行到下一行


下面这个图片会浮动到段落的右侧

img 
{
float:right
}

<p>
<img src="/i/eg_cute.gif" />
This is some text. This is some text. This is some text.
</p>

正常的画图片是段落的第一个元素，<p>中的内容是在一行内的
img 
{
float:left
}
这个效果就是段落包围图片

span
{
float:left;
width:0.7em;
font-size:400%;
font-family:algerian,courier;
line-height:80%;
}
首字母变大的效果

---------clear
指定不允许元素周围有浮动元素

left
right
both
none
inherit

clear:both;
这个属性是对自身有效的,
clear:left
如果当前元素左边有float的元素，那么这个元素的float是无效的


========position=====
相对定位 相对于当前位置
绝对定位 相对于父布局？？
固定定位  fixed  固定位置，不会随着浏览器滚动而滚动


=========可见=====
h1.visible {visibility:visible}
h1.invisible {visibility:hidden}



===========光标改变======
<span style="cursor:auto">
Auto</span><br />
<span style="cursor:crosshair">
Crosshair</span><br />
<span style="cursor:default">
Default</span><br />
<span style="cursor:pointer">
Pointer</span><br />
<span style="cursor:move">
Move</span><br />
<span style="cursor:e-resize">
e-resize</span><br />
<span style="cursor:ne-resize">
ne-resize</span><br />
<span style="cursor:nw-resize">
nw-resize</span><br />
<span style="cursor:n-resize">
n-resize</span><br />
<span style="cursor:se-resize">
se-resize</span><br />
<span style="cursor:sw-resize">
sw-resize</span><br />
<span style="cursor:s-resize">
s-resize</span><br />
<span style="cursor:w-resize">
w-resize</span><br />
<span style="cursor:text">
text</span><br />
<span style="cursor:wait">
wait</span><br />
<span style="cursor:help">
help</span>

===========导航
<ul>unordered link 无序链表
<ol>order link 有序链表

默认链表是有marker的，和边距（浏览器的默认设定）
如果要去掉marker
{
list-style-type:none; 去掉marker
margin:0;
padding:0;
}

a默认是包裹内容的，要设置宽度，得设置block
a
{
display:block;
width:60px;
background-color:#dddddd;
}

=======水平导航栏
有两种创建水平导航栏的方法。使用行内或浮动列表项。
两种方法都不错，但是如果您希望链接拥有相同的尺寸，就必须使用浮动方法。

 默认地，<li> 元素是块元素


========图片透明
img
{
opacity:0.4;
filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
}
img:hover
{
opacity:1.0;
filter:alpha(opacity=100); /* 针对 IE8 以及更早的版本 */
}




================
======css3=====
==============
div
{
transform:rotate(30deg);
}

==========添加圆角
div
{
text-align:center;
border:2px solid #a1a1a1;
padding:10px 40px; 
background:#dddddd;
width:350px;
border-radius:25px; 圆角 
-moz-border-radius:25px; /* 老的 Firefox */
}

=========CSS3 边框阴影
div
{
box-shadow: 10px 10px 5px #888888;
}

========CSS3 边框图片
div
{
border-image:url(border.png) 30 30 round;
-moz-border-image:url(border.png) 30 30 round; /* 老的 Firefox */
-webkit-border-image:url(border.png) 30 30 round; /* Safari 和 Chrome */
-o-border-image:url(border.png) 30 30 round; /* Opera */
}

==========CSS3 背景
以前设置图片背景只能用原始大小

div
{
background:url(bg_flower.gif);
-moz-background-size:40% 100%; /* 老版本的 Firefox */
background-size:40% 100%;
background-repeat:no-repeat;
}

background-origin 属性规定背景图片的定位区域。
背景图片可以放置于 content-box、padding-box 或 border-box 区域。


=========单词换行
允许对长单词进行拆分，并换行到下一行
p {word-wrap:break-word;}

=============2d转换
translate()
rotate()
scale()
skew()
matrix()


=======创建动画
注释：Internet Explorer 9，以及更早的版本，不支持 @keyframe 规则或 animation 属性。
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}

@-moz-keyframes myfirst /* Firefox */
{
from {background: red;}
to {background: yellow;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
from {background: red;}
to {background: yellow;}
}

@-o-keyframes myfirst /* Opera */
{
from {background: red;}
to {background: yellow;}
}

使用

div
{
animation: myfirst 5s;
-moz-animation: myfirst 5s;	/* Firefox */
-webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
-o-animation: myfirst 5s;	/* Opera */
}







