//1.导入express
const express = require('express')
    //2.创建web服务器
const app = express()

//4.监听客户端的get和post请求,并向客户端响应具体的内容
app.get('/userid', (req, res) => {
    //调用express提供的res.send()方法,向客户端响应一个json对象  
    res.send({
        name: 'zs',
        age: 20,
        gender: '男'
    })
})

app.post('/user', (req, res) => {
    //调用express提供的res.send()方法 向客户端响应一个文本字符串
    res.send('请求成功!')
})


app.get('/', (req, res) => {
    //通过req.jquery可以获取到客户端发送过来的 查询参数
    //默认情况下:req.query是一个空对象
    console.log(req.query);
    res.send(req.query);
})

//id是动态参数
app.get('/user/:id', (req, res) => {
    // req.params是动态匹配到的url参数 默认是一个空对象
    console.log(req.params)
    res.send(req.params)
})

//3.启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})