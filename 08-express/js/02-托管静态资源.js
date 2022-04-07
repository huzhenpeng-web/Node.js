const express = require('express')

const app = express()

//在这里,调用express.static()方法 快速的对外提供静态资源
//谁放在前面就调用谁
app.use('/hzp', express.static('../clock'))
app.use(express.static('../files'))


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})