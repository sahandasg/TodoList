import React, {Component} from 'react'
import Todo from '../Todo/Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)

    }

    todoTitleHandler(event) {
        if (event.target.value) {
            let newTodo = event.target.value
            this.setState({
                todoTitle: newTodo
            })
        }
    }

    addTodo(event) {
        event.preventDefault()
        if (this.state.todoTitle) {
            this.setState({
                todos: [...this.state.todos, {
                    id: this.state.todos.length + 1,
                    Title: this.state.todoTitle,
                    completed: false
                }],
                todoTitle: ''
            })
        }
    }

    editTodo(id) {
        let newTodos = [...this.state.todos];
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
        })
        this.setState({
            todos: newTodos
        })
    }

    removeTodo(id) {
        let oldTodos = [...this.state.todos];
        let newTodos = oldTodos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }

    statusHandler(event) {
        this.setState({
            status: event.target.value
        })
    }

    render() {
        return (
            <>
                <form className='min-h-50vh flex justify-center items-center'>
                    <input
                        onChange={this.todoTitleHandler}
                        type="text"
                        className="p-2 border-none text-3xl bg-[#f4f4f4] text-[#585757FF]"
                        maxLength="40"
                        value={this.state.todoTitle}
                    />
                    <button
                        className="p-2 border-none text-3xl bg-white text-[#4A156EFF]
                        cursor-pointer transition ease-in delay-[.3ms] hover:bg-[#4A156EFF]
                        hover:text-white"
                        type="submit"
                        onClick={this.addTodo}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                    <div
                        className="m-4 relative overflow-hidden after:content-[\25BC] after:absolute after:bg-[#4A156EFF] after:top-0 after:right-0 after:p-5 after:pointer-events-none after:transition after:ease-in after:delay-[.3ms] hover:after:bg-white hover:after:text-[#4A156EFF]">
                        <select
                            className="appearance-none outline-none border-none text-xl text-[#4A156EFF] w-40 cursor-pointer p-3"
                            name="todos" onChange={this.statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="flex justify-center items-center">
                    <ul className="list-none min-w-[30%]">
                        {
                            this.state.status === 'all' && this.state.todos.map(todo => (
                                <Todo
                                    key={todo.id}
                                    {...todo}
                                    editHandler={this.editTodo}
                                    removeHandler={this.removeTodo}
                                />
                            ))
                        }
                        {
                            this.state.status === 'completed' && this.state.todos.filter(todo => (todo.completed))
                                .map(todo=>(
                                    <Todo
                                    key={todo.id}
                                    {...todo}
                                    editHandler={this.editTodo}
                                    removeHandler={this.removeTodo}
                                />
                                ))
                        }
                        {
                            this.state.status === 'uncompleted' && this.state.todos.filter(todo => (!todo.completed))
                                .map(todo=>(
                                    <Todo
                                    key={todo.id}
                                    {...todo}
                                    editHandler={this.editTodo}
                                    removeHandler={this.removeTodo}
                                />
                                ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

