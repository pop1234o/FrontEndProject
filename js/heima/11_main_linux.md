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
cd ~ 到当前用户目录的下

ls -a 查看所有文件，包括隐藏文件
ls -l  == ll 查看所有文件详细信息，包括权限，创建日期
pwd 查看当前目录路径

mkdir xx
rmdir 

mkdirs aa/bb

#### 浏览文件
cat  文件所有内容
more 一次显示一瓶  回车和空格翻页 q退出 ctrl+c退出
less 和more差不多
tail -10 看最后10行
tail -f 动态显示文件最后几行，有利于日志查看

#### 文件删除 复制
cp  
mv 重命名 mv ./nginx-1.12.2/ ./nginx
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

-z, --gzip, --gunzip, --ungzip   filter the archive through gzip
-x, --extract, --get       extract files from an archive
verbose 
file
-f, --file=ARCHIVE         use archive file or device ARCHIVE

-C, --directory=DIR        change to directory DIR


#### 查找文件 和 文件内容
不知道软件安装到哪了
find path -name
find / -name cal*.log

---文件中搜索
grep [内容] [文件路径] --color -A1 -B1 
-After 1 -Before1   向前/后多显示几行

#### 其他命令
pwd 显示当前所在目录
touch a.txt 创建新的文件
clear 清屏


### vi/vim编辑器
修改配置文件
vi [文件名]
vim 有高亮显示

命令行模式-刚进入的时候
插入模式-可以编辑文件
i-当前位置插入
o 
a

底行模式-可以保存，退出

按esc 退出到命令行模式  shift+: 进入底行模式
保存：插入模式->命令行模式->底行模式
wq 写入并退出

不保存退出: 
直接 q!强制退出

搜索：命令行模式
/xxxx 回车


### 重定向输出
覆盖
cat bb.txt > aa.txt 当前目录
把 输出的内容 写入新的文件

追加
cat bb.txt >> aa.txt

任何输出都可以写入
ifconfig > aa.txt

### 查看进程 杀掉进程
ps -ef 
输出进程信息 并搜索 java内容的 展示
ps -ef | grep java


杀掉进程
kill -9 [进程id]


### 管道
|
把一个命令的输出作为另一个命令的输入
ps -ef | grep java

ll --help | more 分页查看 
cat html | more 分页查看

### linux权限系统
10个字符串
- --- --- ---
1.文件类型 
-：代表是文件
d：代表文件夹
l：代表文件链接

当前用户对文件的权限 当前组内其他用户权限 其他组用户对文件的权限
r读 4 100
w写 2 010
x执行 1 001

作用：
有些修改了才能执行，写入

修改权限，没写的还用之前的
chmod u=rwx,g=r,o=r a.txt
数字表示，其实就是二进制的
chmod 755 a.txt
7 = 4+2+1 5=4+1

如果没有权限执行就是 permission denied


### 网络配置操作

#### 主机名配置
hostname xxx 临时修改，服务器重启无效
cat /etc/sysconfig/network
vim 修改里面 HOSTNAME

#### ip地址配置
service network restart 重启网络服务

ifconfig eth0 192.xxx.xxx.xxx 重启后无效

永久生效
cat /etc/sysconfig/network-scripts/ifcfg-eth0

onboot = yes 使用默认网卡
bootproto = static/dhcp
静态ip（重启后ip固定）、动态分配

#### 域名映射
windows 在 windows\system32\drivers\etc\hosts
linux /etc/hosts
vim /etc/hosts


网络服务管理
service [服务名/network] status 查看指定服务状态
stop start restart

防火墙配置 控制本机出入网行为
/etc/sysconfig/iptables
停止防火墙
service iptables stop


### linux安装软件
1.二进制包-每个平台都编译好
解压即可

2.rpm包
redhat 发布的打包工具，自动发布
缺点：不会自动安装依赖包

3.yum在线安装
软件通过rpm打包发布到服务器上
自动解决安装依赖问题
4.源码编译安装

### 上传下载工具
ftp工具
filezilla

一般的安装目录
usr/local 

