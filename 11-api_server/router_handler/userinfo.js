//导入数据库操作模块
const db = require('../db/index')

const bcrypt = require('bcryptjs')

//获取用户基本信息
exports.getUserinfo = (req, res) => {
    //定义根据id查询用户信息的sql语句
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取用户信息失败')
            //用户信息获取成功
        res.send({
            status: 0,
            message: '用户信息获取成功',
            data: results[0]
        })
    })
}

exports.updateUserinfo = (req, res) => {
    //定义根据id更新用户信息的sql语句
    const sql = 'update ev_users set ? where id = ?'
    db.query(sql, [req.body, req.body.id], (err, results) => {
        console.log(req.body);
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) {
            return res.cc('更新用户信息失败')
        }

        //更新用户信息失败
        return res.cc('更新用户信息成功!', 0)
    })
}

exports.updatepwd = (req, res) => {
    //根据id查询用户是否存在
    const sql = 'select * from ev_users where id = ?'
    db.query(sql, req.user.id, (err, results) => {
        //执行sql失败
        if (err) {
            return res.cc(err)
        }
        if (results.length != 1) return res.cc('用户不存在!')

        //判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('旧密码错误!')

        //定义更新密码的sql语句
        const sql = 'update ev_users set password = ? where id = ?'

        //对新密码进行bcrypt加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) return res.cc(err)
                //sql执行成功 但影响行数不为1
            if (results.affectedRows != 1) return res.cc('更新密码失败!')
            res.cc('更新密码成功!', 0)
        })
    })
}


exports.updateAvatar = (req, res) => {
    const sql = 'update ev_users set user_pic = ? where id = ?'
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        //执行sql失败
        if (err) return res.cc(err)
            //执行sql语句失败 但是影响行数不为1
        if (results.affectedRows != 1) {
            return res.cc('更新头像失败!')
        }
        res.cc('更新头像成功', 0)
    })
}