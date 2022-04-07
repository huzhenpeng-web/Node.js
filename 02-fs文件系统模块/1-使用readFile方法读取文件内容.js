//1.导入fs模块,来操作文件
const fs = require('fs')

//2.调用fs.readFile()方法读取文件
// 参数1:读取文件的存放路径
// 参数2:读取文件的时候采用的编码格式 一般默认指定UTF8
// 参数3:回调函数,拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/1.txt', 'utf-8', function(err, dataStr) {
    //2.1失败的结果  成功err的值为null 失败 err的值为错误对象 dataStr的值为undefined
    // console.log('err');
    // console.log('----');
    // //2.2成功的结果
    // console.log('dataStr');
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }

    console.log('文件读取成功，内容是:' + dataStr);

})