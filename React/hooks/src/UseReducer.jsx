import React, { useReducer, useState } from 'react'
import { reducer, initialState } from './TodoReducer'

function TodoList() {
    const [todo, dispatch] = useReducer(reducer, initialState)
    const [task, setTask] = useState('')
    const [updatedText, setUpdateText] = useState('')

    return (
        <div>
            <input type="text" name='task' onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={() => { dispatch({ type: 'add', payload: task }); setTask('') }}>add Task</button>
            <ol>
                {todo.map((v, i) => {
                    return <li key={i}>{v.task} <button onClick={() => dispatch({type:'delete',payload:v.id})}>delete</button>
                        {v.isUpdating? <>
                            <input type="text" onChange={(e) => setUpdateText(e.target.value)} value={updatedText} />
                            <button onClick={()=>{dispatch({type:'update',id:v.id,payload:updatedText});
                            setUpdateText('')
                        }}>save</button>

                        </> : <button onClick={()=>dispatch({type:'updating',payload:v.id})}>update</button>
                        }
                    </li>
                })}

            </ol>
        </div>
    )
}

export default TodoList
