const path = require('path')
    //路径拼接  ../会取消一层
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr)

const pathStr2 = path.join(__dirname, '/files/1.txt')
console.log(pathStr2) //输出当前所处目录\files\1.txt

//path.basename()获取文件名
const fpath = '/a/b/c/index.html'
const fullName = path.basename(fpath)
console.log(fullName);

var nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);

//获取路径中的文件扩展名
//path.extname()
console.log(path.extname(fpath));