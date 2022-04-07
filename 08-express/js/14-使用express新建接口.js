const express = require('express')

//创建服务器实例
const app = express()

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//必须在配置cors中间件之前 配置jsonp的接口
app.get('/api/jsonp', (req, res) => {
    //定义jsonp接口具体的实现过程
    //1.获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback
        //2.得到要通过jsonp形式发送给客户端的数据
    const data = { name: 'zs', age: 22 }
        //3.根据前两步得到的数据,拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
        //4.把上一步拼接得到的字符串,响应给客户端的script标签进行解析执行
    res.send(scriptStr)
})

//一定要在路由之前,配置cors这个中间件,从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

//导入路由模块
const router = require('./15-apiRouter')
    //把路由模块 注册到app上
app.use('/api', router)



app.listen(80, () => {
    console.log('express sever Running at http://127.0.0.1');
})