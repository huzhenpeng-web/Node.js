//1.导入fs文件系统模块
const fs = require('fs')

//2.调用fs.writeFile()方法 写入文件的内容
//参数1:表示文件的存放路径
//参数2:写入的内容
//3.回调函数
fs.writeFile('./files/1.txt', 'abcd', function name(err) {
    //若果文件写入成功 err值为null
    //失败 err的值等于一个错误对象  
    if (err) {
        console.log('default' + err.message);
    }
    console.log('success');
})