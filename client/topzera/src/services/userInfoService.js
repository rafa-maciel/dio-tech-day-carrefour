import { getLikesByUserEmail, getProductsListFromCEP } from "./apiService"

/**
 * 
 * @param {String} email 
 * @param {String} cep 
 * @returns {Prommise} Object with 2 parameters (products and likes)
 */
const getProductsAndLikes = (email, cep) => {
    return getLikesByUserEmail(email)
            .then(likes => {
                return getProductsListFromCEP(cep)
                    .then(products => 
                        products.map(product => 
                            addLikedInformationIfUserLikedThisProduct(product, likes)))
                            
                    .then(products => 
                        orderProductsByLikes(products)) // return a product list ordered by likes
                    
                    .then(products => {
                        return {
                            products: products,
                            likes: likes
                        }
                    })

            })
}

/**
 * Loop in the current user likes
 * to find the current product and set likedByUser atribute on it
 * if the prodcut has been found.
 */
const addLikedInformationIfUserLikedThisProduct = (product, likes) => {
    likes.forEach(like => {
        if (like.productID === product.productId)
            product = {...product, likedByUser: true } 
    })

    return product
}

/**
 * 
 * @param {array} products 
 * @returns {array} products ordered by must liked
 */
const orderProductsByLikes = (products) => {
    return products.sort(compareProductByItsLike)
}

/**
 * 
 * @param {object} productA 
 * @param {object} productB 
 * @returns comparation for products by must liked
 */
const compareProductByItsLike = (productA, productB) => {
    if (productA.totalLikes < productB.totalLikes) return -1
    else if (productA.totalLikes > productB.totalLikes) return 1
    return 0
}


export { getProductsAndLikes }