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





















