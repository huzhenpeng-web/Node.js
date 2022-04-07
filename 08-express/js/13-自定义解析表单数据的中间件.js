const express = require('express')

const app = express()

const qs = require('querystring')

//解析表单数据的中间件
app.use((req, res, next) => {
    //定义中间件具体的业务
    //1.定义一个str字符串 专门用来存储客户端发送过来的数据
    let str = ''
        //2.监听req的data事件
    req.on('data', (chunk) => {
        str += chunk
    })

    //监听req的end事件
    req.on('end', () => {
        const body = qs.parse(str)
        req.body = body
        console.log(str);
        next()
    })
})


app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})