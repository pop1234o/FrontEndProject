
# nginx
https://www.nginx.com 
https://www.nginx.cn/doc/ (中文文档)

Nginx是俄罗斯人Igor Sysoev编写的轻量级Web服务器
它不仅是一个高性能的HTTP和反向代理服务器，同时也是一个IMAP/POP3/SMTP 代理服务器。

### 为什么用Nginx
https://www.nginx.cn/nginxchswhyuseit 

### Nginx能做什么
http服务器（静态资源访问）
反向代理
负载均衡


### CentOS和Ubuntu区别
https://blog.csdn.net/qq_21033663/article/details/78010230 (CentOS和Ubuntu区别)
https://zhuanlan.zhihu.com/p/32274264 （CentOS、Ubuntu、Debian三个linux比较异同）
很多基础命令上，ubuntu与centos的差别不是很明显
而ubuntu在桌面界面上要做的更为出色
区别：

1.centos中新建的非root用户是没有sudo的权限的，如果需要使用sudo权限必须在/etc/sudoers 中加入账户和权限，所以切换到root账号
在Ubuntu中，一般使用sudo+命令，如果是第一次使用会提示输入当前用户的密码（而不是root的密码）

2.在线安装软件中，centos使用的是yum命令，而ubuntu中使用的是apt-get命令。除此之外yum中还有一个从软件源中搜索摸个软件的方法：yum search +软件名

3.centos是来自于redhat，所以centos支持rpm格式的安装，而ubuntu显然是不支持的。

4.毕竟是不同的公司做的不同的发行版，很多配置文件的位置和默认的文件路径都有很大区别，这个需要使用过程中慢慢体会了。


### nginx 安装
https://www.runoob.com/linux/nginx-install-setup.html （Nginx 安装配置）







=========================
=========heima===========
=========================
tomcat只能支持几百并发
所以要做负载均衡，nigix做反向代理
Nginx支持5w并发
可以做网站静态化
## nginx 安装
c语言开发
#### 安装gcc
nginx需要编译安装，所以需要编译环境gcc-c++
yum install gcc-c++
perl库，nginx 用pcre来解析正则表达式
yum install -y pcre pcre-devel
提供多种压缩api，nginx用来对http gzip压缩
yum install -y zlib zlib-devel
加密解密的实现， nginx用来实现https 的ssl协议的实现
yum install -y openssl openssl-devel


#### 下载：
wget xx.tar.gz 
下载链接https://nginx.org/en/download.html 里面有linux版本就是tar.gz
https://nginx.org/download/nginx-1.12.2.tar.gz

或者 
sftp上传

#### 解压
tar -zxvf 

#### 生成makefile文件 ，configure里执行
\ 代表接下面一行，变为一行执行

./configure \
--prefix=/usr \                                                        指向安装目录
--sbin-path=/usr/sbin/nginx \                                 指向（执行）程序文件（nginx）
--conf-path=/etc/nginx/nginx.conf \                      指向配置文件
--error-log-path=/var/log/nginx/error.log \              指向log
--http-log-path=/var/log/nginx/access.log \            指向http-log
--pid-path=/var/run/nginx/nginx.pid \                      指向pid
--lock-path=/var/lock/nginx.lock \                         （安装文件锁安（装文件锁定，防止安装文件被别人利用，或自己误操作。）
--user=nginx \
--group=nginx \
--with-http_ssl_module \                      启用ngx_http_ssl_module支持（使支持https请求，需已安装openssl）
--with-http_flv_module \                       启用ngx_http_flv_module支持（提供寻求内存使用基于时间的偏移量文件）
--with-http_stub_status_module \     启用ngx_http_stub_status_module支持（获取nginx自上次启动以来的工作状态）
--with-http_gzip_static_module \   启用ngx_http_gzip_static_module支持（在线实时压缩输出数据流）
--http-client-body-temp-path=/var/tmp/nginx/client/ \ 设定http客户端请求临时文件路径
--http-proxy-temp-path=/var/tmp/nginx/proxy/ \ 设定http代理临时文件路径
--http-fastcgi-temp-path=/var/tmp/nginx/fcgi/ \ 设定http fastcgi临时文件路径
--http-uwsgi-temp-path=/var/tmp/nginx/uwsgi \ 设定http uwsgi临时文件路径
--http-scgi-temp-path=/var/tmp/nginx/scgi \ 设定http scgi临时文件路径
--with-pcre 启用pcre库


====示例1
./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35


===示例2
./configure \
--prefix=/usr/local/nginx/nginxrun \
--with-http_gzip_static_module \
--with-http_ssl_module

===示例3
./configure --sbin-path=/usr/local/nginx/nginx \
--conf-path=/usr/local/nginx/nginx.conf \
--pid-path=/usr/local/nginx/nginx.pid \
--with-http_ssl_module \
--with-pcre=/opt/app/openet/oetal1/chenhe/pcre-8.37 \
--with-zlib=/opt/app/openet/oetal1/chenhe/zlib-1.2.8 \
--with-openssl=/opt/app/openet/oetal1/chenhe/openssl-1.0.1t


