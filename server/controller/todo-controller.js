import Todo from '../model/Todo.js';
import User from '../model/User.js';

export const addTodo = async (request, response) => {
    // console.log(request.body);
    const toId=User.findOne({email:request.body.to});
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: new Date().toISOString(),
            to:request.body.to,
            by:request.userId
        });
        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getMyTodos = async (request, response) => {
    const by=request.userId;
    try {
        const todos = await Todo.find({by}).sort({ 'createdAt': -1 });
        return response.status(200).json(todos);
        
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAssignTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 });

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAssignedTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 });

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}



export const toggleDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);
        // console.log(request.params);
        // console.log(todoRef);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            {done:!todoRef.done}
        )
        await todo.save();
        
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleActive = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { active:!todoRef.active }
        )

        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const togglePending = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { pending:!todoRef.pending }
        )

        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateTodo= async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        );

        const todo = await Todo.findById(request.params.id);
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
};

export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id);

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}