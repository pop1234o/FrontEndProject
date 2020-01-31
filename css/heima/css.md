day1

css位置

1.行内/内联
style="color:pink;font-size:16px;"

2.内部样式
<style type="text/css">
选择器
{
属性:值;
}
</style>
理论上可以放在任意位置，一般位于head中
type="text/css"可以省略

3.外部样式
.css文件
<link  rel="stylesheet" type="text/css" href="xx.css"/>
rel必须写，告诉引入的什么类型的文件
type可以省略

css常见选择器 - 重点
作用：找到特定的标签

基础选择器
标签选择器-标签名
类选择器-
.类名{}
共识命名规则

多类名
把重复的抽取出来
class="class1 class2"

id选择器
#id名{}

类选择器和id选择器区别
元素的id在同一页面是唯一的
id选择器只能调用一次

通配符选择器
*{}选择所有标签
降低页面响应速度，不要随便使用

团队约定：少用*和id选择器
不推荐对div span使用标签选择器

###css字体
font-size 基本用px 
一般默认大小是16px
一般
body{font-size:16px;}
统一浏览器选择

font-family:Arial,"微软雅黑"
多个字体，先找第一个，没找到再找第二个

Unicode字体，把中文编码

font-weight 粗细
可以查看css手册
100-900
400是normal
700是bold
提倡用数字


font-style 倾斜
normal italic
em {font-style:normal}
 
综合写法
font:font-style font-weight font-size font-family
不能更换顺序，size和family不能少
注意：字体颜色是color

体育新闻页面案例
合理选择容器 h1 div/span p 
统一字体大小
body{}
定义通用样式
.title{
font-size:16px;
font-weight:400
}

用em做特殊标签
比如搜索结果关键字
em{
font-style:normal;
color:skyblue;
}

css外观属性
文本颜色
color
rgb(255,0,0) rgb(100%,0,0)

如果有单独样式的，一般要用标签包裹
比如span +class
div+span

文本对齐方式
text-align：left right center
通用的可以抽取单独一个class


行高 line-height:10px;
首行缩进 
p{text-indent:2em;}
em:一个字符的宽度

去掉链接下划线
text-decoration:none underline overline上划线 line-through
a{text-decoration:none;}


chrome开发工具
ctrl+0复原大小
选中元素，styles中显示样式
可以直接修改样式，方便直接调试
可以查看样式所在位置

sublime emmet语法
提高html css 编写速度

div+tab 快速生成标签
div*4+tab 生成多个
ul>li +tab 生成父子级关系
div+p生成兄弟关系
ul>li*3 tab 
dl>dt+dd
.demo tab
.demo$10 tab
#id 
emmet语法

===================day02=====================
复合选择器
更*快速*高效的选择标签

###后代选择器（重点）
.nav a{ }
只给外面套一个div盒子，然后统一对里面的标签进行选择
就不用给每个a都设置class
.wclass ul li{}
外层 内层{}
只要是后代就选中，隔代也被选中

###子元素选择器
自能选择子元素,只选亲儿子
.class>a{}


###交集选择器 不常用
既是又是
p.class{}
用标签和类名定位

###并集选择器-重点
相同样式的写一起，各个选择器用逗号隔开
集体声明
p,span, .red{color:red;}


写页面要先理清结构

###伪类选择器
冒号，向选择器添加特殊效果
链接伪类选择器
a:link{} 未访问的链接
a:visited{} 已经访问
a:hover{}经过 -常用
a:active   点击的时候
顺序别颠倒，否则没效果
记忆：lv ha lv好

a有默认样式，需要特殊指定
比如.nav a{}
实际开发定义所有a
a{}
.nav a:hover{}
很少用其他伪类

##标签显示模式 -重点
三种显示模式 
div一行显示一个 span显示在一行
块级标签，行内标签，行内快元素

