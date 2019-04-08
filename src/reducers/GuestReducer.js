const initialState = {
    count: 0
  }
  
  export default (state = initialState, action) => {
      switch(action.type) {
        case 'GUEST_DECREMENT':
          return {
            count: state.count - 1
          }
        case 'GUEST_INCREMENT':
          return {
            count: state.count + 1
          }
        case 'GUESTS_RESET': 
          return {
            count: initialState.count
          }
        default:
          return state;
      }
    }