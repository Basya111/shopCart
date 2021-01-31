import { shopService } from '../../services/shopService.js'


export function loadProducts() { // Action Creator
    return async (dispatch) => {
        try {
            const products = await shopService.query()
            dispatch({ type: 'SET_PRODUCTS', products })
        } catch (err) {
            console.log('err get products LOAD PRODUCTS', err);
        }
    }
}

export function addToCart(product) {
    return (dispatch) => { 
        dispatch({ type: 'ADD_TO_CART', product})
    }
}

export function clearCart() {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_CART' })
    }
}

export function removeFromCart(productId) {
    return (dispatch) => {
        dispatch({ type: 'REMOVE_FROM_CART', productId })
    }
}

