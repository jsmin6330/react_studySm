import { useReducer, useState } from "react"
import todoData from "../../common/todoData"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer.useReducer"

export const TodoMain = () => {

    const [tasks, dispatch] = useReducer(todoReducer, todoData);

    const handleAddTask = (text) => {
        dispatch({
            type: 'add',
            id: tasks.legth > 0 ? tasks[tasks.length - 1].id + 1 : 1, 
            text: text
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'change',
            task: task
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'delete',
            taskId: taskId
        })
    }


    return (
        <>
            <h1>todo project</h1>
            <TodoAdd onAddTask={handleAddTask}/>
            <TodoList tasks = {tasks} 
                onChangeTask = {handleChangeTask}
                onDeleteTask = {handleDeleteTask}/>
        </>
    )
}