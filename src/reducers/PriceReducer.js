const initialState = {
    price: 100
}

const priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PRICE_FILTER': 
            return {
                state,
                price: action.price
            }
        default:
            return state
    }
}

export default priceReducer