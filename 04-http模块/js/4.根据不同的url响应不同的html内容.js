const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    //1.获取请求的url地址
    const url = req.url
        //2.设置默认的响应内容为404 Not Found
    let content = '<h1>404 Not Found!</h1>'
        //3.判断用户请求的是否为 / 或 /index.html首页
        //4.判断用户请求的是否为 /about.html 关于页面
    if (url === '/' || url === '/index.html') {
        content = '<h2>首页</h2>'
    } else if (url === '/about.html') {
        content = '<h3>页面</h3>'
    }
    //5.设置Content-Type响应头,防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
        //6.使用res.end()把内容响应给客户端
    res.end(content)

})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})