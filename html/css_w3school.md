CSS 指层叠样式表 (Cascading Style Sheets)

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

p {text-indent: 5em;}


























