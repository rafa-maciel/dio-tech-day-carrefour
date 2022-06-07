import React, {memo} from "react";
import { shallowEqual, useSelector } from "react-redux";
import MainHeader from "../../components/MainHeader";
import ProductCard from "./components/ProductCard";
import { PanelSubtitle, ProductListStyled } from "./style";

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
            <MainHeader>
                <PanelSubtitle variant="p" component="div">As Top ofertas Mais proximas de você!</PanelSubtitle>
            </MainHeader>
            <ProductListStyled>
                <ProductItens />
            </ProductListStyled>
        </>
    )
}

export default memo(ProductPanel)