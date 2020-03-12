Node基础
(这个老师讲的不太好，不能和之前已知的平滑过渡，太跳跃，没有铺垫
而且演示也不能特别全，比如失败了，参数的结构等，使用场景也不明确
还是pink厉害)
属于服务端的技术
为ajax做铺垫
现在很多前端工具基于node
### 服务端
业务逻辑处理
数据处理

### node
node是基于chrome v8引擎（js解析引擎）的 js代码运行环境
其实就是一个软件
浏览器内核也有js解析引擎。而node是js解析执行，没有html和css

### 搭建运行环境
https://nodejs.org/en/
LTS Long Time support长期稳定版
Current 新特性，实验版

有window，mac，linux版本
操作系统提供的接口不一样，所以一个软件要开发三种版本
下载安装，安装完后，在cmd去验证安装是否成功

node -v
* 用管理员权限安装。加入环境变量

### 快速入门
js =>{es,bom,dom} bom,dom是浏览器提供的能力，在node中肯定没有
node.js=>{es,nodeApi}

执行：
以前都是把js加入html中，让浏览器打开html去执行js
而node没有html,需要用cmd来执行js

node xxx.js
### node开发的问题
以前js依赖都是通过 html中引入不同js来相互依赖
不同js文件能访问相互定义的函数和变量（除非写成立即执行函数）
那么每次都写成立即执行函数一个是结构混乱，嵌套太多
node就能解决这个问题，不需要写立即执行函数来隔离
但是如果两个js需要相互引用，node也给出了解决方案
就是require和exports ，node会解析这两个关键字
编译（预编译）的时候回转换为js代码

### node模块化开发
js问题，
1.文件和文件依赖不明确
比如silder.js依赖bootstrap.js
bootstrap.js依赖jquery.js

那么这样我们需要人为分析

2.命名冲突
比如a.js声明 num
那么在 b.js也能使用这个变量，
这就造成你命名可能冲突


### node解决方案(重点)
模块化开发就是，让自己的js变量不能被别的文件访问

模块化开发:把各个功能写在不同的js文件中，
最后合并
* 每个js就是一个模块 *
模块化开发，内部定义的变量和函数在外部无法被访问
？？？如何做到
    因为node只能执行一个js，这个就是入口
你a.js依赖b.js，那么在以前是在html中依次引入这个js
b的就能访问a的函数了。
    那么node中没有html，就需要一个新的依赖关系
就是下面讲的导出和导入

### 模块化导出
如果你想让模块内的成员（变量和函数）
被其他模块访问,用exports导出
别的模块require导入即可
（这是nodejs中规定的，它会自动处理）

a.js导出
exports.name = 'aaa';
exports.sayHi = funciton(){
    log(xxx)
}
b.js导入
导入的模块
let a = require('./a.js')
let a = require('./a')//也可以省略.js
a就是一个object，对象中包含 变量和函数
使用：
a.sayHi();
### 关于require 
Node.js 提供了 exports 和 require 两个api
这是node独有的，就像dom是浏览器独有的，我们可以直接调用window等dom对象

### 另一个导出方案
module.exports.name = "";
module.exports.sayHi = funciton(){}

exports是简写
如果两个指向的对象不一样，以module.exports为准

### 导出原理
其实就是 module.exports 指向一个对象
把这个对象给别的模块使用

### 导入模块查找路径
const xxx = require('xxx.js');
现在当前目录下找，没有
去上一级目录的 node_modules找
还没有就去，全局找

## node系统模块 （node api）
比如系统模块，提供了写入和读取文件的能力api

### fs系统模块 file system
const fs = require('fs')

fs.readFile('xx/xx.html',['utf-8'],(err,doc)=>{
    if(err==null){
        console.log(doc);
    }
});
callback是文件读取完成

#### fs写入
案例：写入日志
fs.wirteFile('路径/文件名','data',err=>{
    if(err!=null){
        写入失败
        return;
    }
});

