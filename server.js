var express=require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id:1,
	description:'Meet mom for lunch',
	completed: false
}, {
	id:2,
	description:"Go to market.",
	completed:false
},{
	id:3,
	description:"Make money",
	completed:true
}];

app.get('/', function(req,res){
	res.send("todo api root");
});


//GET /todos
app.get('/todos', function(req,res){
	res.json(todos);
})
app.get('/todos/:id', function(req,res){
	var todoId = parseInt(req.params.id,10);
	var match;
	var one = todos.forEach(function(todo){
		if(todo.id===todoId) {
			match = todo;
		}
	})
	if(match) {
	res.json(match);
	} else {
		res.status(404).send();
	}
})
//GET /todos/:id
app.listen(PORT, function(){
	console.log('Listening on ' + PORT)
});