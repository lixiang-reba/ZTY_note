
const express = require('express')
const app = express()
app.get('/',function(request,response) {
    response.send('我是主页')
})
app.listen(3000,function(err){
    if(err) console.log(err);
    else console.log('服务器启动成功了');
})