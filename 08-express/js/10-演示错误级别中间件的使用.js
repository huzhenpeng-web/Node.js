const express = require('express')

const app = express()

app.get('/', (req, res) => {
    //抛出一个错误
    throw new Error('服务器内部发生了错误!')
    res.send('Home Page')
})

//定义错误级别的中间件 捕获整个项目的异常错误 从而防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误:' + err.message);
    res.send(err.message)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})