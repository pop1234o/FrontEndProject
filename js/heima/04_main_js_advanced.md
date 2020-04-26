=================
======day01======
=================
# js面向对象
js中·函数也是一个对象
### 面向对象
面向过程：步骤
面向对象：使用对象的功能

封装性
继承性
多态性，子类覆盖父类方法

### es6类和对象
类是抽象的，对象是类的实例化

### es6创建类
和java差不多
class Star{

    //这个函数是在new的时候自动调用的
    constructor(uname){
        //创建属性，不能直接在类中定义属性
        this.uname = uname;
    }
    //定义函数：不需要加function
    sing(){

    }
}
var star = new Star('xxx');
star.uname;

### 类的继承
继承了属性和方法
//构造函数能继承吗？？？好像不能
class Son extends Father{

    constructor(x,y){
        //必须调用父类的
        super(x,y);
        //this 必须写在super 后面
        this.x = x;
        this.y = y;
    }

    //会覆盖父类
    sing(){
        //调用父类
        super.sing();
        var x = this.x;
    }
}

### 注意点
* es6不会变量提升，所以 类定义 必须写在 实例化 前
* 方法中调用对象属性必须写this
* 类调用共有方法也必须加this
### this指向问题
构造函数中的this指向的是创建的实例对象
函数里的this指向的是调用者

可以在类外定义一个that，指向构造函数里的this
这样在其他地方就能指向这个对象了。
比如：btn.onclick = this.sing;
这样按钮点击后调用sing，是btn调用的，所以sing()中的this
指向的是btn，而不是类的对象

### 案例：tab栏切换
其实就是把面向过程的代码写成面向对象
定义Tab类，里面添加 切换，添加，删除，编辑等功能
构造函数中获取dom元素，定义init函数给每个li设置点击事件
注意要加this，不想java都是隐式调用

添加：
也是构造函数中获取元素，添加事件绑定，然后给盒子添加子盒子


=================
======day02======
=================
构造函数和原型
class是es6新增的，之前用构造函数+原型来创建类

function Star(name ){
    this.name = name;
    this.sing = function(){};
}
var star = new Star();

### 静态成员和实例成员

静态成员：构造函数本身的成员
Star.sex = 'xxx';//可以直接添加成员变量

### prototype原型对象
构造函数 缺点：浪费内存
每次new一个Star ,里面的函数对象都会重新创建

解决方案：多个对象共享同一个函数对象
prototype原型对象，这是一个对象，里面有构造函数的对象
所有实例都共享这个 原型对象

所以把函数定义放到 prototype原型对象 中，这样就能共享了

function Star(name){
    this.name = name;
    //this.sing = function(){};
}
Star.prototype.sing = function()();

* 原型对象是构造函数（这个对象）中存在的对象
Star就是构造函数

### 对象原型 __proto__
所有实例化的对象都有个属性，__proto__ ，
这个是js自动为每个对象添加的
它指向Star.prototype (构造函数的原型对象)

对象原型===原型对象
### 方法查找规则
先找当前对象是否有
然后去__proto__上面找，也就是 原型对象 

### 构造函数
对象原型__proto__ 和原型对象 prototype中都有一个
constructor属性，她指向构造函数这个函数对象

### 特殊情况：
用constructor属性指回原来的构造函数

比如定义很多函数
但是这样  constructor属性就没了，
Star.prototype = {
    constructor : Star;//指回原来的构造函数
    sing:function(){};
    say:function(){};
}
Star.prototype.constructor = Star;

### 构造函数 原型对象 实例之间的关系
见 res/prototype.jpg

Star.prototype ->原型对象
原型对象.constructor -> Star构造函数
实例.__proto__->原型对象

### 原型链
见prototypelink.jpg
Star.prototype.__proto__->Object.prototype
Object.prototype.__proto__ === null

构造函数的原型对象prototype的__proto__指向父亲构造函数的原型对象

### js成员查找机制
先本类查找，再找原型对象上的prototype的成员
再找原型链上的prototype对象，往上找

Object.prototype（原型对象）中的方法就相当于基类中的方法

其实es5的继承，方法，属性都应该定义到 构造函数的原型对象上
原型对象就相当于类，而实例的__proto__指向这个，所以就产生了查找联系

