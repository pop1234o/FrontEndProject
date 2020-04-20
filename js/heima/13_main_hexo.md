# hexo
hexo nodejs
wordpress 基于php 和 mysql开发的
ghost nodejs https://ghost.org/ 
hugo 基于go  https://gohugo.io/

### wordpress
WordPress是一种使用PHP语言开发的博客平台，用户可以在支持PHP和MySQL数据库的服务器上架设属于自己的网站。也可以把 WordPress当作一个内容管理系统（CMS）来使用。

### hexo搭建博客
https://zhuanlan.zhihu.com/p/26625249 （GitHub+Hexo 搭建个人网站详细教程）



### hexo安装教程
https://github.com/hexojs/hexo

sudo npm install hexo-cli -g
安装到 /usr/local/lib/node_modules\


hexo init blog (克隆项目 Cloning hexo-starter https://github.com/hexojs/hexo-starter.git )
然后安装依赖 自动执行npm insall
cd blog

hexo server (开启服务监听 4000端口)

Create a new post
hexo new "Hello Hexo"

Generate static files
hexo generate

### 目录
_config.yml  站点的配置文件。
db.json   缓存文件
node_modules   安装的插件以及hexo所需的一些node.js模块。
package.json  应用程序信息，配置hexo运行需要的js包。
public  最终所见网页的所有内容
scaffolds   模板文件夹。当新建一个文章时，会默认包含对应模板的内容。
source  资源文件夹是存放用户资源的地方。所有的源文件都会被保存在_post文件夹中。除 posts 文件夹之外，开头命名为 (下划线)的文件 / 文件夹和隐藏的文件将会被忽略。Markdown 和 HTML 文件会被解析并放到 public 文件夹，而其他文件会被拷贝过去。
themes  存放主题文件，hexo会根据主题来生成静态页面。

我们可以用 hexo generate 生成静态的public文件
可以放到github上，也可以放到自己的服务器上，实现静态的资源访问

hexo server 是开启服务，每次都动态解析post里的文件

这两种方式都能访问你的网站，

### 原理解析
https://segmentfault.com/a/1190000008784436 （hexo 原理解析）


