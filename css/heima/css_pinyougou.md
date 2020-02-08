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