###block-level 块级元素
h1-h6 p div ul ol li 
自己独占一行
宽高边距都能控制
宽度默认是父控件宽度
里面可以放行内或块级元素

注意：p里不能放块级元素，比如div，否则浏览器解析错误
p h1-6 dt 里面都只能放文字

###行内元素
a strong b em i del s ins u span
一行多个
宽高设置无效，一般是包裹内容
行内元素只能放文本或其他行内元素
行内元素只能设置左右内外边距，不能设置上下的·
注意：
a中不能放a
a中可以放块级元素，但是要转换

### inline-block 行内块元素
img input td 
在一行内显示，但是可以设置宽高
默认宽高是内容本身的宽高

###显示模式相互转化
display:inline block inline-block
可以把span转换成块级元素 
可以设置大小了，而且一行放一个了

div转换成行内元素
一行多个，无大小，默认包裹内容

a转换成行内块
一行多个，a可以设置大小了
a的范围就大了


###垂直居中
css没有直接垂直居中

文字四条线：顶线，中线，基线，底线
基线和基线的距离叫行高

让盒子行高等于盒子高度 就垂直居中了
盒子指的是包裹文字的盒子
line-height


##背景
background-color:默认透明
background-image:url(images/xx.jpg)
提倡不加引号
background-repeat:
默认平铺
repeat no-repeat就原始大小 repeat-x repeat-y

###背景位置 -重点
background-position:x y 坐标
center left top right bottom
center center 要写两个
两个值都是方位，顺序无关
left 只写一个值，另一个默认居中
可以混用

###背景图
尽量选最大尺寸，能照顾大部分分辨率
然后背景都水平居中，垂直靠上对齐
background-position:center top;
x y
###列表指示器背景
一般是个图片

###背景附着
background-attachment:scroll fixed
背景随着滚动条 滚动/固定

###背景简写
没强制顺序标准
background:背景颜色 图片地址 平铺 滚动 位置;

###案例
div中 text-align:center
一般a大小就是背景图片的像素大小
设置no-repeat

###背景透明
鼠标移动到图片上有个半透明的mask
background:rgba(0,0,0,0.3) alpha0-1之间

##css三大特性
###层叠性：多种相同样式，后面的有效
 多个选择器样式会层叠到一起
###继承性
div{color:red;} div里面的标签也继承div标签的样式
text- font- line- color 这些是可以继承的
width等不能继承

###css选择器优先级
 *    0，0，0，0
<标签选择器 0，0，0，1
<class选择器/伪类 0，0，1，0
<id选择器 0，1，0，0
<行内样式 1，0，0，0
<!important 无穷大

div{color:blue!important;}

###权重叠加计算
复合选择器中计算权重（不进位）
.class0 a > .class1

前一位权重永远比后面的大
0，0，1，0>0，0，0，9
chrome中被划掉的样式代表被层叠掉了


###继承的权重是0
就算父类是.class，子类是标签，也是按照子类的来

**先看该标签有没有被选中，如果多个同时选中就看权重
###六个题
div{red} 
div div{blue}
上面是blue，因为两个都选中了标签，而第二个权重大

 
=================day03=====================
##css盒子模型-重点
网页本质，盒子

chrome能看元素的盒子大小

###边框 border
border-width:1px;实际开发中都是px表示
border-style:none solid dotted dashed
border-color:

border:简写，没有顺序
示例：可以做鼠标悬浮的item效果

指定某个边
border:none;
border-top: 1px dashed red;

示例：只有下边框的input

###表格细线边框
table{
border:1px solid red;
}
这样里面tr td就没了，也需要加上边框
这样就变粗了，边框重叠
border-collapse:collapse;表格边框合并

###盒子内边距
padding：上右下左
设置完了盒子变大了
padding简写
padding:10px 20px 上下10 左右20
padding:10 20 30 上10 左右20 下30
没有就是和对称的一致

chrome中compute查看边框和边距

###练习
导航栏 每个item不是一样宽度，自适应
高度不包括边框
a转化为行内块

