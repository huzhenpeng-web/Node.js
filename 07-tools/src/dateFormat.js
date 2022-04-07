//定义格式化时间的函数

function dateFormat(dateStr) {
    const dt = new Date(dateStr)
    const year = padZero(dt.getFullYear())
    const month = padZero(dt.getMonth() + 1)
    const day = padZero(dt.getDate() + 1)
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${year}-${month}-${day} ${hh}:${mm}:${ss}`
}

//补零函数
function padZero(time) {
    return time > 9 ? time : '0' + time
}

module.exports = {
    dateFormat
}