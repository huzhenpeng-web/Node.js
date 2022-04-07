## 安装
```
npm install 07-tools
```

##导入
```js
const tools = require('/07-tools')
```

##格式化时间
```js
//调用dateFormat对时间进行格式化
const dtStr = tools.dateFormat(new Date())
//结果 2022-03-32 11:39:03
console.log(dtStr)
```

##转义html中的特殊字符
```js
//带转换的html字符串
const htmlStr = '<h1 title="hzp">这是h1标签<span>123&nbsp;</span></h1>'
//调用htmlEscape方法进行转换
const str = tools.htmlEscape(htmlStr)
//转换的结果 
console.log(str)
```


##还原html中的特殊字符
```js
//代还原的html字符串
const str2 = tools.htmlUnEscape(str)
//输出的结果
console.log(str2)
```

## 开源协议
ISC