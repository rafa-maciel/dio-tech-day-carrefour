import React, {memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Button} from '../../../../components'
import { likeProduct } from "../../../../services/productService";
import { addLikedProduct } from '../../../../store/actions/likeActions'
import { incrementLikeToProduct } from "../../../../store/actions/productActions";

function ProductButtons({ product }) {
    const { addCartLink, id } = product
    const userEmail = useSelector(state => state.user.info.email)
    const dispatch = useDispatch()

    const handleLike = () => {
        console.log("liked a product")
        likeProduct(id, userEmail)
            .then(resp => {
                dispatch(addLikedProduct(id))
                dispatch(incrementLikeToProduct(id))
            })
    }

    return (
        <>
            <Link 
                target="_blank"
                rel="noopener"
                href={ addCartLink }>
                    <Button size="small">Comprar</Button>
            </Link>
            <Button size="small" color="secondary" onClick={handleLike}>Gostei!</Button>
        </>
    )
}

export default memo(ProductButtons)