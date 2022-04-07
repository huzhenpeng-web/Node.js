//1.1导入fs
const fs = require('fs')

//1.2导入path模块
const path = require('path')

//1.3定义正则表达式 分别匹配style和script标签
// \s表示空白字符 \S表示非空白字符 *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
const regHtml = /<html>[\s\S]*<\/html>/

//2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '../index.html'), 'utf8', function(err, dataStr) {
    //读取html文件失败  
    if (err) {
        return console.log('读取HTML文件失败' + err.message);
    }
    //读取文件成功 调用对应的三个方法 分别拆解除css,js,html文件
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})

//定义处理css样式的方法
function resolveCss(htmlStr) {
    //使用正则表达提取需要的内容  
    const r1 = regStyle.exec(htmlStr)
        //console.log(r1);
        //将提取出来的样式字符串,进行字符串的replace替换操作
    const newCss = r1[0].replace('<style>', ' ').replace('</style>', ' ')
        //console.log(newCss);
        //调用fs.writeFile()方法 将提取的样式 写入到clock目录中index.css文件里面
    fs.writeFile(path.join(__dirname, '../css/index.css'), newCss, function(err) {
        if (err) {
            return console.log('写入css样式失败!' + err.message);
        }
        console.log("写入css样式成功!");
    })
}

//定义处理js方法
function resolveJs(htmlStr) {
    const j1 = regScript.exec(htmlStr)
    const newJs = j1[0].replace('<script>', ' ').replace('</script>', ' ')
    fs.writeFile(path.join(__dirname, '../js/clock.js'), newJs, function(err) {
        if (err) {
            return console.log('写入js样式失败!' + err.message);
        }
        console.log("写入js样式成功!");
    })
}

//定义处理html方法
function resolveHtml(htmlStr) {
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./css/index.css"/>')
        .replace(regScript, '<script src="./js/clock.js"></script>')
    fs.writeFile(path.join(__dirname, '../clock.html'), newHtml, function(err) {
        if (err) {
            return console.log('写入html文件失败!' + err.message)
        }
        console.log("写入html文件成功!")
    })
}