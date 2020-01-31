表格 批量展示数据
表单 收集数据
列表 布局


表格
table 四方框
tr table row 行
td table data单元格

表格属性
border="1"边框
width height
align 表格在网页中的位置
cellspacing=0 单元格之间的距离
cellpadding 单元格和内容的距离


th table head表头
居中 且加粗


表格标题标签
<caption>在table标签下


合并单元格
跨行合并 rowspan="1"
跨列合并 colspan

三部曲
先确定是跨行还是跨列
确定目标单元格（上到下 左到右）
删除多余单元格

表格划分结构
thead 必须有tr标签
tbody 
tfoot 
没有效果，但是能更好分清表格结构 
可以用css统一控制




列表标签（重点）
样式一致的文字或图表的表现形式，叫列表
用来布局，因为结构更灵活

无序列表
ul 中只能是li
li中是个容器，放什么都行

有序列表（了解）
ol li

自定义列表（理解）
dl dt（title） dd
网站底部的分类


表单（掌握）
填写信息
表单标签，提示文本，表单域

input 
type 
 text
 password
 radio name需要一样才能单选
 checkbox name一样
 button value是显示的文案
 submit可以没有value，也可以自定义value
 reset
 image 图片提交按钮，必须有src
 file 上传文件


value默认值 

name属性
控件的key


checked="checked"属性
默认选中


label标签（理解）
 label绑定input，扩大焦点
 1.label直接包含input
 2.label for="input的id"


表单标签 文本域
textarea
cols rows 实际开发是css控制


下拉列表
<select> option 至少有一个
selected="selected"默认选中
很难修改它的样式，一般用li来做

表单域
form
action url地址
method post get
name 表单名称


元素的属性用双引号

注册页面 table+form 


查文档
www.w3shcool.com.cn

