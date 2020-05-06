

const https = require('https');

var a = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Host': 'api.zsxq.com',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'Cookie': '' ,
    // 'Content-Length': Buffer.byteLength(postData)
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',

    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',

    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',


}



const options = {
    hostname: 'api.xxx.com',
    port: 443,
    path: '/v1.10/topics?scope=digests&count=20&end_time=2020-01-06T10%3A59%3A48.571%2B0800',
    method: 'GET',
    headers: a
};

const req = https.request(options, (res) => {
    console.log('状态码:', res.statusCode);
    console.log('响应头:', res.headers);
    res.setEncoding('utf-8');
    var html = '';
    res.on('data', (d) => {
        // process.stdout.write(d);
        html += d;
    });
    res.on('end', () => {
        console.log('No more data in response.');
        console.log(html);

    });


});

req.on('error', (e) => {
    console.error(e);
});
req.end();





//==============http========================




const http = require('http');

const querystring = require('querystring');


// //get 请求外网
// http.get('http://www.imoney.cool', function (req, res) {
//     var html = '';
//     req.on('data', function (data) {
//         html += data;
//     });
//     req.on('end', function () {
//         console.info(html);
//     });
// });


// //发送 http Post 请求
// var postData=querystring.stringify({
// 	msg:'中文内容'
// });
// var options={
//    hostname:'www.gongjuji.net',
//    port:80,
//    path:'/',
//    method:'POST',
//    headers:{
//    	//'Content-Type':'application/x-www-form-urlencoded',
//    	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
//    	'Content-Length':Buffer.byteLength(postData)
//    }
// }
// var req=http.request(options, function(res) {
// 	console.log('Status:',res.statusCode);
// 	console.log('headers:',JSON.stringify(res.headers));
// 	res.setEncoding('utf-8');
// 	res.on('data',function(chun){
// 		console.log('body分隔线---------------------------------\r\n');
// 		console.info(chun);
// 	});
// 	res.on('end',function(){
// 		console.log('No more data in response.********');
// 	});
// });
// req.on('error',function(err){
// 	console.error(err);
// });
// req.write(postData);
// req.end();




var data = {
    page: 13,
    time: new Date().getTime()
};
var content = querystring.stringify(data);
console.log(content);

var options = {
    hostname: 'www.imoney.cool',
    port: 80,
    path: '/?' + content,
    method: 'GET'
}
//创建请求
var req = http.request(options, function (res) {
    console.log('STATUS:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
    res.setEncoding('utf-8');

    var html = ''
    res.on('data', function (chunk) {
        html += chunk;
        // console.log('数据片段分隔-----------------------\r\n');
        // console.log(chunk);
    });
    res.on('end', function () {
        console.log('响应结束********');
        console.log(html);

    });
});
req.on('error', function (err) {
    console.error(err);
});
req.end();




