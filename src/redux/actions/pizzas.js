import axios from 'axios';

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const setLoaded = payload => ( {
    type: 'SET_LOADING', 
    payload
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    category ? axios.get(`/pizzas?category=${category}&_sort=${sortBy}&_order=${sortBy === 'name' ? 'asc': 'desc'}`).then(({data}) => {
        dispatch(setPizzas(data))
      }) :  axios.get(`/pizzas`).then(({data}) => {
        dispatch(setPizzas(data))
      })
};