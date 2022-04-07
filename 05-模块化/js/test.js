// const custom = require('./模块作用域.js')
// console.log(custom);
// const m = require('./自定义模块')
// console.log(m);

//1.
// exports.username = 'hzp'
// module.exports = {
//     gender: '男'
// }
// console.log(module.exports);
// exports = {
//     age: 18
// }
// module.exports = exports
// module.exports = {
//     name: 'hzp'
// }
// console.log(module.exports);

exports.age = 18
exports = {
    name: 'hzp'
}
console.log(exports);