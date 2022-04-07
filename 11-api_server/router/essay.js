//导入express
const express = require('express')

//导入验证数据的中间件
const expressJoi = require('@escook/express-joi')

//导入文字验证模块
const { add_article_schema } = require('../schema/essay')

const essay_handler = require('../router_handler/essay')

//导入解析formdata格式表单数据的包
const multer = require('multer')

//导入处理路径的核心模块
const path = require('path')

//创建multer的实例对象 通过dest属性指定文件存放路径
const upload = multer({ dest: path.join(__dirname, '../uploads') })

//创建路由对象
const router = express.Router()

//发布新文章
//upload.single()是一个局部生效的中间件 用来解析formdata格式的表单数据
//文件类型数据 解析并挂载到req.file属性中
//文本类型数据 解析并挂载到req.body属性中
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), essay_handler.addArticle)
    //注意：在当前的路由中 先后使用了两个中间件
    //先用multer 解析表单数据
    //再用express.joi对解析的表单数据进行验证


module.exports = router