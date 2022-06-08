import React, {memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Button} from '../../../../components'
import { likeProduct } from "../../../../services/productService";
import { addLikedProduct } from '../../../../store/actions/likeActions'
import { incrementLikeToProduct } from "../../../../store/actions/productActions";
import { ProductButtonsContainer } from "./style";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductButtons({ product }) {
    const { addCartLink, id } = product
    const userEmail = useSelector(state => state.user.info.email)
    const dispatch = useDispatch()

    const handleLike = () => {
        likeProduct(id, userEmail)
            .then(() => {
                dispatch(addLikedProduct(id))
                dispatch(incrementLikeToProduct(id))
            })
    }

    return (
        <ProductButtonsContainer>
            <Link 
                target="_blank"
                rel="noopener"
                href={ addCartLink }>
                    <Button size="large" color="success" variant="contained" startIcon={<AddShoppingCartIcon />}>Comprar</Button>
            </Link>
            <Button 
                disabled={product.likedByUser}
                variant="contained"
                size="large" 
                color="secondary"
                startIcon={<ThumbUpIcon />}
                onClick={handleLike}>Gostei!</Button>
        </ProductButtonsContainer>
    )
}

export default memo(ProductButtons)