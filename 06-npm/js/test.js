//导入自定义的格式化时间的模块
const Time = require('./dateFormat')

//调用方法 进行时间格式化
const dt = new Date()
console.log(dt);
const newDT = Time.dateFormat(dt);
console.log(newDT);