# linux
91年开发
linux 基于 unix
linux 有内核版本和发行版本
发行版本：ubuntu centos debian freebsd redhat

服务器硬件->操作系统->

服务器：web(应用)服务器，数据库服务器，接口服务器，dns，ftp
根据用途来区分

### 安装linux
虚拟机 virtualbox  vmware破解版

### 连接远程服务器
命令行访问 crt这个gui软件来连接
可以保存连接信息，不用每次都输入
ifconfig看ip

### linux 目录
/ 根目录

### 命令
--help看参数 含义
man xxx 看文档
manual（小册子）

可以看文档
cd
cd / 根目录
cd /usr

ls -a
ls -l  == ll
pwd 查看当前目录路径

mkdir xx
rmdir 

mkdirs aa/bb

#### 浏览文件
cat  文件所有内容
more 一次显示一瓶  回车和空格 q退出 ctrl+c退出
less 和more差不多
tail -10 看最后10行
tail -f 动态显示文件最后几行，有利于日志查看

#### 文件删除 复制
cp  重命名
mv 
rm
rm -r 目录
rm -rf 目录 
rm -rf /*

#### 打包解压
tar.gz linux压缩格式
zip 是windows压缩

打包
tar -cvf xxx.tar ./*
打包且压缩
tar -zcvf xxx.tar.gz ./*

解压
tar -zxvf xxx.tar.gz
tar -zxvf xxx.tar.gz -C ./指定解压目录
x解压 
verbose 
file

#### 查找文件 和 文件内容
不知道软件安装到哪了
find path -name
find / -name cal*.log

