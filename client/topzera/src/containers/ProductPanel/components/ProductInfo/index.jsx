import React,{memo} from "react";
import { PriceStyled, TitleStyled } from "./style";


function ProductInfo({ product }) {
    const { name, price } = product

    return (
        <>
            <TitleStyled gutterBottom variant="h5" component="div" className="title">
                    {name}
            </TitleStyled>
            <PriceStyled variant="p" component="div" className="price">
                Por R$ {price}
            </PriceStyled>
        </>
    )
}

export default memo(ProductInfo)