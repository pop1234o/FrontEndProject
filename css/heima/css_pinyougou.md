===================================
==============day1===============
==================================
##开发规范
###html规范
记得声明网页语言和编码规范
用四个空格
注意广告起名字

###文件夹分类
img项目类图片
upload 产品类文件，要经常替换的

初始化css放到base.css中
公共样式放到common.css 比如公共头，尾

##网站ico图标
xx.com/favicon.ico 就能访问图标
使用：
把 ico放根目录（为了兼容性）
在head添加
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

www.bitbug.net 把png转换成ico

##搜索引擎优化 seo
三大标签：
1.
title -谷歌限制70b 35个中文 ，百度是56b 28个中文
格式：网站名称-网站介绍
搜索引擎显示的标题
<title></title>
2.
description 描述，网站说明
<meta name="description" content="xxx">
搜索引擎显示的内容

3. 
Keywords
<meta name="Keywords" content="content">

专业优化人员写的

##字体图标
图片大，几乎支持所有浏览器
可以改大小，改颜色
设计出svg，前端人员上传生成兼容的字体文字，下载，使用

可以使用 阿里的icon font
www.iconfont.cn
也可以
icomoon.io

可以下载到网站常用的icon
下载有个ttf文件，就是字体文件
ttf  truetype font
otf格式 eot格式 svg格式

使用步骤：
把fonts文件夹放到根目录
css声明新字体，可以直接复制style文件
标签设置font-family
复制字符
* 下载里有个demo可以看

###追加字体图标
下载的里面有个selections.json
import icons 导入之前的文件
然后追加下载即可









