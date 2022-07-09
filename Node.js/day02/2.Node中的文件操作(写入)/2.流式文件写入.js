/*
* 创建一个可写流
*   fs.createWriteStream(path[, options])
*       --path:要写入文件的路径+文件名+文件后缀
*       --options：配置对象（可选参数）
*           --flags:
*           --encoding :
*           --fd : 文件统一标识符，linux下文件标识符
*           --mode :
*           --autoClose : 自动关闭 --- 文件，默认值：true
*           --emitClose : 关闭 --- 文件，默认值：false
*           --start : 写入文件的起始位置(偏移量)
* */
let {createWriteStream} = require('fs')
//创建一个可写流----水管到位了
let ws = createWriteStream(__dirname+'/stream.txt')
//只要用到了流，就必须监测流的状态
ws.on('open',function(){
  console.log('可写流打开了');
})
ws.on('close',function(){
  console.log('可写流关闭了');
})
ws.write('lxxnb')
// 关闭可写流
ws.close()


