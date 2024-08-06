import React, { useState } from 'react'

function TodoList() {
    const [toDo, setToDo] = useState([])
    const [task, setTask] = useState('')
    const [updateTask, setUpdateTask] = useState(null)
    const [updatedText, setUpdateText] = useState('')
    function addTodo() {
        setToDo([...toDo, task])
        setTask('')
    }
    function deleteTask(index) {
        setToDo(toDo.filter((v, i) => i != index))
    }
    function updateTodo(index){
        let newTodo=[...toDo]
        newTodo[index]=updatedText
        setToDo(newTodo)
        // setToDo([...toDo.slice(0,index),updatedText,...toDo(index+1)])
        setUpdateText('')
        setUpdateTask(null)
    }
    return (
        <div>
            <input type="text" name='task' onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={addTodo}>add Task</button>
            <ol>

                {toDo.map((v, i) => {
                    return <li key={i}>{v} <button onClick={() => deleteTask(i)}>delete</button>
                        {updateTask == i ? <>
                            <input type="text" onChange={(e) => setUpdateText(e.target.value)} value={updatedText} />
                            <button onClick={()=>updateTodo(i)}>save</button>
                        </> : <button onClick={() => setUpdateTask(i)}>update</button>

                        }
                    </li>
                })}

            </ol>
        </div>
    )
}

export default TodoList
