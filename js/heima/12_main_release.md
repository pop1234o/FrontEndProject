
# 阿里云部署node项目
https://help.aliyun.com/document_detail/50775.html （部署Node.js环境）

### 端口号
端口号的范围是从1～65535。其中1～1024是被RFC 3232规定好了的，被称作“众所周知的端口”(Well Known Ports)；从1025～65535的端口被称为动态端口（DynamicPorts

TCP 21端口：FTP 文件传输服务
SSH：22 
TCP 23端口：TELNET 终端仿真服务
TCP 25端口：SMTP 简单邮件传输服务
UDP 53端口：DNS 域名解析服务
TCP 80端口：HTTP 超文本传输服务
TCP 110端口：POP3 “邮局协议版本3”使用的端口
TCP 443端口：HTTPS 加密的超文本传输服务

tomcat 8080
mongodb 27017

### ssh连接远程服务器
作者：Kapt
链接：https://www.zhihu.com/question/20541129/answer/466470552
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


	
FinalShell是一体化的的服务器,网络管理软件,不仅是ssh客户端,还是功能强大的开发,运维工具,充分满足开发,运维需求.
http://www.hostbuf.com/t/988.html

iTerm2。加强版命令行。


#### 使用终端连接服务器
ssh root@xx.com

### 安装nginx
yum install nginx

### 修改之前的tomcat监听8080
修改server.xml 重启

### royal ts使用
https://www.royalapps.com/ts/mac/download 下载
https://www.jianshu.com/p/c053b81f6633 （在Mac上使用Royal TSX，代替Putty，创建科学服务器）
下载，安装插件（terminal 和 file transfer），创建terminal ，配置私钥目录，连接

为什么用这个，不用terminal
帮你管理各种连接
Powerful Connection Management
Using RDP, VNC, SSH based terminals, S/FTP or web-based interfaces?
No worries, Royal TSX got you covered!

可以sftp 22端口，

可以配置连接认证方式 credential 里，用户名密码，或者私钥认证

### 安装node
https://juejin.im/post/5d75af70e51d4561db5e3ac4 (centos7 之 yum 安装nodejs)
执行安装脚本
curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
--silent 不输入内容
--loaction 支持重定向
下载 url的内容，
(里面自动为你配置了一些安装的操作步骤，面的你自己配置了，比如在/etc/yum.repos.d/里创建了yum源的文件nodesource-el7.repo，所以你下面才能执行 命令)

然后执行
sudo yum install -y nodejs

node -v 查看是否安装成功

find / -name node 查看node安装位置 在usr/bin/node


### 安装mongodb
官方安装教程
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/ (Install MongoDB Community Edition on Red Hat or CentOS)
https://juejin.im/post/5cbe73f86fb9a0320b40d687 （Linux Centos 7安装MongoDB（简单！详细！）

1.创建yum源 /etc/yum.repos.d/mongodb-org-4.2.repo
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc

* 这里要到官网复制最新的，否则旧版本可能报错

2.执行安装
sudo yum install -y mongodb-org //这种都是安装最新版本
或者单独选择版本
sudo yum install -y mongodb-org-4.2.5 mongodb-org-server-4.2.5 mongodb-org-shell-4.2.5 mongodb-org-mongos-4.2.5 mongodb-org-tools-4.2.5

//默认目录
/var/lib/mongo (the data directory)
/var/log/mongodb (the log directory)

验证安装，会展示安装的rpm包 包含 mongodb名称的rpm包
rpm -qa |grep mongodb
mongodb-org-server-4.2.5-1.el7.x86_64
mongodb-org-tools-4.2.5-1.el7.x86_64
mongodb-org-4.2.5-1.el7.x86_64
mongodb-org-mongos-4.2.5-1.el7.x86_64
mongodb-org-shell-4.2.5-1.el7.x86_64


rpm -ql mongodb-org-server
/etc/mongod.conf
/lib/systemd/system/mongod.service
/usr/bin/mongod
/usr/share/doc/mongodb-org-server-4.2.5
/usr/share/doc/mongodb-org-server-4.2.5/LICENSE-Community.txt
/usr/share/doc/mongodb-org-server-4.2.5/MPL-2
/usr/share/doc/mongodb-org-server-4.2.5/README
/usr/share/doc/mongodb-org-server-4.2.5/THIRD-PARTY-NOTICES
/usr/share/man/man1/mongod.1
/var/lib/mongo
/var/log/mongodb
/var/log/mongodb/mongod.log
/var/run/mongodb

#### 启动 停止mongo服务
systemctl start mongod.service
sudo service mongod start  或者 systemctl start mongod.service  # 开启MongoDB
{ 对应执行文件位置
    /lib/systemd/system/mongod.service
    /usr/bin/mongod
}

netstat -natp | grep 27017 # MongoDB默认端口是27017，查看是否开启
ps -aux | grep mongod    # 查看数据库的进程是否存在

mongo 链接数据库


sudo chkconfig mongod on  # 加入开机启动
sudo service mongod restart # 重启MongoDB
// 2、关闭MongoDB
sudo service mongod stop  # 关闭防火墙

// 3、卸载MongoDB
sudo yum erase $(rpm -qa | grep mongodb-org)    # 卸载MongoDB
sudo rm -r /var/log/mongodb  # 删除日志文件
sudo rm -r /var/lib/mongo    # 删除数据文件

#### mongodb远程链接配置
1.
vi /etc/mongod.conf

network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
修改绑定ip默认127.0.0.1只允许本地连接， 所以修改为bindIp:0.0.0.0, 退出保存

2.sudo service mongod restart

3 开放对外端口
systemctl status firewalld  # 查看防火墙状态
firewall-cmd --zone=public --add-port=27017/tcp --permanent # mongodb默认端口号
firewall-cmd --reload  # 重新加载防火墙

firewall-cmd --zone=public --query-port=27017/tcp # 查看端口号是否开放成功，输出yes开放成功，no则失败

4远程链接
mongo xx.xx.xx.xx:27017


### 上传项目，启动，监听 8081

### nginx做反向代理
不用域名访问不同服务

### 文章维护

### seo




