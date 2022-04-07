//导入定义验证规则的包
const joi = require('joi')

//定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()


//定义验证注册和登录表单数据的规则对象
exports.reg_login = {
    body: {
        username,
        password
    }
}

//定义id,nickname,email的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const user_email = joi.string().email().required()

exports.update_userinfo = {
    body: {
        id,
        nickname,
        email: user_email
    }
}

exports.update_pwd = {
    body: {
        //使用password这个规则 验证req.body.oldPwd的值
        oldPwd: password,
        //joi.ref('oldPwd')表示newPwd必须与oldPwd值一致
        //joi.not(...)表示newPwd值不能等于oldPwd的值
        //concat()用于合并这两条验证规则
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

//dataUri()指的是如下格式的字符串数据
//data:img/png;base64,VE9...
const avatar = joi.string().dataUri().required()
exports.update_avatar = {
    body: {
        avatar
    }
}