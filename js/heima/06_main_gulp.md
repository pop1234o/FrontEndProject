# 第三方模块Gulp
(我感觉这个应该放到后面讲，因为讲了就要应用
它是用来方便项目构建的，你现在还不会做项目呢
)
也是基于node
比如为了加快访问速度，我们要合并js
以前要手动做，所以这个构建工具自动帮我们做

作用：
压缩合并 html，css，js
语法转换，es6转es5 ，转换less语法为css
抽离公共文件
修改文件后浏览器自动刷新（方便调试）

### 使用
1.npm install gulp 
没有-g global ，因为gulp是本项目才用到

2.新建gulpfile.js

3.重构项目目录
要根据gulp的规则来命名文件夹
src放源文件js，dist就是g构建后的文件目录

4.编写 gulpfile.js 任务
5.执行构建

* 安装 gulp-cli ，这个是gulp的一个命令行工具
用来执行gulpfile.js中的task的
npm install gulp-cli -g （全局安装，每个工程都能用）
### 编写 gulpfile.js 任务
1.在这个js中引入gulp
2.新建任务
3.获取要处理的文件，处理，输出到dist目录
4.执行gulp任务 gulp taskName 
这样gulp就会自动在当前工程下找 gfile文件，然后解析执行 task

(它值提供了5个方法)
要做处理只能安装插件
5.处理完html css js，还有吧img和lib中的文件拷贝到dist中
编写任务拷贝

6.为了统一执行所有任务，可以创建构建任务
把上面的任务包含进去，可以命名为default,gulp默认执行


### gulp插件
g只提供基础功能，想html css js语法转换都需要插件

还是得用  npm 下载
gulp-xxx

使用：
不用背，可以到查询文档
npmjs.com/package/插件名

### g能实现的功能
1.抽取html公共代码 gulp-file-include
1.压缩html gulp-htmlmin
2.压缩css gulp-csso
3.js语法转换，压缩 gulp-babel gulp-uglify
babel有依赖的模块，所以要一起下，具体见文档
4.less转换css gulp-less













