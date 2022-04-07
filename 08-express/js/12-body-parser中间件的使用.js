//导入express模块
const express = require('express')

const app = express()

//导入解析表单数据的中间件
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    //如果没有配置任何解析表单数据的中间件 则req.body默认等于undefined  
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})