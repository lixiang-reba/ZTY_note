const express = require('express')
let app = express()
app.get('/',function(request,response) {
    // console.log(request.query);
    console.log(request.get('Referer'));
    response.send('ok')
})
app.listen(3000,function(err) {
    if(err) console.log(err);
    else console.log('ok');
})