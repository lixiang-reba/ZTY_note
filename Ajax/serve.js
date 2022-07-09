const { request, response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
//使用中间件解析urlencoded编码形式的请求体参数
app.use(express.urlencoded({ extended: true }))
//使用中间件解析json编码形式的请求体参数
app.use(express.json())
//暴露静态资源
app.use(express.static(__dirname + '/src'))
app.use(cors())
// 用于练习
app.post('/test_get', (request, response) => {
	console.log('有人请求test_get了',request.body);
	const person = { name: 'lxx', age: 18, sex: 'male' }
	setTimeout(() => {
		response.send(JSON.stringify(person))
	}, 3000)
})
//响应GET请求--可以接收query参数
app.get('/test_get',(request,response)=>{
	console.log('有人请求test_get了--携带的query参数是：',request.query);
	response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
	response.send('hello_test_get')
})
//响应GET请求--可以接收params参数
app.get('/test_get2/:name/:age', (request, response) => {
	console.log('有人请求test_get2了--携带的params参数是：', request.params);
	response.send('hello_test_get2')
})
app.get('/get_person', (request, response) => {
	console.log('有人请求get_person了');
	const person = { name: 'lxx', age: 18, sex: 'male' }
	response.send(JSON.stringify(person))//有的可以自动帮我们转成JSON
})
app.get('/get_person_delay', (request, response) => {
	console.log('有人请求get_person了');
	const person = { name: 'tom', age: 18, sex: '女' }
	setTimeout(() => {
		response.send(JSON.stringify(person))
	}, 3000)
})
//响应POST请求--可以接收请求体参数
app.post('/test_post', (request, response) => {
	console.log('有人请求test_post了--携带的请求体参数是', request.body);
	response.send('hello_test_post')
})
app.get('/test_jsonp',(request,response)=>{
	const {callback} = request.query
	const person = [{name:'tom',age:18},{name:'老刘',age:5}]
	response.send(`${callback}(${JSON.stringify(person)})`)
})
/* app.options('/test_put',(request,response)=>{
	response.setHeader('Access-Control-Allow-Origin','*')
	response.setHeader('Access-Control-Expose-Headers','*')
	response.setHeader('Access-Control-Allow-Methods','*')
	response.send()
}) */
app.put('/test_put',(request,response)=>{
	/* response.setHeader('Access-Control-Expose-Headers','*') //如果写* 代表任何路径都可以进行交互
	response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500') */
	response.send('hello_test_put')
})
//监听
app.listen(8080, (err) => {
	if (!err) {
		console.log('测试ajax请求的服务器开启成功了！测试地址如下');
		console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
		console.log('http://127.0.0.1:8080/2_xhr的5种状态.html');
		console.log('http://127.0.0.1:8080/3_ajax_get请求.html');
		console.log('http://127.0.0.1:8080/4_ajax_post请求.html');
		console.log('http://127.0.0.1:8080/5_ajax_解析json数据.html');
		console.log('http://127.0.0.1:8080/7_ajax请求的异常与超时处理.html');
		console.log('http://127.0.0.1:8080/8_ajax取消请求.html');
		console.log('http://127.0.0.1:8080/9_避免多次重复请求.html');
	}
})