// class Routes{

// }
// 
//将路由暴露，文件中的所有内容都可以在app.js上面使用
module.exports=function(app){
	app.get('/',(req,res)=>{
		res.render('index');
	});
}