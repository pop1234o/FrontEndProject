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















