var express = require('express');
var router = express.Router();
var todo = require('../resources/todo_db')

/* GET users listing. */
router.get('/em', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
    todo.getAllToDos().then((resp) => res.send(resp)).catch((err) => console.log(err))
});

router.post('/', function(req, res, next) {
    let { title, description } = req.body;
    todo.insertToDo({ title, description }).then((resp) => res.send(resp)).catch((err) => console.log(err))
});


router.delete('/', function(req, res, next) {
    let { title } = req.body;
    todo.deleteToDo(title).then((resp) => res.send(resp)).catch((err) => console.log(err))
});

module.exports = router;