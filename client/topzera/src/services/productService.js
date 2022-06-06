import { addLikedProduct } from "./apiService";


export function likeProduct(productId, email) {
    return addLikedProduct(productId, email)
}