但是js还有个例外就是可以直接给对象加方法。（而不给其他对象加）
obj.hi = function(){};
所以把这个例外去了记忆就好记了。

### this指向
构造函数中，this指向对象实例
原型对象定义的函数，里面的this指向的是调用者，就是实例

### 拓展内置对象
比如Array对象中有很多现成的方法
我们也可以给他自定义方法

Array.prototype.sum = function(){
    //遍历 this指向的就是Array
    this[i];
}
chrome 自定义方法的颜色是深紫色，原生的是浅蓝色


### call()
调用这个函数，而且修改函数this的指向
fun.call(thisArg,arg1,arg2...);

因为函数本身就是个函数对象

### es5继承
通过构造函数和原型对象模拟继承，叫组合继承
function Father(name){
    this.name = name;
}

function Son(name){
    //属性继承，通过call，修改浮父构造函数中的this
    Father.call(this,name);
}
//继承方法

这样是错误的，否则你在Son中加方法，父亲中也有了
//Son.prototype = Father.prototype;

可以这样
Son.prototype = new Father();
Son.prototype.constuctor = Son;

调用关系见 extend_prototype.png

### es5新增方法
数组：
forEach();遍历数组，参数你可以看文档
map() 
filter //创建一个新数组，里面过滤出满足条件的元素
some//查找数组中是否有满足条件的元素，找到第一个有的，就返回true
every 

### 案例：商品查询

### 字符串方法
str.trim();去除两端的空白字符
### 对象方法
var arr = Object.keys(obj)//获取对象的所有属性
返回属性名数组
效果类似 for in

定义或修改对象的属性
原来没有就添加，有就修改值
Object.defineProperty(obj,'num',{
    value:1000,
    //是否值可以被修改，就算你改也不生效
    writeable : false;
    //是否可以被枚举，被Object.key遍历
    enumerable:false 
    //是否可以被删除,或者重新设置特性
    configurable:false
});

删除属性
delete obj.num;

=================
======day03======
=================
函数高级用法
### 函数定义
1.function
2.匿名函数 var fun = function(){}
3.new Function(‘arg1’,‘arg2’,'函数体')
函数体是字符串

所有的函数都是Function的实例

### 函数调用
1.普通函数
fn() fn.call();
2.对象的函数
obj.fn();
3.构造函数
new Fn();
4.绑定事件函数
//点击按钮调用
btn.onlick = function(){}
5.定时器函数
setInerval(function(){});
6.立即执行函数
自动调用
(function(){})()

### this指向问题
1.普通函数 window
2.对象的函数 obj
3.构造函数 实例
4.绑定事件函数 触发元素
5.定时器函数 window
6.立即执行函数 window

### 改变函数内部this指向
call改变内部指向,主要用于实现继承
apply(this,[argArray])
必须传数组，有返回值

Math.max.apply(Math,arr);

bind
var func = fun.bind(thisArg,arg1,arg2);
不会立即执行函数，返回新的函数对象

需要改变this，而不需要立即调用，就用bind

比如发送短信按钮，60s后可以使用
里面setTimeout的this指向window
你可以用bind来改变指向
setTimeout(function(){
    this就是btn了
}.bind(btn),3000);

### 严格模式
es5严格模式
ie10以上支持
消除js语法不严谨的地方
提高编译效率

1.为脚本开启严格模式
在脚本头部写上
'use strict'
2.写函数头部
function(){
    'use strict';
}

#### 严格模式变化
开启了严格模式会报错
1.num = 10;//变量没有声明就赋值
2.delete obj.num; //不能删除属性
3.this指向，普通函数的this变成undefined
原来是window
4.构造函数必须要加new，因为不加new调用里面this指向undefined
5.函数不能有重名参数
function fn(a,a){
}

6.不允许在非函数代码块声明函数
比如在if for中声明函数

### 高阶函数
传过来一个函数对象作为参数
或者 返回一个函数对象
function fn(callback){
    //执行，先判断是否是null
    callback&&callback();
    //返回
    return callback;
}


### 闭包
闭包和异步是js两大难点
闭包closure：就是指有权访问另一个函数作用域中变量的函数
闭包就是一个函数，她有权访问其他作用域的变量
闭包函数是被访问变量所在的函数
function fn(){//这个是闭包函数
    var num = 10;
    function func(){
        return num;
    }
}

