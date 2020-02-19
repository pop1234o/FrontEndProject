===============
=======day01===
===============
# 移动页面开发

## 调试
1.chrome模拟
2.本地服务
3.远程服务

## 视口
浏览器显示页面内容的屏幕区域
### 布局视口 layout viewport
iOS Android默认布局视口是980px
早期解决pc网页在手机上显示
但是ui太小了

### 视觉视口 visual viewport
布局仍是原来的宽度，手机上只看到网页的一部分
用户可以缩放看
### ideal viewport理想视口
手机屏幕有多宽，布局视口就有多宽
<meta 
name="viewport" 
content="width=device-width, 
user-scalable=no或0
initial-scale=1.0, 
maximum-scale=1.0, 
minimum-scale=1.0;"
>
平时在pc屏幕上1080px，16px文字看着打，是因为屏幕尺寸大，每英寸像素就少
到手机上默认是980px视口宽度，16px就很小，而且手机的dpi高，就是每英寸
的像素多，所以显示的文字就小。

加上meta就好了

## 二倍图
开发的时候1px不一定是一个物理像素点
pc上相等，手机上不一定
### 物理像素比 dpr
在app上1px占两个物理像素
iphone8 物理像素是750， 375px能沾满屏幕

早期是1：1关系，直到retina显示技术出现
把像素放到物理像素上，显示更细腻
1px*1px内容显示在2*2个物理像素上
最早摩托罗拉开发

### 多倍图
50*50图片因为有放大问题，图片放大就模糊了
所以在iphone8上放100*100的图片
img{
    width:50px;
    height:50px;
}
你放一张100px图片就行了，这样在手机上会在100px*100px中显示
就不会模糊了

### 背景图片
background-size:w h    css3
只写一个参数会等比缩放
background-size:50%  基于父盒子的一半

background-size:cover 等比完全盖住
background-size:contain 有一边盖住

背景图片适配，也是放一张大图（两倍图），然后用
上面的属性指定大小就行

## 移动端开发
### 1.单独制作（京东）
通过设备判断

### 2.响应式兼容页面（三星手机官网）
通过宽度不同改变页面布局
制作麻烦，花大精力兼容

### app浏览器
放心使用 h5 css3
推荐使用 normalize.css 

### css3盒子模型
box-sizing:border-box //变成css3盒子模型
box-sizing:content-box//传统盒子模型
以前实际宽度要 宽度加上 边距 padding
加上这个宽度就不变了，不撑大盒子了

移动端都用css3盒子模型
pc要是兼容就用传统的盒子模型

### 移动端特殊样式
a {
    //点击不加高亮背景
    -webkit-tap-highlight-color:transparent
    //去掉默认外观效果，比如button的
    -webkit-appearance:none;
    //禁用长按弹出菜单
    -webkit-touch-callout:none;
}

## 移动端常见布局

1.单独制作
流式布局 百分比布局  -京东
flex弹性布局 -强烈推荐 -携程
less+rem+媒体查询布局 -苏宁
混合布局

2.兼容制作
媒体查询
bootstarp

### 流式布局
宽度都是百分比
但是不能无限小，或者大，这样内容可能就乱了
所以加上
max-width min-width
然后盒子居中

案例：m.jd.com
里面item宽度 20%

### 案例：京东首页
TODO

====================
========day02=======
====================
## flex 布局
简单快速，但是pc端比如ie支持差
父盒子用
display:flex;
子盒子就有宽高了

justify-content:space-around 平均分

子盒子 flex:1 宽度权重

### 布局原理
flexible 弹性布局 伸缩布局
任何一种盒子都能使用
父元素设置后，float，clear，vertical-align失效

把父元素设置为flex，从而控制 子元素就是flex item

### 父元素属性
flex-direction: 设置主轴
row 横向-默认 x主轴，y侧轴
row-reverse 横向反向 不重要
column -纵向


justify-content: 设置主轴的对齐方式
flex-start 左对齐 默认
flex-end 右对齐
center 居中对齐
space-around 平分剩余空间
space-between 两边贴边，平分剩余空间

flex-warp:是否换行
nowarp 不换行，装不开平分宽度，默认
warp

align-items 单行 侧轴对齐方式
flex-start
flex-end
center
stretch 拉伸 ，item不要给高度，高度拉伸到父布局
只适合单行中使用

align-content：多行 侧轴对齐方式
flex-start
flex-end
center
space-around 平分剩余空间 -
space-between
stretch 拉伸 
单行无效

flex-flow: row wrap 复合写法

### 子项属性
flex:子盒子占剩余空间的多少份 默认0
比如左侧固定宽度，右侧宽度固定，中间自适应

align-self 设置当前子盒子在侧抽的对齐方式
order 默认0 子盒子在布局中的顺序
-1表示在前面

======================
==========day03======
=======================
## rem布局 （重要） 苏宁
布局文字随着屏幕变化
流式布局和flex布局主要针对宽度，高度不行
如何实现宽高等比缩放
rem能解决

### rem
root em em是相对于父元素字体大小
1em = 父元素的字体大小

rem是相对于html元素的字体大小

em ：父元素可能有多个
rem: 只有一个html

### 媒体查询
Media Query css3语法
针对不同的屏幕尺寸来设置不同的样式

声明：
@media mediatype and|not|only (media feature){

}
mediatype
all
print 打印机
screen 手机 平板

and是左右两个条件的连接

