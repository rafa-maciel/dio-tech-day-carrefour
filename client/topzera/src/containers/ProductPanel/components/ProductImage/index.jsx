import React, {memo, useEffect, useState} from "react";
import { ProductImageStyled } from "./style";

function ProductImage({images}) {
    const [currentImage, setCurrentImage] = useState(null)

    useEffect(() => {
        if (images != null && currentImage === null) {
            setCurrentImage(images[0]) 
        }
    }, [images, currentImage])

    const ProductImage = () => {
        if (currentImage) return (
            <ProductImageStyled 
                component="img"
                image={currentImage.url}
                alt={currentImage.label}/>
        )
    }

    return (
        <ProductImage />
    )
}

export default memo(ProductImage);