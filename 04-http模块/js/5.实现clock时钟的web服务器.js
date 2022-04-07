const http = require('http')
const fs = require('fs')
const path = require('path')
    //创建web服务器
const server = http.createServer()
server.on('request', (req, res) => {
    //获取到客户端请求的url地址
    const url = req.url
        //把请求的url地址 映射为本地文件的存放路径
        //const fpath = path.join(__dirname, '../' + url)
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '../index.html')
    } else {
        fpath = path.join(__dirname, '../' + url + 'index.html')
    }
    console.log(fpath);
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return res.end('404 Not Found!')
        }
        res.end(dataStr)
    })
})
server.listen(80, () => {
    console.log('server listen at http://127.0.0.1');
})