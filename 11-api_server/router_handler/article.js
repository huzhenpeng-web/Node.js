const db = require('../db/index')

//获取文章分类
exports.getArticleCates = (req, res) => {
    //根据分类的状态 获取所有未被删除的分类列表数据
    //is_delete为0 表示没有被标记为删除的数据 asc指定按升序排列 desc指定按降序排列
    const sql = 'select * from ev_article where is_delete = 0 order by id asc'
    db.query(sql, (err, results) => {
        //执行sql语句失败
        if (err) {
            return res.cc(err)
        }
        res.send({
            status: 0,
            message: '获取文章分类列表成功!',
            data: results
        })
    })
}

//添加文字分类
exports.addArticleCates = (req, res) => {
    //定义查询 分类名称 与 分类别名是否被占用的sql语句
    const sql = 'select * from ev_article where name = ? or alias = ?'
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        //分类名称和分类别名都被占用
        if (results.length == 2) {
            return res.cc('分类名称和分类别名在不同的数据中被占用,请更换!')
        }
        if (results.length == 1 && results[0].name == req.body.name && results[0].alias == req.body.alias) {
            return res.cc('分类名称和分类别名都被占用,请更换!')
        }
        if (results.length == 1 && results[0].name == req.body.name) {
            return res.cc('分类名称被占用')
        }
        if (results.length == 1 && results[0].alias == req.body.alias) {
            return res.cc('分类别名被占用')
        }

        //定义新增分类的SQL语句
        const sql = 'insert into ev_article set ?'
        db.query(sql, req.body, (err, results) => {
            //sql执行失败
            if (err) return res.cc(err)

            //sql执行成功 但是影响行数不为1
            if (results.affectedRows != 1) {
                return res.cc('新增文章分类失败!')
            }
            res.cc('新增文章分类成功！', 0)
        })
    })
}

//根据id删除文章分类
exports.deleteCateById = (req, res) => {
    //定义删除文章分类的sql语句
    const sql = 'update ev_article set is_delete=1 where id = ?'
    db.query(sql, req.params.id, (err, results) => {
        //执行sql失败
        if (err) {
            return res.cc(err)
        }
        //执行sql失败 但受影响的条数不为1
        if (results.affectedRows != 1) {
            return res.cc('删除文章分类失败!')
        }
        //删除文章分类成功
        res.cc('删除文章分类成功!', 0)
    })
}

//根据id获取文章分类
exports.getArtCateById = (req, res) => {
    const sql = 'select * from ev_article where id = ?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        //sql执行成功 但是没有查询到任何数据
        if (results.length != 1) {
            return res.cc('获取文章分类数据失败!')
        }

        //获取到 但是is_delete为1
        if (results[0].is_delete == 1) {
            return res.cc('is_delete为1')
        }

        //成功
        res.send({
            status: 0,
            message: '获取文章分类数据成功!',
            data: results[0]
        })
    })
}

//根据id更新文章分类
exports.updateCateById = (req, res) => {
    //定义查重的sql语句
    const sql = 'select * from ev_article where id <> ? and (name = ? or alias = ?)'
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        //分类名称和分类别名都被占用
        if (results.length == 2) {
            return res.cc('分类名称和分类别名在不同的数据中被占用,请更换!')
        }
        if (results.length == 1 && results[0].name == req.body.name && results[0].alias == req.body.alias) {
            return res.cc('分类名称和分类别名都被占用,请更换!')
        }
        if (results.length == 1 && results[0].name == req.body.name) {
            return res.cc('分类名称被占用')
        }
        if (results.length == 1 && results[0].alias == req.body.alias) {
            return res.cc('分类别名被占用')
        }

        console.log(results.length);

        //更新文章分类
        const sql = 'update ev_article set ? where Id = ?'
        db.query(sql, [req.body, req.body.Id], (err, results) => {
            //执行sql失败
            if (err) return res.cc(err)

            //sql执行成功 但是影响行数不为1
            if (results.affectedRows != 1) {
                return res.cc('更新文章分类失败!')
            }
            //更新文章分类成功
            res.cc('更新文章分类成功!', 0)
        })
    })
}