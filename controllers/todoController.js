const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
};

exports.getTodoById = async (req, res) => {
    const todo = await Todo.findbyPk(req.params.id);
    if(!todo) return res.status(404).json({message: "Todo not found"});
    res.json(todo);
};

exports.createTodo = async (req, res) => {
    const { title, description, userId} = req.body;
    const todo = await Todo.create({ title, description, userId});
    res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
    const todo = await Todo.findbyPk(req.params.id);
    if(!todo) return res.status(404).json({ message: "Todo not found"});

    await todo.update(req.body);
    res.json(todo);
};

exports.deleteTodo = async (req, res) => {
    const todo = await Todo.findbyPk(req.params.id);
    if(!todo) return res.status(404).json({ message: "Todo not found"});

    await todo.destroy(req.body);
    res.json({message: "Message deleted successfully"});
};