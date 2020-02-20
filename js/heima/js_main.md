================
======day01=====
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