### path系统模块 api
不同的路径分隔符不一样
window是 \ /都行
linux只能是 /
解决方案：用join来拼接路径
const path = require('path');
path.join('aa','bb','cc.html');
//  aa/bb/cc.html
* 这样写代码就能兼容了

### 相对路径和绝对路径
node大部分都是绝对路径
除非js对相对其他文件处理
比如文件操作，可以写相对路径
但是这个（相对路径）是基于node命令的执行目录
但是node执行的目录变了，那么这个代码执行就错了
* 所以一般用绝对路径
path.join(__dirname,'xxx.js');
__dirname就是当前目录的绝对路径

* require的路径就是相对当前文件的路径，而不是相对执行node的目录

### 第三方模块
别人写好的js，通常是多个js文件
多个js文件放到一个文件夹（包）中。所以又叫js包
模块名/包名

两种形式：
1.js文件
2.cmd工具

获取第三方模块 
npmjs.com 一个比较大的 node package 管理工具

npm也是一个第三方模块，已经被集成到node中
npm install package/模块名 就能下载了
只要不报红就下载成功。下载到执行npm的目录中
有个node_modules目录，里面有下载的包


删除模块：
npm uninstall package

命令行工具：推荐全局安装（如何全局安装后面说）
js包：推荐本地安装（下载到你的项目中）


### nodemon 第三方模块
https://www.npmjs.com/package/nodemon
automatically restarting the node application when file changes 
原来每次修改js都要手动重新执行
node xx.js来执行js

nodemon：每次保存都执行node编译？？？

npm install nodemon -g 下载 
使用：
nodemon xxx.js这样就被执行了
然后程序挂起，监控文件保存操作。
如果保存，就重新执行文件


### nrm第三方模块
npm registry manager 切换npm的下载地址
之前是从国外网站下载包的，npmjs.com
国内就有一个国外的镜像，比如阿里的镜像，每10分钟同步一次。

使用：
安装nrm ： npm install nrm -g
查询可用下载地址 ：nrm ls
切换： nrm use taobao
切换到了registry.npm.taobao.org



====================
========day02补充=========
====================
### package.json问题
node_modules文件夹
里面都是我们依赖的第三方模块（js文件）
两个问题：
1.协同开发可能导致版本号对应不上，
2.你不能把这个文件夹也提供到仓库中，因为太大了

解决方案:
node提供了package.json，描述项目的
根目录 ：npm init -y -yes使用默认值的参数

* node模块化开发需要指定一个主模块入口
* 当我们用npm install一个模块的时候，node就会在
package.json添加依赖了

别人用的时候，在根目录执行 npm install这样就能根据
package.json 中的依赖自动下载了

#### 开发依赖
开发中用的
npm install xxx --save-dev
这样在 package.json 就有 devDependencies{}
比如gulp是开发依赖，正式不需要

我们执行 npm install 会下载全部依赖 
npm install --production 就不会下载devDependencies

#### package-lock.json
npm自动生成，记录了模块之间的依赖关系

#### package.json scripts使用
给脚本起别名，比如我们要运行程序
就要执行 nodemon app.js
这时我们可以起个别名，提供效率
npm run 别名
* 如果命名长就很方便

### require()查找机
1.
require(‘./find’)
先找同名js后缀的文件 find.js
没有就找同名文件夹下的index.js :find/index.js
没有就找 find/package.json 中main选项的入口文件
没有就报错

2.
require(‘find’)
node认为他是系统/第三方模块
先去node_modules找，find.js
再找 find目录的index.js
再找 find package.json 中main入口

## 服务端基本概念
### URL

### 创建web服务器（node http模块）
用到系统模块 http
https://www.w3schools.com/nodejs/nodejs_http.asp
(这里有示例) 
新建server.js
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();//返回响应
}).listen(8080);

执行node server.js就创建了一个node服务，监听8080端口
cmd 按 control+c结束进程（终止这个服务）

浏览器中访问 http://localhost:8080/

### http协议
看http报文
chrome中Network
我们就能看到所有请求了，
能看到header，response等信息

### 浏览器发出两次请求
因为有一次请求是请求 网站的ico图标的









