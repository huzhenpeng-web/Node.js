//导入express
const express = require('express')

//导入验证数据的中间件
const expressJoi = require('@escook/express-joi')

//导入文章分类的验证模块
const { add_cate, delete_cate, get_cate, update_cate } = require('../schema/article')

//创建路由对象
const router = express.Router()

const artcate_handler = require('../router_handler/article')

//获取文章分类的列表数据
router.get('/cates', artcate_handler.getArticleCates)

//新增文章分类的路由
router.post('/addcates', expressJoi(add_cate), artcate_handler.addArticleCates)

//删除文章分类的路由
router.get('/deletecate/:id', expressJoi(delete_cate), artcate_handler.deleteCateById)

//id获取文字分类路由
router.get('/cates/:id', expressJoi(get_cate), artcate_handler.getArtCateById)

//id更新文章分类路由
router.post('/updatecate', expressJoi(update_cate), artcate_handler.updateCateById)
module.exports = router