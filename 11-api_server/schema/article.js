//导入定义验证规则的模块
const joi = require('joi')

//定义分类名称和分类别名的校验规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

exports.add_cate = {
    body: {
        name,
        alias
    }
}

//定义分类id的校验规则
const id = joi.number().min(1).required()
exports.delete_cate = {
    params: {
        id
    }
}

const is_delete = joi.number()
    //根据id获取分类 校验规则对象
exports.get_cate = {
    params: {
        id,
        is_delete
    }
}

//校验规则对象 更新分类
exports.update_cate = {
    body: {
        Id: id,
        name,
        alias
    }
}