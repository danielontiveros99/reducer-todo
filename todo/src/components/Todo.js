import React from 'react'

export const Todo = props => {
    return (
        <div>
            {props.state.todos.map(task => {
                return(
                    <div className={task.completed ? 'todo-complete' : 'todo-item'}
                    onClick={() => props.toggleComplete(task)}
                    key={task.id}>
                        <span>{task.item}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;