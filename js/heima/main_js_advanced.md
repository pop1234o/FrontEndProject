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





