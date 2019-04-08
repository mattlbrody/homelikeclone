const initialState = {
    size: 100
}

const sizeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIZE_FILTER': 
            return {
                state,
                size: action.size
            }
        default:
            return state
    }
}

export default sizeReducer