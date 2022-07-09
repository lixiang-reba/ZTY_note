/*
* fs.createReadStream(path[, options])
*     --path:尧都区的文件路径+文件名+后缀
*     --options:
*         --flags
*         --encoding
*         --fd
*         --mode
*         --autoClose
*         --emitClose
*         --start ：起始偏移量
*         --end : 结束偏移量
*         --highWaterMark：每次读取数据的大小，默认值是64 * 1024
* */

let { createReadStream,createWriteStream } = require('fs')

//创建一个可读流
let rs = createReadStream(__dirname + '/test.txt',{highWaterMark:6})

//创建一个可写流
let ws = createWriteStream(__dirname + '/yyds.txt')

//只要用到了流，就必须监测流的状态

rs.on('open', function () {
  console.log('可读流打开了')
})
rs.on('close', function () {
  console.log('可读流关闭了')//读取完数据自动关闭
  ws.close()
})
ws.on('open', function () {
  console.log('可写流打开了')
})
ws.on('close', function () {
  console.log('可写流关闭了')
})
//给可读流绑定一个data事件，就会触发可读流自动读取内容。
rs.on('data', function (data) {
  //Buffer实例的length属性，是表示该Buffer实例占用内存空间的大小
  console.log(data.length);
  ws.write(data)
  // ws.close() //在此处关闭流 
})
//ws.close() //若在此处关闭流，导致无法写入数据
//小文件可以直接用简单文件的读写，大文件最好用流式的文件读写