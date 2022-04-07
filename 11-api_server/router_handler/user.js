//导入数据库操作模块
const db = require('../db/index')

//导入bcryptjs
const bcrypt = require('bcryptjs')

//导入生成token的包
const jwt = require('jsonwebtoken');

//导入全局的配置文件
const config = require('../schema/config')

//注册新用户的处理函数
exports.regUser = (req, res) => {
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body
        //对表单中的数据 进行合法性的校验
        // if (!userinfo.username || !userinfo.password) {
        //     // return res.send({
        //     //     status: 1,
        //     //     message: '用户名或密码不合法!'
        //     // })
        //     return res.cc('用户名或密码不合法!')
        // }

    //定义SQL语句,查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username = ?'
    db.query(sqlStr, userinfo.username, (err, results) => {
        if (err) {
            // return res.send({
            //     status: 1,
            //     message: err.message
            // })
            return res.cc(err)
        }
        //判断用户名是否大于0
        if (results.length > 0) {
            // return res.send({
            //     status: 1,
            //     message: '用户名已被占用,请更换其他用户名'
            // })
            return res.cc('用户名已被占用,请更换其他用户名')
        }
        //用户名可以使用
        //调用bcrypt.hashSync()对密码进行加密处理
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        //定义插入新用户的sql语句
        const sql = 'insert into ev_users set ?'
        db.query(sql, [{ username: userinfo.username, password: userinfo.password }], (err, results) => {
            //判断SQL语句是否执行成功
            if (err) {
                // return res.send({
                //     status: 1,
                //     message: err.message
                // })
                return res.cc(err)
            }
            if (results.affectedRows != 1) {
                // return res.send({
                //     status: 1,
                //     message: '注册用户失败,请稍后再试！'
                // })
                return res.cc('注册用户失败,请稍后再试！')
            } else {
                // res.send({
                //     status: 0,
                //     message: '注册用户成功'
                // })
                res.cc('注册用户成功', 0)
            }
        })
    })
}

exports.login = (req, res) => {
    //接受表单的数据
    const userinfo = req.body

    //定义sql语句
    const sql = 'select * from ev_users where username = ?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        //执行sql成功 但是获取的数据不为1
        if (results.length != 1) {
            return res.cc('登录失败!')
        }
        //判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) {
            return res.cc('密码不一致')
        }

        //在服务器端生成token的字符串
        const user = {...results[0], password: '', user_pic: '' }

        //对用户的信息进行加密,生成token字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
    })
}