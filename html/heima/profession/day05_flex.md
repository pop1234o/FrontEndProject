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

















