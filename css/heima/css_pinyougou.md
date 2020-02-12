===================================
==============day1===============
==================================
##开发规范
###html规范
记得声明网页语言和编码规范
用四个空格
注意广告起名字

###文件夹分类
img项目类图片
upload 产品类文件，要经常替换的

初始化css放到base.css中
公共样式放到common.css 比如公共头，尾

##网站ico图标
xx.com/favicon.ico 就能访问图标
使用：
把 ico放根目录（为了兼容性）
在head添加
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

www.bitbug.net 把png转换成ico

##搜索引擎优化 seo
三大标签：
1.
title -谷歌限制70b 35个中文 ，百度是56b 28个中文
格式：网站名称-网站介绍
搜索引擎显示的标题
<title></title>
2.
description 描述，网站说明
<meta name="description" content="xxx">
搜索引擎显示的内容

3. 
Keywords
<meta name="Keywords" content="content">

专业优化人员写的

##字体图标
图片大，几乎支持所有浏览器
可以改大小，改颜色
设计出svg，前端人员上传生成兼容的字体文字，下载，使用

可以使用 阿里的icon font
www.iconfont.cn
也可以
icomoon.io

可以下载到网站常用的icon
下载有个ttf文件，就是字体文件
ttf  truetype font
otf格式 eot格式 svg格式

使用步骤：
把fonts文件夹放到根目录
css声明新字体，可以直接复制style文件,里面有@font-face{}来定义字体
定义class样式font-family:@font-face中定义的名称
复制字符，设置class，
* 下载里有个demo可以看

###追加字体图标
下载的里面有个selections.json
import icons 导入之前的文件
然后追加下载即可

=============开始项目=============
通用的css ，比如浮动，颜色，抽取单独样式
### 通用header footer 部分
* 可以通过line-height 和height关系来调整行内元素的上下移动
* 除了浮动，还可以用定位来布局
* logo用背景图片，别用img
* input和button是行内块，用浮动解决间隙问题
* 小icon都用字体图标就好
* 小模块，比如购物车的数字，或者字体图标，可以用i标签
* 写完header通用样式，然后写footer，在common.css中
* h+p来布局上下结构的文案


###logo优化
用h1标签包裹a，a设置logo背景，告诉搜索引擎这里和重要
h1里放个链接，是返回首页的，a里放一个标题，首行缩进 text-indent:-999px;
overflow:hidden 隐藏文字，给a加title显示悬浮文案
或者直接font-size：0
目的：让搜索引擎收录这个关键字。这是淘宝的做法

###主体部分
* 首页焦点轮播图是 ul>li>a>img来做 
* 轮播图的指示器是ol>li来做，li给个宽高，然后设置颜色
* 左右结构的一般都是用浮动
* margin-auto
* 一般元素相对定位都是因为子元素有绝对定位
* li的分割线可以用边框做，最后一个特殊设置class来去掉，也可以用li来做竖线
* 一个模块可以分为hd head和bd body两个div

### 楼层区 floor部分
* tab栏用ul+li+a 不用div+a。tab的li对应下面的一个ul，显示隐藏。用js做
* 如果一个横排每个li宽度不一样，那么单独设置宽度即可，比如 w200 w300
* 各种元素的水平垂直居中方法要牢记，或者直接给margin也行


### 过渡效果
不支持ie9
一般和hover配合，过渡动画
transition:属性 时间s/ms 运动曲线(ease) 何时开始s/ms

ease 逐渐慢
linear 匀速
ease-in 加速
ease-out减速
ease-in-out 先加速后减速

多组用逗号隔开
或者
transition：all 1s ease 0s;
transition：all 1s;

这个属性要写在本身上，不在hover上

案例：item放大，或者向上移动效果
:hover{
	margin-left:-10px;
}

=============列表页===============
* 首先还是盒子分析
* 基本就是把头部尾部复制过来
* 中间是div+ul+li
* 要给每个item li设置一个class，方便设置里面的样式
* padding不行还有margin 
* 删除线 <s> <del>
* 进度条可以用两个个div，然后里面div设置宽度 88%
* 一行中特殊颜色的字可以用em标签
* 要牢记 行内块，块，行内元素是哪些，浮动，绝对定位对属性的转化
* 底部对齐可以用绝对定位
* item margin-right 导致item掉下去问题，给ul加margin-right:-10px,变宽。子盒子内容可以超过父盒子
* 主要子布局float导致父布局塌陷问题，父盒子，clearfix即可
### 分页样式
一个盒子text-align:center 可以让行内元素和行内块都居中
一个有宽度的块元素水平居中用margin:auto, 没宽度的行内块用text-align:center;

所以用span来做
span+a 把a转化成行内块，就能设置宽高了




=============总结===========
行内元素
span <b>和<i> 
行内元素特征：
(1)设置宽高无效
(2)对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效
(3)不会自动进行换行

块状元素：
块状元素代表性的就是div，其他如p、nav、aside、header、footer、section、article、ul-li、address等等
(1)能够识别宽高
(2)margin和padding的上下左右均对其有效
(3)可以自动换行
(4)多个块状元素标签写在一起，默认排列方式为从上至下

行内块状元素：
行内块状元素特征：
(1)不自动换行
(2)能够识别宽高
(3)默认排列方式为从左到右

### :focus伪类 -已经获得焦点的 css3
主要针对表单元素 比如input 
,颜色，宽度，加上过渡效果，体验就很好了

* 过渡写在本身上 不是伪类上
* input去掉边框outline:none
* 元素的显示隐藏设置， display:none/block可以（不保留位置），visibility:hidden/visible（保留位置）也可以


======================
========day04=========
======================
====商品详情页=======
###面包屑导航 crumb
找到回去的路
* >可以直接用字符，+a一起
* 轮播图两边的三角可以用定位
* 轮播图还是ul+li
* 轮播缩略图鼠标经过效果用js做，写个.currentItem样式，不用：hover
因为经过上面的大图也要变。是由js控制
* 用高度剩余法可以避免margin-top了
* 善用dl+dt+dd 这样就让结构清晰了，dt放标题部分，dd放数据部分，比如购物详情页的购买参数
* overflow:hiden也能清除浮动
* 选项item用a来做就行，变成行内块

===========注册页面=========
之前用table，现在可以用ul+li 里面用label+input



============总结：
0.根据ui来确定布局
1.各种box布局实现，包括定位
水平、垂直排列
一左一右布局
网格布局
轮播图，轮播略缩图
footer实现
tab栏切换：ul+li做tab，下面div 显示隐藏

1.1 了解块，行内块，行内元素的特性

2.边距问题确定
3.各种（文字，盒子）水平居中垂直居中
文字垂直居中：line-height == height
文字水平居中: text-align:center

4.浮动引起的问题解决
5.显示隐藏
6.各种显示样式
文字样式
背景
边框
鼠标样式

7.会把css的通用抽取出来

















