import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
    })
    ) : (
        <p className="center">No item to do left! Yay!</p>
    )

    return (
        <div className="todos collection">
            <p>{todoList}</p>
        </div>
    )
}

export default Todos;