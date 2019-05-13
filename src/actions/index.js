import jsonPlaceholder from '../apis/jsonPlaceholder';

// returns initial apartment list data on page load
export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('x2ad4');
    
    dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
    dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
    dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
  }
}

// Price filter
export const PriceFilter = (price) => {
  return {
      type: 'PRICE_FILTER',
      price
  }
}

// Size filter
export const SizeFilter = (size) => {
  return {
      type: 'SIZE_FILTER',
      size
  }
}

// Reset filter 
export const aptReset = () => {
  return {
    type: 'APARTMENT_RESET',
    paylod: []
  }
}

// returns the right URL and dispatches the data
const returnData = (cityURL) => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(cityURL);
    dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
    dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
    dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
  }
}

// search by city name
export const fetchData = (city) => {
  const cityName = city.toLowerCase()
  switch(cityName) {
    case 'berlin':
      return returnData(`15iffs`);
    case 'london':
      return returnData(`nin80`);
    case 'cologne':
      return returnData(`x2ad4`);
    case 'vienna':
      return returnData(`ggal4`);
    case 'frankfurt':
      return returnData(`x8pug`);
    case 'barcelona':
      return returnData(`11er2w`);
    case 'hamburg':
      return returnData(`d4hbc`);
    case 'zurich':
      return returnData(`h60ig`);
    case 'munich':
      return returnData( `revu0`);
    default:
      return dispatch => {
        dispatch({ type: 'APARTMENT_LIST', payload: 'No data available for that city' })
      }
  }
}