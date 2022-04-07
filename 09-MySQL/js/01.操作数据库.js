//1.导入mysql模块
const mysql = require('mysql')

//2.建立与MySQL数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的IP地址
    user: 'root', //登录数据库的账户
    password: 'root', //数据库的密码
    database: 'node' //操作的数据库
})

//测试mysql模块能否正常工作
// db.query('select 1', (err, results) => {
//     //mysql模块工作期间报错了
//     if (err) {
//         return console.log(err.message);
//     }
//     //能够成功的执行SQL语句
//     console.log(results);
// })

//查询数据
// db.query('select * from student', (err, results) => {
//     //查询失败
//     if (err) {
//         return console.log(err.message);
//     }
//     //查询成功 结果是一个数组
//     console.log(results);
// })

//插入数据
//1. 要插入到student表的数据对象
// const student = {
//     name: 'Jay',
//     age: 18,
//     class: '三年二班'
// }

//2.待执行的SQL语句 其中英文的?表示占位符
//const sqlStr = 'insert into student(name,age,class) values(?,?,?)'

//3. 使用数组的形式, 依次为？ 占位符指定具体的值
// db.query(sqlStr, [student.name, student.age, student.class], (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     //受到影响的行数为1
//     if (results.affectRows === 1) {
//         console.log('插入数据成功');
//     }
// })

//向表中插入数据 如果列名和数据一一对应 可以用 insert into 表名 set 值
// const sqlStr = 'insert into student set ?'
// db.query(sqlStr, student, (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     //受到影响的行数为1
//     if (results.affectRows === 1) {
//         console.log('插入数据成功');
//     }
// })


//删除数据
//const deleteStr = 'delete from student where id = ?'

// 当只有一个占位符时 可以省略数组
// db.query(deleteStr, 1, (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     if (results.affectRows === 1) {
//         console.log('删除数据成功');
//     }
// })

//更新数据
// const updateStr = 'update student set name = ? where id = ?'
// db.query(updateStr, ['Jay Chou', 1], (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     if (results.affectRows === 1) {
//         console.log('修改数据成功!');
//     }
// })

//更新数据快捷版
// const student = {
//     name: 'hzp',
//     age: 19,
//     class: '软件2001'
// }
// const updateStr = 'update student set ? where id = ?'
// db.query(updateStr, [student, 2], (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     if (results.affectRows === 1) {
//         console.log('更新数据成功!');
//     }
// })