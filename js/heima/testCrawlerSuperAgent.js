const superagent = require('superagent');
//https://www.jianshu.com/p/98b854322260 好用的 HTTP模块SuperAgent
//https://visionmedia.github.io/superagent/ 文档

const request = superagent;
var fs = require("fs");
const path = require('path');
const StringUtil = require('../utils/StringUtil');

var a = {
    'Host': 'api.xxx.com',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
    'Sec-Fetch-Dest': 'document',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': ''
}
//2017-06-01T10:59:48.571+0800 
var count = 0;
var startTime = Date.now();

function getContent(end_time) {
    count++;
    // if (count == 2) {
    //     printTime();
    //     return;
    // }
    request
        .get('https://api.xxx.com/v1.10/topics?count=20&end_time=' + encodeURIComponent(end_time))
        .set(a)
        .end((err, res) => {
            //   // res.body, res.headers, res.status
            //  // err.message, err.response
            // Calling the end function will send the request
            if (err) {
                console.log(err.response);
                console.log(err.message);
                return;
            }
            console.log(res.status);
            // console.log(res.headers);
            // console.log(res.charset);
            // console.log(decodeURIComponent(res.text));
            var decode = res.text;
            try {
                // var decode = decodeURIComponent(res.text);
            } catch (error) {
                console.log('解析错误' + error.message);

            }

            // console.log(decode);

            // var content = StringUtil.ToGB2312(decode);
            var content = decode;
            var contentObj = JSON.parse(content);

        });


}


getContent('2020-04-22T10:59:48.571+0800');



function printTime() {
    console.log('耗时===' + (Date.now() - startTime));

}

