const express = require('express')

const app = express()

//定义一个简单的中间件函数
// const mw = (req, res, next) => {
//     console.log('这是简单的中间件函数')
//         //把流转关系 转交给下一个中间件或路由
//     next()
// }


//将mw注册为全局生效的中间件
// app.use(mw)
//定义全局中间件的简化形式
app.use((req, res, next) => {
    console.log('这是简单的中间件函数')
    next()
})

app.get('/', (req, res) => {
    console.log('调用了/这个路由')
    res.send('Home page.')
})


app.get('/user', (req, res) => {
    console.log('调用了/user这个路由')
    res.send('User page.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})