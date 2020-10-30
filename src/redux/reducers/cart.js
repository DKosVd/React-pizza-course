const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount:0,
};

const cart = (state =  initialState, action) => {
    if(action.type === 'ADD_PIZZA_CART') {
        const currentPizza =  !state.items[action.payload.id] ? [action.payload] : 
        [...state.items[action.payload.id].items, action.payload]
        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentPizza,
                totalPrice: currentPizza.reduce((sum, obj) => obj.price + sum, 0),
            }
        }
        const items = Object.values(newItems).map( obj => obj.items);
        const AllPizzas = [].concat.apply([], items);
        const totalPr = AllPizzas.reduce((sum, obj) => obj.price + sum, 0);
        
        return {
            ...state,
           items: newItems,
           itemsCount: AllPizzas.length,
           totalPrice: totalPr,
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            ...state, 
            items: {},
            totalPrice: 0,
            itemsCount:0,
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            ...state, 
            items: {},
            totalPrice: 0,
            itemsCount:0,
        }
    }
    if (action.type === 'PLUS_CART_ITEM') {
        const newItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0]
        ];
        return {
            ...state, 
            items: {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: newItems.reduce((sum, obj) => obj.price + sum, 0),
                }
            },
           
        }
    }
    if (action.type === 'MINUS_CART_ITEM') {
        const oldItems = [
            ...state.items[action.payload].items
        ]
        const newItems = oldItems.length > 1 ? [
            ...state.items[action.payload].items
        ].slice(1) : oldItems;

        return {
            ...state, 
            items: {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: newItems.reduce((sum, obj) => obj.price + sum, 0),
                }
            },
           
        }
    }
    return state;
};

export default cart;