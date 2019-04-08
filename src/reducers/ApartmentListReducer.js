export default (state = [], action) => {
  switch(action.type) {
    case 'APARTMENT_LIST':
      return action.payload;
    default:
      return state;
  }
}