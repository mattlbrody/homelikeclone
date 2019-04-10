export default (state = [], action) => {
  switch(action.type) {
    case 'APARTMENT_LIST':
      return action.payload;
    case 'APARTMENT_RESET':
      return [];
    default:
      return state;
  }
}