lrzsz
yum install lrzsz

### sftp
上传
put  默认上传到 /root
下载
get

### linux安装jdk
下载到 tar.gz
上传到服务器

### 卸载jdk
查看
rpm -qa | grep java
rpm -e --nodeps [包名称]


### linux配置环境变量
vim /etc/profile

JAVA_HOME=/usr/local/jdkxx
export JAVA_HOME PATH
重新加载文件
source /etc/profile


### 安装c编译环境
yum install gcc-c++

### linux下载文件
wget http:// xx.tar.gz
解压
tar -zxvf xx.tar.gz


=============
=====other==
=============

### linux安装包
https://blog.51cto.com/watchmen/1934608 （Linux-什么是二进制包，源码包，RPM包，软件仓库）
在Linux中，我们将软件包分为三种类型，分别是二进制包、RPM包、源码包。

#### 二进制包
二进制包是软件包的一种形式，二进制包是已经经过编译，可以马上运行的程序软件包
格式1：xxxx-devel-6b-33.x86_64.rpm格式（rpm -ivh安装之后能直接使用）
格式2：mysql-5.5.32-linux2.6-x86_64.tar.gz格式（tar -zxvf解压之后就能直接使用）


我们一般说的二进制包其实默认指的就是RPM包，也就是说二进制包包含RPM包，RPM包是二进制包的一个子集

#### rpm包
https://baike.baidu.com/item/RPM/3794648 (RPM （RPM软件包管理器）)
应该是在二进制包上边包装了一层，加入了版本版本管理，升级，根据cpu架构位数下载对应的包，等等的其他功能，


可以通过Linux发行版本提供的软件包管理软件进行安装（例如RHEL和Centos的yum，SUSE的yast和zypper,ubuntu的apt等等）

#### 源码包
https://m.cnblogs.com/108563/2353927.html (configure/make/make install的作用)
需要自己编译，根据./configure 文件来生成 makefile文件
make 编译
make install 

比如Nginx就算源码包 nginx-1.12.2.tar.gz

##### configure
configure ，这一步一般用来生成 Makefile，为下一步的编译做准备，你可以通过在 configure 后加上参数来对安装进行控制，比如

代码:
./configure --prefix=/usr
上面的意思是将该软件安装在 /usr 下面，执行文件就会安装在 /usr/bin （而不是默认的 /usr/local/bin),
资源文件就会安装在 /usr/share（而不是默认的/usr/local/share）。
同时一些软件的配置文件你可以通过指定 --sys-config= 参数进行设定。
有一些软件还可以加上 --with、--enable、--without、--disable 等等参数对编译加以控制，
你可以通过允许 ./configure --help 察看详细的说明帮助。

##### make 
make 是 Linux 开发套件里面自动化编译的一个控制程序，


##### make install
install 不是make的参数，而是在makefile（Makefile）中有如：install:的语句。如果用make install，那么就执行install:后面的语句。



### yum
Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装

（应该类似于npm那种）

yum install xxx
-y, --assumeyes       answer yes for all questions

yum安装的位置
/etc 一些配置文件的目录，例如/etc/init.d/mysql
/usr/bin 一些可执行文件
/usr/lib 一些程序使用的动态函数库
/usr/share/doc 一些基本的软件使用手册与帮助文档
/usr/share/man 一些man page文件

查看包的具体安装位置
rpm -ql 包名  //ql -query list
rpm -ql zlib   
/usr/lib64/libz.so.1
/usr/lib64/libz.so.1.2.7
/usr/share/doc/zlib-1.2.7
/usr/share/doc/zlib-1.2.7/ChangeLog
/usr/share/doc/zlib-1.2.7/FAQ
/usr/share/doc/zlib-1.2.7/README



### 查看端口号占用
netstat -nap|grep 8080
-t (tcp) 仅显示tcp相关选项
-u (udp)仅显示udp相关选项
-n 拒绝显示别名，能显示数字的全部转化为数字
-l 仅列出在Listen(监听)的服务状态
-p 显示建立相关链接的程序名



