

<h>标签
请确保将 HTML heading 标签只用于标题。不要仅仅是为了产生粗体或大号的文本而使用标题。
搜索引擎使用标题为您的网页的结构和内容编制索引。
应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推

style样式
<p style="font-family:arial;color:red;font-size:20px;">A paragraph.</p>

文本对齐
<h1 style="text-align:center">This is a heading</h1>


引用
<p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p>


条件注释
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
条件注释定义只有 Internet Explorer 执行的 HTML 标签。


外部样式表
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
内部样式表
<style type="text/css">
body {background-color: red}
p {margin-left: 20px}
</style>

内联样式
<p style="color: red; margin-left: 20px">
This is a paragraph
</p>


响应式设计
布局随着浏览器宽高而自动变换排列
直接用div设置宽高
另一个创建响应式设计的方法，是使用现成的 CSS 框架。
Bootstrap 帮助您开发在任何尺寸都外观出众的站点：显示器、笔记本电脑、平板电脑或手机：


框架
每份HTML文档称为一个框架


如果你打算使用背景图片，你需要紧记一下几点：
背景图像是否增加了页面的加载时间。小贴士：图像文件不应超过 10k。
背景图像是否与页面中的其他图象搭配良好。
背景图像是否与页面中的文字颜色搭配良好。
图像在页面中平铺后，看上去还可以吗？
对文字的注意力被背景图像喧宾夺主了吗？



应该使用层叠样式表（CSS）来定义 HTML 元素的布局和显示属性。

插入脚本
<script type="text/javascript">
document.write("Hello World!")
</script>

<script src="xxx" ></script>

插入样式
<style type="text/css">
body {background-color: red}
p {margin-left: 20px}
</style>

<link rel="stylesheet" href="xxx.css">

HTML 文件路径
<img src="picture.jpg"> 当前目录
<img src="images/picture.jpg"> 当前目录的images目录中
<img src="/images/picture.jpg">站点根目录
<img src="../picture.jpg"> 当前目录的上级目录

使用相对路径是个好习惯

head
以下标签都可以添加到 head 部分：<title>、<base>、<link>、<meta>、<script> 以及 <style>
<link> 标签定义文档与外部资源之间的关系。
<link rel="stylesheet" type="text/css" href="mystyle.css" />

元数据（metadata）是关于数据的信息。
<meta> 标签始终位于 head 元素中

HTML 中有用的字符实体 https://www.w3school.com.cn/html/html_entities.asp
显示小于号，我们必须这样写：&lt; 或 &#60;


不间断空格（non-breaking space） &nbsp; 

url  Uniform Resource Locator
scheme://host.domain:port/path/filename


<!DOCTYPE> 声明当前文档的类型
<!DOCTYPE html> 这是个html文档 HTML5


HTML 表单  表单用于搜集不同类型的用户输入
表单元素指的是不同类型的 input 元素、复选框、单选按钮、提交按钮等等
输入框
<form>
<input type="text" name="lastname">
</form>

单选按钮
<form action="action_page.php">
<input type="radio" name="sex" value="male" checked>Male
<br>
<input type="radio" name="sex" value="female">Female
</form> 

提交按钮
<input type="submit" value="Submit">

<form action="action_page.php" method="POST">指定提交到哪里

如果省略 action 属性，则 action 会被设置为当前页面。

method="POST"指定http请求方法

上面所有input必须有name="xxx" 否则不会被提交


<fieldset> 为form绘制边框
<legend> 元素为 <fieldset> 元素定义标题。


<select> 元素（下拉列表）
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
</select>

<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>

<button type="button" onclick="alert('Hello World!')">Click Me!</button>

<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike
<br>
<input type="checkbox" name="vehicle" value="Car">I have a car 
</form> 

HTML5 的一些最有趣的新特性：

新的语义元素，比如 <header>, <footer>, <article>, and <section>。
新的表单控件，比如数字、日期、时间、日历和滑块。
强大的图像支持（借由 <canvas> 和 <svg>）
强大的多媒体支持（借由 <video> 和 <audio>）
强大的新 API，比如用本地存储取代 cookie。