###盒内尺寸计算
盒子大小 内容+padding+border
解决padding导致盒子变大问题
宽高减去padding即可

###padding不影响盒子大小情况
如果盒子没有宽度，那么不会撑开
p-块级元素，没有宽度，默认和父布局一样宽

###外边距
margin

###chrome调试的颜色
青色内边距，橙色外边距

###块级盒子水平居中
1.必须有宽度
2.设置左右外边距为auto
margin:0 auto;


###文字居中和盒子居中
text-align 让盒子里的文字和 行内元素 和行内块元素对齐

盒子里的盒子默认是和父盒子一样大小的，所以
子盒子居中也是一样的道理


###插入图片和背景图片
产品展示用插入图片
小图标或超大背景用背景图片
盒模型可以用padding来控制位置
背景图片移动位置用background-position

###清除默认边距 - 重要
浏览器body默认外边距 8px
p也有默认上下边距 1em
可以通过chrome调试工具看到

*{
margin:0;
padding:0;
}
这是以后写css的第一句话

为了照顾兼容性，行内元素只设置左右外边距，不要设置上下外边距，因为无效果，比如span

###垂直外边距合并现象

两个盒子的上下外边距默认会合并，取大值
解决方案：只给一个盒子添加margin

###嵌套外边距（塌陷）现象
场景：子盒子上面距离父盒子100px
可以给父盒子一个padding-top但是父盒子高度就得算上
padding了，而且所有盒子都受影响了


如果给子盒子margin-top:100
结果父盒子有效，子盒子无效
这叫嵌套外边距塌陷

解决方案：
1.给父亲一个透明border
2.给父亲一个padding-top:1px
3.overflow:hiden 
4.用浮动来解决，给子盒子一个浮动
前两种不常用

实际中优先用width。宽高剩余法来做
然后用padding，但是得重新计算盒子大小
最后margin因为有合并和塌陷问题

###新闻列表案例
分解盒子，定义class写样式
边框
水平居中，上边距
背景图
父盒子内边距，宽高减去padding
h2+ul盒子
分割线用底边框
li去掉指示器，li{list-style:none;} - 常用
li是块级元素
.box ul li{} 指定某个盒子中的li
给li设置背景图片，设置icon，
background:url() no-repeat 10px center;垂直居中
再设置文字的margin-left 或者父盒子的padding
因为li没有宽度，所以可以设置宽度

##css3拓展内容

###圆角边框
border-radius:10px; 50%就是圆
示例：购物车数字，圆角按钮，小圆点指示器
圆角矩形搜索框

###盒子阴影
box-shadow:水平阴影 垂直阴影 模糊距离 阴影尺寸 颜色 内外 inset/outset

前两个必写
可以通过chrome实时改变css来调试阴影样式

box-shadow:0 15px 30px rgba(0,0,0,0.1)
阴影尺寸是默认和原控件大小

