export const addPizzaToCart = (pizzaObj) => ({
    type:'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const ClearCart = () => ({
    type:'CLEAR_CART',
})

export const removeCartItem = (id) => ({
    type:'REMOVE_CART_ITEM',
    payload: id,
})

export const plus = (id) => ({
    type:'PLUS_CART_ITEM',
    payload: id,
})

export const minus = (id) => ({
    type:'MINUS_CART_ITEM',
    payload: id,
})