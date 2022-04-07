const express = require('express')
const app = express()

//1.导入路由模块
const router = require('./router')

//2.注册路由模块
//app.use()函数的作用 就是来注册全局中间件
app.use(router)

app.listen(80, () => {
    console.log('http://127.0.0.1');
})