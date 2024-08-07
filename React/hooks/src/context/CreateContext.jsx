import React, { createContext, useState } from 'react'
import CompA from './CompA'

export let userContext = createContext(null)

function CreateContext() {
    const [user, setUser] = useState({ name: 'sunil' })
    function show(){console.log('hello')}
    return (
        <div>
            <userContext.Provider value={{user,show}}>
                <CompA />
            </userContext.Provider>
        </div>
    )
}

export default CreateContext
