================
======day01变量=====
================
## javascript
布兰登 艾奇
在1995年用10天发明的
最开始叫LiveScript，后来和sun合作改名javaScript
翻译型语言

最早是做表单验证的，比如验证手机号是否合法，减轻服务端压力
网页特效
服务端开发 node.js
桌面开发electron
app rn
物联网 ruff
游戏 cocos2d-js phaser
小程序

### 内核
渲染引擎 html和css blink webkit
js引擎 v8

EcmaScript是一个标准
网景的js 和微软的JScript只不过是标准的实现 

js包括 （es+dom+bom）

### 书写位置
行内 onclick="alter("xxx")"
内嵌 <script>
引入式 <script src=""></script>
推荐单引号

### 输入输出
alter('')
var key = prompt('输入')
console.log('')控制台

## 变量
声明，赋值
var variable
默认undefined
可以不声明
qq=110 它就变成全局变量了

字母数字下划线 $组成 驼峰

### 数据类型
js数据变量类型是根据运行的时候确定的
数据类型可变

简单数据类型
Number 整型，浮点型
Boolean
String
Undefined
Null  null
NaN非数

八进制加0 ，十六进制加 0x
Number.Max_value; 1.79e+308
5e-324
 
Infinity 无穷大
-Infinity


isNaN(12)

### String
嵌套：外双内单，外单内双都行
\n newline
\t tab
\b blank 空白

str.lenght
+拼接
### Boolean Undefine Null
Undefine+字符串是字符串
Undefine+数字是 NaN
Null+字符串是字符串
Null+1 = 1

true当1 false当0

### typeof
var num;
typeof num;
typeof null == object

控制台颜色，
数字型是蓝色
字符串是 黑色

### 数据类型转换
prompt 取出的是字符串

转换为String
num.toString();
String(10);
10+''

转换为Number -重点
parseInt(string)
parseFloat(string)
Number(string);
‘12’-0  =12 //* / -

'13'-'12' = 1
parseInt('120px/rem')会去掉后面单位,但是首位不能是字符

转换为Boolean
Boolean('') -false
Boolean(0) -false
Boolean(NaN) -false
Boolean(Undefine) -false
Boolean(null) -false
其他都是true

### 保留字
现在不是关键字，以后可能会
boolean byte class  基本上都是java那几个

================
======day02运算符=====
================
### 运算符
0.1+0.2 = 0.300000000004
避免浮点数的判断相等

== 默认转换数据类型
18=='18' true

===全等于和!==
要求值和数据类型都一样
18==='18' false

非0为true

优先级： && 大于 ||

### 流程控制
顺序，分支，循环

也有三元表达式
var max = a>b?a:b;

if-else switch 都和java一样

switch 匹配的是===
可以是字符串
=====================
======day02循环=====
=====================
### 循环
for while do-while
for(var i = 0;i<100;i++)

### 断点调试
用chrome,sources ->找到文件，打断点


=====================
======day04数组=====
=====================
var arr=[1,2,'A'];
var arr = new Array();
数组中可以存放任意类型

### 获取
var a = arr[0];
var a = arr[10];//undefined
arr.length; 

### 添加元素
1.扩容，修改数组长度
arr.length=5; 多出来的元素是undefined
console.log(arr);

2.直接追加
arr[5]='abc';

声明新数组
var arr=[];
for(var i =0;i<10;1++)
    arr[i] = i;

=====================
======day05函数=====
=====================
复用代码逻辑
### 声明
1.function 函数名(){}
2.函数表达式
var 变量名=function(){}
这个函数没有名字，变量名不是函数名，所以这个是匿名函数
变量名里存的是函数

函数名一般为动词
只有调用才能执行函数

### 形参和实参
function 函数名(形参1,形参2){}
函数名(实参1,实参2)
形参只有被调用才知道是什么值

js中 实参个数能大于/小于形参个数
少了就是 undefined

### 函数返回值

return num1,num2;
只能返回最后一个值。

可以返回数组

* 如果没有return则返回的是undefined

### arguments 的使用
如果不知道实参有多少个
arguments是个伪数组
伪数组：
1.具有length属性
2.按照索引进行存储的
3.没有真正数组的一些方法 pop() push()

### 函数调用
函数调用可以在定义之前。

=====================
======day06作用域=====
=====================
名字(变量)的可用范围
作用：减少冲突，提高稳定

### js作用域 - es6前
1.全局作用域-整个script标签或者单独的一个js文件
2.局部作用域（函数作用域），函数内有效

### 变量作用域
全局作用域下的变量-全局变量

特殊情况：
函数内没有声明，直接声明，就属于全局变量
function fun(){
    num  =2;
}
console.log(num);//2