###css书写规范
选择器和{要有空格
冒号后有空格
并集选择器一行一个
选择器尽量不超过三级

==================day04==================
##浮动

###网页布局核心--css来摆放盒子
三种机制来摆放盒子：
1.普通流
块级元素，上到下结构用
div hr p h1-h6 ul ol dl from table
行内元素，左到右
span a i em
2.浮动
让盒子从普通流中浮动起来，作用是让多个块级盒子在一行显示

3.定位
将盒子定位在浏览器的某一位置


###为什么要浮动？
比如实现多个div在一行显示
我们可以用行内块来处理，但是行内块默认有边距，而且不容易去掉，就算去掉有兼容问题，处理起来很麻烦。

而且不能实现一个行两个盒子，一个左，一个右这种效果

总结，标准流不能满足我们需求，就用浮动


###什么是浮动
1.脱离普通流
2.浮动到指定位置

浮动最早是用来让文字环绕图片的

float:none left right
可以用在块级元素div，也可以用在行内元素span
###浮动口诀
浮 漏 特
浮：脱离标准流，下面的盒子会向上顶
漏：原来的位置漏出来，给下面的盒子
特性：float会改变元素的display属性
默认相当于变成行内块，它宽度不是父布局宽度了
而是包裹内容

两个div同时float，就可以看作他们都变成行内块了
所以他们会在一行内，但是他们没有边距


复习：
行内元素在一行内，设置宽高无效
块级元素一行一个，默认宽度是父布局宽度，不是包裹内容
行内块元素在一行内，可以设置宽高

如果父布局一行装不下，会自动换行

实现一左一右，一个left浮动，一个right浮动即可

###浮动细节
一个完整的网页，是标准流+浮动来完成的，而不是只有某一个
我们看到ui先要分析出行，一行一行的就是标准流
然后一行内横向的盒子就是浮动实现

###常用布局思路
左右结构->上下结构

###小米首页案例
* 去掉 h p body等标签的默认边距
*{margin:0;
padding: 0;}
li{list-style:none}去掉指示器

* 分析使用何种嵌套的盒子，先找横向的
左右，然后浮动即可。
* 然后右边盒子有8个item，我们用
ul+li 然后li左浮动即可。
然后设置边距
当然要精确的计算一下宽高
（一般一排一排的用li）
* 可以给li加hover伪类的效果
* 一般我们给box一个固定宽度，然后里面的元素就能精确计算了

chrome点击左上角select element 选中要查看的元素
chrome中要看到hover的样式得
勾选一下hover才行
我们也可以动态添加css样式来即时查看效果

###案例：导航栏
以前用行内块做，但是有空隙
纯渐变的背景，可以用小图平铺来做
导航栏一般都是li+a来做
如果直接用a，搜索引擎容易识别为堆砌关键字嫌疑
降低你的搜索权重

底下的友情链接一般都用a来堆
* 一般给a宽高，让他变成块元素
* 写代码根据需要来写，不需要死记硬背

###浮动拓展
子布局默认贴着边框内部
浮动的元素还是在原来那个行

###清除浮动
浮动价值：让多个块级元素在一行内显示

知识点：子布局浮动，父布局没有设置高度，那么就父布局高度会变为0

很多时候父布局不方便给高度，高度是内容撑开的
不给父布局设置高度
但是父布局中的子布局浮动，就会导致父布局高度为0
（这时候我们就想让子布局横向排列）
然后下面的元素就挤上来了

清除浮动：给父布局清除浮动，它的高就变为多个子布局中最大高度了
其实就是清除它左/右侧所有元素浮动，把他们当成在布局中的元素
清除浮动四种方法：
clear:left right both(几乎只用这种)

1.额外标签法
在最后添加一个空标签，设置clear:both
因为他还在父布局中，没有浮动，而且清除了浮动
所以他会在新的一行中存在，所以父布局就被撑起来了

缺点：结构冗余

2.父布局添加overflow方法
overflow:hiden; 
 auto显示垂直滚动条
缺点：无法显示溢出的元素

3.使用after伪元素
用after在最后生动态成一个标签
.clearfix:after{
content:"";
display:block;
height:0;
visibility:hiden;
clear:botn;
}

.clearfix{
*zomm:1; ie6,7专门清除浮动样式的
}

让父布局调用 class="clearfix"
这种折行内容不会被切割

以上方法推荐，网易在用


4.双伪元素清除
.clearfix:before,
.clearfix:after{
content:"";
display:table;
}

.clearfix:after{
clear:both;
}

.clearfix{
*zomm:1; ie6,7专门清除浮动样式的
}
小米腾讯等
###清除浮动总结
1.父布局没有固定高度
2.子盒子浮动了
3.影响到下面布局了，下面布局挤上来的，被盖住了
推荐使用后两种方法，一般给ul或者外层div使用即可


##ps
###ps切图
jpg 保留信息多，清晰
gif 256色，
png 结合jpg和gif 优点
psd

可以用ps切片工具
找到图片，导出即可

还可以用ps插件切图
cutterman 必须是完整版，不能是绿色版
www.cutterman.cn
可以导出Android ios web
支持各种尺寸

以前ps必须把别的元素隐藏，然后才能导出
而现在直接选中那个图层，点击cutterman导出


###总结
学习一个知识点，你要先知道这个技术能解决什么问题
有什么应用场景
否则你会迷茫，学了也忘了

================day05===================
页面制作
ps sublime chrome
### 学成网在线
新建工程目录，新建images文件夹
css文件夹。新建index.html

link tab
清除内外边距来检查是否引入样式表

###css书写顺序-重点
1.布局定位属性
display:block;
position:
float
clear
visibility
overflow
2.自身属性
width
height
margin
padding
border
background
3.文本属性
color
font
text-decoration
text-align
vertical-align
white-space
break-word
4其他属性css3才有的
content
box-shadow
border-radius

###布局流程
1.确定版心，就是核心可视区域
2.确定行
3.制作html结构
4.用盒子模型通过div+css来布局

###难点
* input button都是行内块，他们要在一行可能有行内块的空隙
所以我们要加浮动才能去掉空隙
* background: #1c036c url(images/banner2.jpg) no-repeat center top; 后面顺序随意

* 如果上面div中有内容溢出到下面，而且上面的内容设置了float 那么下面的文字会环绕上面的内容
这时我们设置一个margin-top即可，或者下面的设置clear:both 来清除上面的浮动，

* 如果一个div包裹一个img，那么div的高度可以要高于img，因为img是行内块，有默认的边距，而且通过css去不掉
要设置img 是float的即可。 或者设置为block也可。


* 文本垂直居中
li{height: 50px;line-height: 50px};

* a默认是行内元素，
<a>aaa<<span>bbb</span></a>
如果span设置成浮动到右侧，那么a的可点击区域就是文字区域，所以设置成block才能整个点击

* 我们一般导航都是给a设置为block，然后设置宽高，然后垂直居中即可

* class-hd(head) class-bd(body)命名规则

* 块级元素不用给宽，一般都是父布局宽度

* 没有宽度的盒子，padding不会增加宽度
* 多行文字不能用line—height等于行高进行居中，只能给个高度，然后margin-top
* 有外边距合并问题，那么可以用padding-top ，子元素设置margin-top，父元素的就没有作用了，可以用padding-top
 或者父布局margin-top大于子元素就行了

* li是块级元素 ，a包裹内容，然后居中
给li中的a设置居中 
height: 60px;
line-height: 60px;
a不要设置block否则上面的属性就继承到a中了，就不是包裹内容了
注意：如果一行内有多个盒子都是垂直居中，那么代码写到最外层那个即可，因为可以继承
可以被继承：font- text line- color

* a元素你要设置宽高，设置成块，必须设置 display:block;
* 底部友情链接用自定义列表，因为有title 有内容 dl dt dd

### li的margin问题
divbox-> divlist->ul->li
divbox是固定宽度居中的
我们一排5个item，如果每个li设置margin-right
那么最后一个item就会挤到下面，因为它也有margin-right
那么我们解决方案是给 divlist或ul一个大一点的宽度（其实divlist宽了ul是块级元素默认父布局大小），
让他的宽度超过divbox
那么最后一个item就不会挤到下面去了

还有一种方案是 给 ul设置一个负的margin-right:-20px;这样ul宽度也变大了



也有一种解决方案是设置margin-left,然后第一个item单独设置left为0
.video-item:first-child
.divlist ul li:first-child{margin-left:0;}
但是这种适合单行的

###chrome调试工具
可以看item的css样式，包括浏览器默认给的样式
css写错了，会出现一个黄色叹号
可以看item的边距，黄色是外边距
































































 



































































































































