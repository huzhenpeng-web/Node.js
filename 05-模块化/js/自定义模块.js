//在一个自定义模块中,默认情况下,module.exports = {}
//向module.exports对象上挂载username属性
module.exports.username = 'hzp'
module.exports.sayHello = function() {
    console.log('Hello');
}
module.exports = {
    studentName: '小明',
    age: 18,
    say() {
        console.log('666');
    }
}