上面都是Nginx编译的一些配置
我们用示例2，
Configuration summary
  + using system PCRE library
  + using system OpenSSL library
  + using system zlib library

  nginx path prefix: "/usr/local/nginx/nginxrun"
  nginx binary file: "/usr/local/nginx/nginxrun/sbin/nginx"
  nginx modules path: "/usr/local/nginx/nginxrun/modules"
  nginx configuration prefix: "/usr/local/nginx/nginxrun/conf"
  nginx configuration file: "/usr/local/nginx/nginxrun/conf/nginx.conf"
  nginx pid file: "/usr/local/nginx/nginxrun/logs/nginx.pid"
  nginx error log file: "/usr/local/nginx/nginxrun/logs/error.log"
  nginx http access log file: "/usr/local/nginx/nginxrun/logs/access.log"
  nginx http client request body temporary files: "client_body_temp"
  nginx http proxy temporary files: "proxy_temp"
  nginx http fastcgi temporary files: "fastcgi_temp"
  nginx http uwsgi temporary files: "uwsgi_temp"
  nginx http scgi temporary files: "scgi_temp"

到此会在目录中生成一个makefile文件 objs目录

#### make编译
make 
c文件编译成o文件 二进制可执行文件

#### make install 安装
这样就在 path prefix: /usr/local/nginx/nginxrun
中生成编译好的文件了，我们可以直接执行（运行）了



#### 创建上面的临时目录
mkdir /var/temp/nginx/client -p
-p 创建子目录


#### 启动
cd /usr/local/nginx/sbin
./nginx


ps aux|grep nginx

netstat -nap|grep 80 
tcp        0      0 0.0.0.0:80    0.0.0.0:*      LISTEN      31080/nginx: master 
端口号默认80

停止 
./nginx -s stop 强制停止
./nginx -s quit 保存配置后退出
./nginx -s reload 重新加载配置文件

执行文件在你安装目录的 sbin目录下

### 静态资源部署
放到 /usr/local/nginx/html （默认）
在conf 里有配置
改root 路由映射 的目录即可

error_page也可以映射

### edittext可以远程访问服务器上的文件
这样就能方便的编辑了
每次vim太麻烦

## Nginx配置虚拟主机
### 通过不同端口号访问不同服务
虚拟主机就是同一个(nginx)服务器中有多个服务(项目)
一个服务对应一个域名，对应一个虚拟主机

配置文件中一个server就是一个Nginx服务（虚拟主机）
监听一个端口


### 通过不同域名号访问不同服务
(相同端口号)
定级域名 baidu.com
二级域名 map.baidu.com
一个ip可以绑定多个域名（多个域名指向一个ip）

写多个server就能做映射了
server{
    listen 80;
    server_name 域名;# 

    location /{ 
        root html
        index index.html;
    }

    error_page
}

#### Nginx域名匹配规则
https://blog.csdn.net/daiyudong2020/article/details/73863437 （nginx server_name匹配规则）
1）完全匹配，匹配成功则终止搜索
2）不匹配，默认走第1个server

http://xx.com 和 http://www.xx.com是两个

所以我们最好在阿里云上把 xx.com重定向到 www.xx.com
nginx上匹配规则都走 www.xx.com 有利于seo优化

#### 带www的域名和不带有什么区别
https://www.cloudxns.net/Support/detail/id/918.html （带www和不带www域名有什么区别呢?）
https://zhuanlan.zhihu.com/p/46559251 （www.和不带www.的域名有什么区别？）
 带www的严格来说是属于二级域名，不带www的属于一级域名

其实www.和不带www.的域名可以是完全两个不同的网站，我们在做域名解析时可以将他们指向完全不同的两个IP或者网站。

www一般指的是一个主机的名称（服务的名称）
api.xx.com
www.xx.com
是两个不同的服务，是两个ip，两个项目
如果 xx.com 指向ip，而www.xx.com没有，则www.xx.com就不能找到网页

## 反向代理 和 负载均衡

### 配置被代理服务器的ip upstream
https://nginx.org/en/docs/http/ngx_http_upstream_module.html ()


upstream server_name{
    server ip:port; # 可以是127.0.0.1
}

server{
    listen 80;
    server_name 你的域名;# 

    location /{ 
        #root html 注释掉
        proxy_pass http://server_name;
        index index.html;
    }

    error_page
}

这时输入 域名 就能访问到 ip对应的服务


### 负载均衡
一般是多个服务器上一个tomcat，
（当然你可以一个服务器上启动多个tomcat，监听不同端口）

用Nginx分发到多个服务器的tomcat上

配置多个映射 Nginx会随机往这三个服务器上分发请求
几率都是1/3 
也可以配置几率 weight=2 (默认是1) 2:1:1
upstream server_name{
    server ip:port weight=2; # 可以是127.0.0.1
    server ip:port; # 可以是127.0.0.1
    server ip:port; # 可以是127.0.0.1
}


