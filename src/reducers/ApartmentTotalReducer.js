export default (state = [], action) => {
    switch(action.type) {
      case 'APARTMENT_TOTAL':
        return action.payload;
      default:
        return state;
    }
  }