import { CardActions } from "../../../../components";
import React, {memo} from "react";
import ProductImage from "../ProductImage";
import { CardContentStyled, LikeBadgeStyled, ProductButtonsStyled, ProductCardStyled, ProductInfoStyled } from "../../style";


function ProductCard({ product }) {
    
    // useEffect(() => console.log(product), [product])

    return (
        <ProductCardStyled>
            <CardContentStyled>
                <LikeBadgeStyled totalLikes={product.totalLikes} />
                <ProductImage images={product.images} />
                <ProductInfoStyled product={product}/>
            </CardContentStyled>
            <CardActions>
                <ProductButtonsStyled product={product} />
            </CardActions>
        </ProductCardStyled>
    )
}

export default memo(ProductCard)