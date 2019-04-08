export default (state = [], action) => {
  switch(action.type) {
    case 'CITY_NAME':
      return action.payload;
    default:
      return state;
  }
}