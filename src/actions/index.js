import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('https://api.myjson.com/bins/nin80');

    dispatch({ type: 'FETCH_POSTS', payload: response.data.apartments })
  }
}