chrome中查看作用域
在断点调试的时候，有个Scope栏
Global-全局作用域
Local-局部作用域
Closure-闭包

### 闭包作用
function fn(){
    var num = 10;
    function func(){
        return num;
    }
    return func;
}

var f  = fn();
f();//执行后就访问了 fn中的num
f指向fn内的函数

### 闭包案例
给每个li添加点击事件
可以外面定义一个that，指向this，然后里面用that

### 递归
求阶乘

### 浅拷贝和深拷贝
Object.assign(o,obj);

=================
======day04======
=================
正则表达式
表单验证，替换内容
1.创建
var reg = new RegExp('/123/');
var reg = /123/
检测
reg.test(str);

### 字符组成
可以是简单字符
包含：
/123/ 只要包含123就是符合

边界符：
/^123/ 以123开头的
/123$/ 以123结尾
/^123$/必须是123，123123也是false

可选：
/[123]/ 只要包含1，2，3其中一个就符合（可选）
/^[123]$/ 三选一 相当于
/^1$/或/^2$/或/^3$/

范围
/[a-z]/ 包含a-z的任何一个就true
/^[a-z]$/ 必须要a-z的一个字符才true
/^[a-zA-Z0-9]$/ 大小写都行
取反
/^[^a-zA-Z0-9]$/ 不能包含
中括号中包含^

量词：
*:0次以上
/^a*$/

+：1次以上

?:0次或1次

重复n次
/^a{3}$/

n次以上
/^a{3,}$/

x-y次
/^a{3,16}$/
### 示例：
/^[a-zA-Z0-9_]{6,12}$/
用户名：只能输入数字字母下划线 横线，而且是6-12位的

### 预定义的正则
\d ：/[0-9]/
^\d$ :/^[0-9]$/
\D /[^0-9]/ 取反

\w ：[a-zA-Z0-9_]
\s [\t\r\n\v\f] 匹配空格 等制表符
大写就是取反

匹配任意汉字
/%[\u4e00-\u9fa5]/g

匹配中间任意字符 .+ .代表任意字符，+代表1次或多次
/<e.+\/>/g //这种会匹配出最广的那个 aa<e adf/>bb<e adf/>cc 匹配结果只有一个 <e adf/>bb<e adf/>
非贪婪匹配  匹配两个  <e adf/> <e adf/>
/<e.+?\/>/g

=================
======day05======
=================
es5 2015年发布
es6 2016 泛指2016以后的·版本
一年一版
es5缺点：
变量提升导致程序不可预测
语法松散，每个人代码风格不一样

### let关键字
块级作用域。以前只有全局和局部作用域
if{
    var b = 10;//这个在if外也能访问
    let a = 10;
}
//在外层访问不了a，这样可以防止逻辑混乱

for(var i =0;i<2;i++)
//这样在for后面也能访问i
for(let i =0;i<2;i++)

#### let不存在变量提升
let 必须先声明再使用
a=5;
var a;//这样有变量提升，那么没问题

#### let暂时性死区
var a = 10;
if(true){
    a = 'xxx';//会报错，因为if中有let a了，就死区了
    let a = 'xxx';
}

#### let面试题
let arr = [];
for(let i=0;i<2;i++){
    arr[i]=function(){
        console.log(i);
    }
}
arr[0](); //i==0
arr[1](); //i==1
//如果换成var 那么i就是2了，因为作用域不同

### const关键字
1.也具有块级作用域。
2.是常量不能改变，否则报错
3.而且声明时就要赋值，否则报错
4.不存在变量提升


### 解构赋值
let {name,age}=
一次给多个变量赋值
#### 数组解构
数组匹配变量
let arr = [1,2];
let [a,b]= arr;

let [a,b]=[1,2];//给a b 分别赋值

let [a,b]= [1];//b没有被赋值

#### 对象解构
对象属性匹配变量
let person = {name:'xxx',age:20};
let {name,age} = person;

//给变量重新命名
let {name:a,age:b} = person;