全局变量只有浏览器关闭时销毁，局部变量函数执行完后就销毁

### 块级作用域
js没有块级作用域（es6新增）
if(1){
    var num = 3;
}
console.log(num);//3

### 作用域链
函数中也可以定义函数
内部函数可以访问外部函数，

内部函数访问外部函数的变量，采用链式查找

var num =1;
fun1();
function fun1(){
    var num =2;
    fun2();
    function fun2(){
        console.log(num);//2
    }
}

### js预解析
js代码引擎执行步骤：预解析=》执行
js会把所有 var和function定义提升到最前面

1.变量提升（预解析）
把所有变量声明提升到当前作用域最前面，只提升声明，不提升赋值
2.函数提升
把所有函数声明提升到当前作用域的最前面
示例：
console.log(num);//会报错

console.log(num);//undefined ，预解析把定义提升到最前面
var num = 2;

fun();
var fun = function(){} //会报错，因为只提升了定义，它知道是函数

案例：
var num = 10;
fun();
function fun(){
    console.log(num);//输入undefined，因为函数中的声明会提升到函数最前面
    var num= 20;
}

## js对象
具体的事物。 明星不是对象，周星驰是对象
js对象，无序的属性和相关方法的集合
属性：名词
方法：动词

### 创建对象三种方式
1.字面量
var obj = {};//创建了一个空对象
var obj = {
    name:'xxx',
    age:18,
    sayHi:function(){//匿名函数

    }
};

2.new Object
var obj = new Object();//空对象
obj.name = 'xxx';//属性追加
obj.sayHi= function(){};

利用= 来添加属性和方法


3.构造函数创建
我们前面两种方式，一次只能创建一个特定对象
构造函数相当于定义类
构造函数：把相同的属性和函数，封装到一个函数中

function 构造函数名(){
    this.属性 = 值;
    this.方法 = function(){}
}
new 构造函数名();

function Star(name ,age){
    this.name = name;
    this.age = age;
}

var star1 = new Star('aaa',19);
var star2 = new Star('bbb',19);
首字母大写

构造函数指类，而new出来的是类的具体对象，对象的实例化

### 调用属性的两种方法
var a = obj.name;
var b = obj['name'];
### 函数调用
obj.sayHi();
### 变量，属性，函数，方法
变量单独存在，属性依附于对象
函数单独声明和调用，方法依附于对象

### new关键字执行过程
1.new创建一个空对象
2.构造函数里的this都指向刚才创建的空对象
3.执行构造函数中的代码，给空对象添加属性和方法
4.构造函数返回这个对象（不需要return）

### 遍历对象属性
for(变量 in 对象){}
for(var k in obj){
    //k是属性名，字符串类型
    console.log(k);
    //属性值，函数也能输出
    console.log(ojb[k]);
}

## js内置对象
js对象分为3种：自定义对象，内置对象，浏览器对象·

内置对象：js自带的对象，帮助我们快速开发

### 查文档查看内置对象
MDN 、W3C
developer.mozilla.org/zh-CN
搜索函数名即可,也可以搜索中文：最大值
带[] 的参数代表可以有也可以没有

### Math内置对象
不是构造函数，不需要new，是静态的，直接使用
Math.round(1.5)// 2
Math.round(-1.5) //-1
Math.random();[0,1) 包含0 ，不包含1
示例：两个数之间的随机整数，官网上有示例

### Date
是构造函数，必须有new
var date = new Date();//系统当前时间
var date = new Date('2020-02-24 8:8:8')//指定时间
（月份从0开始，到11）
格式化： 
date.getFullYear();
date.getMonth();
date.getDate();//几号
date.getDay();//星期几 ，0-周日 6周六

获取毫秒： 时间戳
1970-1-1 早8：00：00
date.valueOf();
date.getTime();
简单写法
var date = +new Date();//返回毫秒数-最常用
h5新增
var date = Date.now();

### 倒计时案例
将来时间-现在时间 = 相隔时间-毫秒
毫秒格式化，自己算

### Array 数组对象
var arr = new Array(2);//长度2
var arr = new Array(2,3);//[2,3]

arr instanceof Array //是否是数组对象
Array.isArray(arr);//h5新增，ie9以上支持

添加数组元素
var length = arr.push(1,2);//数组末尾
var length = arr.unshift(1,2);//数组前面

删除数组元素
var last = arr.pop();//数组末尾，返回删除元素
var first = arr.shift();//删除数组第一个元素

排序
arr.reverse();//反转数组
arr.soft();//按Unicode首位升序排序，包括数字
//真正的排序
arr.soft(function(a,b){
    return a-b;//升序
});

索引
arr.indexOf('e');//只返回第一个，没有-1
arr.lastIndexOf('e');
60


