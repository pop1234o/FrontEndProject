# 数据库
mongodb api采用js语法，所以用它

### 安装
https://www.mongodb.com/
下载
https://www.mongodb.com/download-center/community

下载compass-是MongoDB gui界面
也可以在安装mongodb的时候联网下载

node.js通过api操作数据库
compass通过图形界面操作数据库

### 基本概念
database collection document field

直接点击连接，连接到数据库
里面有 admin config local默认仓库

仓库里有 collection （相当于表）

collection里有 document （n条数据的集合）
一条数据就是一个json

document里有field ，就相当于列名（属性）

### 启动MongoDB
当安装完，默认是启动的
如果重启电脑，那么可以通过命令行启动MongoDB服务
windows: 
net start mongodb
net stop mongodb

### node连接 MongoDB
需要通过 mongoose 这个第三方模块
npm install mongoose
确保数据库服务启动

const mongoose = require('mongoose');
//如果没有，在操作的时候会自动创建这个数据库
mongoose.connect('mongodb://localhost/数据库名',[options])
    .then(()=>{//连接成功})
    .catch(err=>{//连接失败})
//默认端口号
mongodb://localhost:27017/数据库名

### 创建数据库
直接连接操作就行，mongo会自动帮你创建

### 创建集合 collection
相当于建表
先要连接上数据库
1.规定规则
const schema = new mongoose.Schema({
    name:String,
    isMan :Boolean
});
//创建集合,返回集合的构造函数(指定对哪张表操作)
const Course = mongoose.model('Course',schema);
//Course规定首字母大写，那么里面就会创建集合名称 courses
//约定好的

* 如果没有插入数据，那么数据库就不会给你创建

* 数据库操作都是异步操作
Course.create({name:'aa',isMan:true}) //返回promise对象
    .then(doc=>{})
    .catch(erro=>{})


* 到此数据库被创建，里面有表，有数据
多了 _id是数据库帮我们生成的
#### field数据类型
就是json中规定的类型，可以是 String Number
{
    name:String,
    isMan :Boolean,
    age :Number,
    addr:[String]//字符串数组
    addrL:{ //对象
        street:String
    },
     birthday:Date //日期类型，在cmd看不见，在gui中能看见
    //类型声明另一种写法
    name:{
        type:String
    }
}

#### 另一种插入方式
//创建集合实例（一条数据）
const course = new Course({
     name:"xxx",
     isMan :true
});

//插入
course.save();


### create另一个写法
通过构造函数插入数据
Course.create({name:"xx"},(err,doc)=>{
    //doc当前插入的文档(就是那条数据)
});




### 导入数据从json文件中
mongoimport 在mdb 的bin中
把json文件 导入到数据库中

### 查询数据（文档）
//找出所有文档 （数据）
Course.find() //返回promise
    .then(doc=>{
        //返回一个json数组,里面都是一条条(文档)数据
    })
    .catch(erro=>{})


//条件查询
Course.find({_id:'123'})

//默认返回集合的第一条数据
Course.findOne({_id:'123'})

//匹配大于小于
Course.find({age:{$gt:20,$lt:50}});
//匹配包含
{$in:['a','b']}

//返回指定字段
Course.find({_id:'123'}).select('name age')

//不返回指定字段
Course.find({_id:'123'}).select('-_id')

//排序 默认升序
Course.find().sort('age')
//降序
Course.find().sort('-age')

//跳过前多少条数据
Course.find().skip(2)

//只返回前多少条数据
Course.find().limit(2)
* 分页的时候用到

### 删除文档 （数据）
//删除一个
Course.findOneAndDelete({})
    .then(result=>{
        删除的那个json数据
    })
{} 条件和上面的写法一致

//删除多个
Course.deleteMany({})
.then(result=>{
        {ok:1,n:4}//删除成功，删除了4条文档
    })

### 更新文档
Course.updateOne({查询条件},{要修改的值})
    .then(result=>{
        //找到了4条，修改了1条，另外几个肯定和修改的值一样，所以就没修改
        {ok:1,n:4,nModified:1}
    })

Course.updateMany({查询条件},{要修改的值})
* 查询条件没有可以写空对象{}

### mongoose验证规则
数据类型验证。（插入和更新验证）
比如只能是字符串，而且长度有限制；或者传值不能为空

在我们创建查询的时候就要规定了

const schema = new mongoose.Schema({
    name:{
        type:String,//这里声明字段类型
        //下面写约束
        require:true //代表必须传name这个值,否则node报错
    }

  
    require:[true,'请传入名称'], //自定义报错信息

    minlength:2,//最小长度，针对字符串类型
    maxlength:3,
    max:100, //针对数字
    min:1,
    trim:true, //插入数据的时候去除两端空格

    //默认值
    birth:{
        type:Date,
        default:Date.now 
    },
    

   //规定值
    enum:['man','woman'],

    //自定义验证规则
    validate:{
        validator:v=>{
            //v就是传过来的值
            if(v=='true'){
                retrun true;//验证通过
            }else{
                return false;
            }
        },
        message:"自定义错误信息"
    }    
   
});
* 默认都是可以传空的

### 获得报错信息
返回一个json ，里面有报错信息
{errors:{属性名:{错误信息}}}

## 关联操作

### 集合关联
比如文章表和作者表

const schema = new mongoose.Schema({
    name:String,
    author :{
        //关联到另一个表的键
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});
//然后创建构造函数 Post
//插入的关联直接发User表中的id字符串给 author就行

//然后关联查询,这样就把 User表中的数据 给author了
Post.find().popluate('author'//要关联的字段名称)
    .then

### 案例：用户信息增删改查
通过http模块创建http服务
然后里面通过path判断实现路由功能（根据path返回不同内容）
数据动态化：
创建模板字符串，然后里面写html
从数据库中查出user信息，拼接到html中
返回数据给client

### http模块
创建http监听服务
const http = require('http');
处理请求，返回响应
可以实现301跳转
### 路由功能
根据url的path不同返回不同的页面(内容)
解析url，可以用node自带的url模块
const url = require('url')
//对象解构
const {pathname} = url.parse(req.url);

if(pathname=='/list'){
    //呈现用户列表页面
    let list = `模板字符串${user.name}`//这里就是html模板
    response.end(list);//返回内容
}else if(pathname=='/add'){
    response.end(content);
}

### queryString模块
//把 name=xx&age=12 转换为json
const queryString = require('queryString');
queryString.parse(formdata);






