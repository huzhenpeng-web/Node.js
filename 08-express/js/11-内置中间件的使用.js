const express = require('express')

const app = express()

//通过express.json()这个中间件 解析表单中的JSON格式的数据
app.use(express.json())
    //通过express.urlencoded()这个中间件,来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))


app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})