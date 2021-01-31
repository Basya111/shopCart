import { httpService } from './httpService.js'

export const shopService = {
    query,
    getProductById
}

function query() {
    return httpService.get(`item`)
    // return Promise.resolve(gItems) 
}

function getProductById(productId) {
    return httpService.get(`item/${productId}`)
}