案例：根据页面宽度来设置背景色
小于500px的样式
@media screen and (min-width:500px){
    body{

    }
}

最大宽度800px(小于等于800px)的设备上
@media screen and (min-width:800px){
    body{

    }
}


@media screen and (min-width:500px) and (max-width:800px)

### 实现动态变化
可以用 min-width 从小到大的格式

### 引入资源 了解
大屏用大屏css，小屏用小屏css

<link rel="stylesheet" 
media="mediatype and|not|only (media featrue)"
href="xxx.css"
>
建议：从小到大，下面的符合会覆盖上面的样式
示例：大屏一行一个div，小屏用浮动，一行一个

## less
css没逻辑，冗余高
不利于复用
css没计算能力，rem还得算，css也没有除法

Leaner style sheets，css扩展语言，css预处理器
css动态性特性

less其实就是一个自定义的语言，然后用处理器处理成css
### less安装
先安装node.js
node -v 安装成功
npm install -g less
lessc -v 安装成功

### less使用
新建 .less文件

### less变量
@变量名:值
不能数字开头，大小写敏感
@color:ping;
body{
    background-color:@color;
}
div{
    background-color:@color;
}
优点：改一处，其他都改了

### less编译
转换成css
vscode中有个 easyless插件
然后保存一下，就自动生成一个css

### less嵌套
.header{
    xxx
    a { //给.header里的a标签设置样式，不用平行写了

    }
}
优势：这样结构清晰，css平行的根本不好看嵌套关系

嵌套伪元素
a{
    &:hover{} //加& 表示和父级平行
}

less注释是 // 

### less运算
任何数字，颜色，变量都能运算 
@border:5px + 5;
div{
    width:200px * 2;
    height:82rem / 50px;
    color:#666-#222；
}

* 运算符左右都要有空格
* 两个单位不同，单位以第一个为准

## rem适配方案
目标：屏幕不同，ui等比缩放，而不是跳着变
技术方案1：less+媒体查询+rem
技术方案2：flexible.js +rem (推荐，因为简单)
flexible.js 淘宝出的

其实我们把750px设计稿划分成10等分，
75px/1份
设计稿有个100px的盒子，那么它就是100px/(75px/1份)
得出这个盒子占多少份，那么我们就根据这个来设置宽高即可

### 技术方案1：less+媒体查询+rem
常见ui设计图
iphone:750px
android:720px ,1080px

假如是 750px
宽度份15份（携程） 或者10份（淘宝）
那么（你要适配哪些尺寸就写上）
@media screen and (min-width:320px){
    html{
        //320/15
        font-size:23.22px;
    }
}
@media screen and (min-width:750px){
    html{
        font-size:50px;
    }
}
页面元素rem值=页面元素在750px下的尺寸/(width/15份)

### less引入less
@import "common.less"


## 技术方案2：flexible.js +rem (推荐，因为简单)
github.com/amfe/lib-flexible
用js来给你算出来 html的font-size
里面划分成10份，
ui给你750的设计图，那么1份就是75px
所以根据750ui中的元素的px除以75就得出x rem

### vscode px转rem插件 - cssrem
你就不用一个个算了
默认是 html 大小 1rem=16px
需要改一下

====================
========day04=======
====================
## bootstrap
响应式，一个页面随着屏幕变化变换页面结构

### 原理
通过媒体查询来选择不同的布局
<768px 超小屏幕(手机) 手机屏幕/2 比如iphonex就是 375px
768px-992px pad
992-1200 pc
1200以上宽屏pc

### 布局容器
分几段，一般设置成比最小的还小一点
<768px 就设置宽度100%
768px-992px 设置为750px
992-1200 pc 设置宽度为 950px

### 案例 响应式导航栏
宽屏一行，小屏多行
宽屏的时候每个li设置为 固定宽度，正好一排
小屏设置li宽度 33% 一行显示三个

如果小屏也为一行，那么就会显示不全，因为宽度固定

### 快速开发
bootstrap  来自twitter
基于html css js
bottstrap.css88.com(非官方)
里面有很多现成的样式，而且是响应式的
最稳定 3.x.x版本

## bootstrap使用
1.创建文件夹结构
创建bootstrap文件夹
下载bootstrap，放到这里
2.创建html骨架
使用ie最高版内核本来渲染内容
<meta http-equiv="X-UA-Compatible" content="IE=edge">
条件注释
<!--[if lt IE 7]>
<![endif]-->
复制 bootstrap中的条件注释，加入，兼容低版本ie h5 和css3
3.引入css
4.开始书写

### bootstrap布局容器
预定义了 .container 这里用的也是媒体查询
不同屏幕，.container宽度不同

### 栅格系统
grid systems
把容器分为12列，有点像rem，rem是整个屏幕划分
现有行，再有列
先定义行 class="row"
在定义列
class="col-lg-3" 设置盒子占列的几份 ，一共12份
小于12份则不沾满整个屏幕
大于12则换行显示

示例：
class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
lg-large
md-medium
sm-small
xs- extra small超小

### 嵌套
里面嵌套的也加上 col就行
或者在加一个 row的div也行，就没有父元素的padding了

### 列偏移
左右布局
.col-md-offset-4 右偏移4份
居中布局
也是偏移多少份

### 列排序
.col-md-push- 右推4份
.col-md-pull- 左拉4份
会覆盖
### 响应式工具
.hidden-xs 超小屏上隐藏
.visible-xs 只有大屏上显示
### 阿里百秀案例
写之前先分盒子
TODO






