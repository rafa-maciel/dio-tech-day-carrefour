import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from "../../../../components";
import React, {memo} from "react";
import ProductImage from "../ProductImage";
import { ProductCardStyled } from "../../style";

function ProductCard({ product }) {

    return (
        <ProductCardStyled>
            <ProductImage product={product} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link 
                    target="_blank"
                    rel="noopener"
                    href={product.items[0].sellers[0].addToCartLink}>
                        Adicionar ao Carrinho
                </Link>
                <Button size="small">Learn More</Button>
            </CardActions>
        </ProductCardStyled>
    )
}

export default memo(ProductCard)