const fs = require('fs')

// fs.readFile('./files/1.txt', 'utf8', function(err, data) {
//     if (err) {
//         return console.log('读取文件失败:' + err);
//     }
//     console.log('读取文件成功!' + data);
// })

// 使用绝对路径 移植性非常差 不利于维护

//__dirname 表示当前文件所处的目录
console.log(__dirname);

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log('读取文件失败:' + err);
    }
    console.log('读取文件成功!' + data);
})