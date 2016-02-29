var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json())
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
});

app.post('/todos', function(req,res){
	var body = req.body;
	console.log('description ' + body.description);
	res.json(body);
	body.id = todoNextId++;
	todos.push(body);
})
//GET /todos/:id
app.listen(PORT, function(){
	console.log('Listening on ' + PORT)
});