import React, {memo} from "react";
import { shallowEqual, useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import { ProductListStyled } from "./style";

function ProductPanel() {
    const productList = useSelector((state) => state.products.productList, shallowEqual)

    const ProductItens = () => {
        if (productList.length) {
            return productList.map((product, index) => 
                <li key={`product-${index}`} >
                    <ProductCard product={product}/>
                </li>
            )
        }

        return <span>carregando itens</span>
    }

    return (
        <>
            <h3>As melhores ofertas perto de você</h3>
            <ProductListStyled>
                <ProductItens />
            </ProductListStyled>
        </>
    )
}

export default memo(ProductPanel)