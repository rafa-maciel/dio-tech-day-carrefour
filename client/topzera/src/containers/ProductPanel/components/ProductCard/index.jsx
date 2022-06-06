import { CardActions, CardContent, } from "../../../../components";
import React, {memo} from "react";
import ProductImage from "../ProductImage";
import { LikeBadgeStyled, ProductButtonsStyled, ProductCardStyled, ProductInfoStyled } from "../../style";


function ProductCard({ product }) {
    
    // useEffect(() => console.log(product), [product])

    return (
        <ProductCardStyled>
            <LikeBadgeStyled totalLikes={product.totalLikes} />
            <ProductImage images={product.images} />
            
            <CardContent>
                <ProductInfoStyled product={product}/>
            </CardContent>
            <CardActions>
                <ProductButtonsStyled product={product} />
            </CardActions>
        </ProductCardStyled>
    )
}

export default memo(ProductCard)