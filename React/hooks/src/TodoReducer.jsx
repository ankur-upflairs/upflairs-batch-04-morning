export let initialState = [
    { id: 1, task: 'gym at 6', isUpdating: false }
]

export function reducer(state, action) {
    if (action.type == 'add') {
        let newId = state.length > 0 ? state[state.length - 1].id + 1 : 1
        return [...state, { id: newId, task: action.payload, isUpdating: false }]
    }
    else if(action.type=='delete'){
        return state.filter(v=>v.id!=action.payload)

    }
    else if(action.type=='updating'){
        let newTodo=[...state]
        let i=newTodo.findIndex(v=>v.id==action.payload)
        newTodo=newTodo.map(v=>{
            v.isUpdating=false
            return v
        })
        newTodo[i].isUpdating=true
        return newTodo
    }
    else if(action.type =='update'){
        let newTodo=[...state]
        let i=newTodo.findIndex(v=>v.id==action.id)
        newTodo[i].task=action.payload
        newTodo[i].isUpdating=false
        return newTodo
    }
}


