import React, {memo} from "react";
import { CardMedia } from '../../../../components'

function ProductImage({product}) {

    const imageUrl = () => {
        if (product === '{}') return null

        return product.items[0].images[0].imageUrl
    }

    const imageLabel = () => {
        if (product === '{}') return null

        return product.items[0].images[0].imageLabel
    }

    return (
        <CardMedia
                component="img"
                image={imageUrl()}
                alt={imageLabel()}
            />
    )
}

export default memo(ProductImage);