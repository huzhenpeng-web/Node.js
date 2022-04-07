//导入express
const express = require('express')

//创建服务器
const app = express()
const joi = require('@hapi/joi')

//导入并配置cors中间件
const cors = require('cors')
app.use(cors())

//配置解析表单数据的中间件 只能解析application/x-www-form-urlencoded格式的表单数据中间件
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    //status默认值为1 表示失败的情况
    //err的值 可能是一个错误对象 或者字符串
    res.cc = function(err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

const expressJWT = require('express-jwt');
const config = require('./schema/config')

//app.use(expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/] }))


//导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//导入并使用用户信息模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

//导入并使用文章模块
const artCateRouter = require('./router/article')
app.use('/my/article', artCateRouter)

const articleRouter = require('./router/essay')
app.use('/my/essay', articleRouter)

// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))

//定义错误级别的中间件
app.use((err, req, res, next) => {
    //验证失败的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    if (err.name == 'UnauthorizedError') return res.cc('身份认证失败!')
        //未知错误
    res.cc(err)
})

//启动服务器
app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007');
})