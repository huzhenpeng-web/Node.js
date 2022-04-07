//1.定义格式化时间的方法
function dateFormat(dataStr) {
    const dt = new Date(dataStr);
    const year = dt.getFullYear()
    const month = padZero(dt.getMonth() + 1)
    const day = padZero(dt.getDate())
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${year}-${month}-${day} ${hh}:${mm}:${ss}`
}

//2.定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n //如果n>9不做任何事情 如果n<9补一个0
}

module.exports = {
    dateFormat
}