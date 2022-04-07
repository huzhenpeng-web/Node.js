const fs = require('fs')
fs.readFile('./files/成绩.txt', 'utf-8', function(err, data) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    //console.log('读取文件成功' + data)

    //把成绩的数据 按照空格进行分割
    const arrOld = data.split(' ')
        //循环分隔后的数组 对每一项数据 进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    });
    console.log(arrNew)
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
    //把新数组中的每一项进行合并 得到一个新的字符串

    fs.writeFile('./files/成绩2.txt', newStr, function(err) {
        if (err) {
            return console.log('数据写入失败' + err.message);
        }
        console.log("成绩写入成功!");
    })
})