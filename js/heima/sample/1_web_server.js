const http = require('http');//用来创建http服务的
const url = require("url");//用来解析url 成json对象的
const querystring = require('querystring');//用来解析post参数的
const path = require("path");//用来拼接路径的 path.join()
const fs = require("fs");//文件模块，用来读取写入文件数据的
//npm install mime  根据路径返回资源类型
const mime = require("mime");

http.createServer(function (req, resp) {
    // resp.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

    // parseRequestAndResponse(req, resp);
    // router(req, resp);
    visitStatic(req, resp);

}).listen(8080);

function parseRequestAndResponse(req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});

    //解析成对象
    const urlObj = url.parse(req.url, true);
    //请求路径
    const pathname = url.parse(req.url, true).pathname;

    // console.log('req come' + urlObj.host);

    resp.write('<h1>welcome</h1> ' + req.url);
    //接收post参数，监听
    let postParams = "";
    req.on('data', params => {
        postParams += params;
    })
    //监听data接收完成事件
    req.on("end", () => {
        //转换成json对象
        let param = querystring.parse(postParams);
    })

    resp.end();
}

//路由功能
function router(req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});

    //解析成对象
    const urlObj = url.parse(req.url, true);
    //请求路径
    const pathname = url.parse(req.url, true).pathname;
    //路由
    if (pathname == "/login") {
        resp.end('欢迎登陆');
    } else {
        resp.end('页面不存在');
    }

}

//访问静态资源
function visitStatic(req, resp) {

    let pathname = url.parse(req.url).pathname;

    //访问默认页面
    pathname == '/' ? "/index.html" : pathname;
    console.log('come:' + pathname);

    //找到对应路径，
    let realFilePath = path.join(__dirname, "public", pathname);
    //读取文件
    fs.readFile(realFilePath, (err, data) => {
        if (err == null) {
            let type = mime.getType(realFilePath);
            resp.writeHead(200, {'Content-Type': type + ';charset=utf8'});
            resp.end(data);
        } else {
            resp.writeHead(404, {'Content-Type': 'text/html;charset=utf8'});
            resp.end("<h2>sorry! resouce missing!</h2>");
        }

    })

}









