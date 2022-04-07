const express = require('express');

const router = express.Router()

//导入路由处理函数模块
const userinfo_handler = require('../router_handler/userinfo')

//导入验证数据的中间件
const expressJoi = require('@escook/express-joi');

//导入需要的验证规则对象
const { update_userinfo, update_pwd, update_avatar } = require('../schema/user')

//挂载路由
router.get('/userinfo', userinfo_handler.getUserinfo)
router.post('/update/user', expressJoi(update_userinfo), userinfo_handler.updateUserinfo)
router.post('/update/pwd', expressJoi(update_pwd), userinfo_handler.updatepwd)
router.post('/update/avatar', expressJoi(update_avatar), userinfo_handler.updateAvatar)

module.exports = router