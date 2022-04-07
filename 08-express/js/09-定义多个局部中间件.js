const express = require('express')

const app = express()

const middle1 = (req, res, next) => {
    console.log('这是第一个局部中间件')
    next()
}

const middle2 = (req, res, next) => {
    console.log('这是第二个局部中间件');
    next()
}

//第一种形式
app.get('/', middle1, middle2, (req, res) => {
    res.send('first')
})


//第二种形式
app.get('/two', [middle1, middle2], (req, res) => {
    res.send('two')
})


//不使用局部中间件
app.get('/three', (req, res) => {
    res.send('three')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})