### 箭头函数
新增定义函数的方式。用来简化函数定义
const fn = ()=>{}
//简化函数体。如果函数体只有一句return，那么可以省略
const fn = (num1,num2)=>num1+num2
//省略形式参数小括号
const fn = v=>v+1 ;

#### 箭头函数this
箭头函数this，指向的是上下文作用域的this，而不是调用者

var obj={
    age:20,
    say: ()=>{
        //这里是undefined，因为对象没有作用域
        //这里是全局作用域，所以this是window
        log(this.age);
    }
}
相当于
var obj={};
obj.age = 20;
obj.say = ()=>{
    log(this.age);
}

### 剩余参数
形参和实参个数可以不相等
function sun(first,..args){
    //arg是数组，接收多出来的实参
}

箭头函数使用不了arguments内置参数
所以只能用剩余参数

#### 结构的 剩余参数
let [s1,..s2]=[1,2,3];//s2就是数组


### 拓展运算符
... 是拓展运算符，展开操作
1.可以将数组或者对象，转换为用逗号分隔的序列
let arr = [1,2,3];
...aar就是// 1,2,3
log(...aar);
相当于 
log(1,2,3);//打印出 1 2 3 ，没有逗号

2.合并数组
let arr1 = [1,2,3];
let arr2 = [1,2,3];
let arr3 = [...arr1,...arr2];

3.转换伪数组转换为真正数组
var divs = doc.getElementByTag
var divArr = [...divs];
这样就可以调用Array的方法了
比如push 

#### 数组和可遍历对象转换为真正的数组
let array={//伪数组
    '0':'a',
    '1':'b',
    'length':2
}
var arr = Array.from(array);

#### Array 的方法
不会看文档
arr.find 找到符合条件的第一个元素，没找到返回undefined
findIndex 找到第一个符合元素的index
includes(n)看是否包含某个元素

* 你要操作那个对象，比如数组，字符串，肯定有现成的api
你查查文档就知道了。你得知道去哪找
### String的拓展方法
模板字符串 1左边的那个反引号
可以嵌套变量，嵌套函数
let str = `xxx${name}`;
let str = `xxx${getName()}`;
可以有换行
可以用于http响应的数据展示，这样就不用写很多加号了

str.startWidth
str.endWidth
str.repeat(3);//源字符串重复n次

### Set数据结构
相当于hashSet，不是map
里面不能有重复元素
var set = new Set(["a","b","c"]);
set.size

去除重复元素
var set = new Set(["a","a","b",“b”]);//set
var arr = [...set];

set.add
set.delete
set.has
set.clear

变量
s.forEach(value=>{});




===================
========补充========
===================
### js编译(转换)
其实就是把es5以后的js语法转换成es5的语法
这样浏览器就能执行（因为浏览器的js解析引擎更新没那么快）
而且肯定有用户用旧版的浏览器，所以就需要转换（编译一下）

### Babel 转换工具
https://babeljs.io/
https://babeljs.io/docs/en/index.html （官方文档）

介绍：
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
就是把es5以后的js代码转换成浏览器支持的es5

* 若干年以后老的浏览器都没人用了，我们就不用转换了
但是到时肯定有新的es版本，所以总有这样的问题

### js并发模型和事件循环
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop
js异步使用的是类似Android handler的模型
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
* js执行完一个消息后才能执行下一个，
这样就可能导致后面的任务等待时间太长，
一个很好的做法是缩短消息处理，并在可能的情况下将一个消息裁剪成多个消息

* 所以它没有真正的并发，一个函数执行时，它永远不会被抢占
所以就没有锁的概念

### Promise  （ES6）
有点像rxjava
https://www.runoob.com/w3cnote/javascript-promise-object.html
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises (先看)
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise (英文版)

ECMAscript 6 原生提供了 Promise 对象。
Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。
避免了层层嵌套的回调函数

//这时new的代码是立即执行，但是then的回调是异步的
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject 回调函数
    resolve('success')
});

promise
    .then(onFulfilled)
    .catch(onRejected)



### async/await (ES7)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
https://segmentfault.com/a/1190000007535316 （理解 JavaScript 的 async/await）

https://www.jianshu.com/p/5c7e707e064e （Async/await）



这个 node 都要 8 以上才能用，浏览器肯定是要 babel 的

#### async
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

async function testAsync(){}
修饰的方法










