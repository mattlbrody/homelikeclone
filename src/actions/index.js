import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('https://api.myjson.com/bins/x2ad4');
    
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


// search by city name
export const fetchData = (city) => {
  const cityName = city.toLowerCase()
  if(cityName === 'berlin') {
    return async dispatch => {
      const response = await jsonPlaceholder.get(`https://api.myjson.com/bins/15iffs`);
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'london') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/nin80');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'cologne') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/x2ad4');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'vienna') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/ggal4');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'frankfurt') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/x8pug');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'barcelona') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/11er2w');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'hamburg') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/d4hbc');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'zurich') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/h60ig');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else if(cityName === 'munich') {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/revu0');
  
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  } else {
    return async dispatch => {
      const response = await jsonPlaceholder.get('https://api.myjson.com/bins/15iffs');
      
      dispatch({ type: 'APARTMENT_LIST', payload: response.data.apartments })
      dispatch({ type: 'APARTMENT_TOTAL', payload: response.data})
      dispatch({ type: 'CITY_NAME', payload: response.data.queryParams})
    }
  }
}