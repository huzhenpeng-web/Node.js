//导入express模块
const express = require('express')

//创建express的服务器实例
const app = express()

//1.定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件')
    next()
}

app.get('/', mw1, (req, res) => {
    console.log('first');
    res.send('first')
})

app.get('/two', (req, res) => {
    res.send('two')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})