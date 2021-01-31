
const initialState = {
    products: [],
    cartProducts: [],
}

export function shopReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.products }
        case 'ADD_TO_CART':
            var cartProduct = state.cartProducts.find(cartProduct => cartProduct._id === action.product._id)
            if (!cartProduct) {
                return { ...state, cartProducts: [...state.cartProducts, { ...action.product, amount: 1 }] }
            }
            // Already in Cart:
            const cartProducts = state.cartProducts.map(cartProduct => {
                return (cartProduct._id === action.product._id) ?
                    { ...cartProduct, amount: cartProduct.amount + 1 } :
                    cartProduct;
            })
            return { ...state, cartProducts }

        case 'CLEAR_CART':
            return { ...state, cartProducts: [] }
        default:
            return state
    }
}