const initialState = {
  count: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
      case 'BEDROOM_DECREMENT':
        return {
          count: state.count - 1
        }
      case 'BEDROOM_INCREMENT':
        return {
          count: state.count + 1
        }
      case 'BEDROOM_RESET':
        return {
          count: initialState.count
        }
      default:
        return state;
    }
  }