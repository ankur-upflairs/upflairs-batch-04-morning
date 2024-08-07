let initialState=0

export default function counterReducer(state=initialState,action){
    if(action.type=='counter/add'){
        return state+1
    }
    else if(action.type=='counter/sub'){
        return state-1
    }
    return state
}