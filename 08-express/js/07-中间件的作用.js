const express = require('express')

const app = express()

app.use((req, res, next) => { //第一个全局中间件
    console.log('这是这是第一个中间件函数')
    const time = new Date()
        //为req对象 挂载自定义属性 从而把时间共享给后面的所有路由
    req.startTime = time
    next()
})

//客户端到达服务器之后 会按照中间件定义的先后顺序依次进行调用

app.use((req, res, next) => { //第二个中间件函数 
    console.log('这是第二个中间件函数');
    next()
})

app.get('/', (req, res) => {
    console.log('调用了/这个路由')
    res.send('Home page.' + req.startTime)
})


app.get('/user', (req, res) => {
    console.log('调用了/user这个路由')
    res.send('User page.' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})