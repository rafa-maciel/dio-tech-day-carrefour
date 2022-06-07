import React, {memo} from "react";
import { shallowEqual, useSelector } from "react-redux";
import MainHeader from "../../components/MainHeader";
import { clearStorage } from "../../services/storageService";
import ProductCard from "./components/ProductCard";
import { ButtonChangeInfo, PanelSubtitle, ProductListStyled } from "./style";

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

    const handleChangeInfo = () => {
        clearStorage()
        document.location.reload(true)
    }

    return (
        <>
            <MainHeader>
                <PanelSubtitle variant="p" component="div">As Top ofertas Mais proximas de você!</PanelSubtitle>
                <ButtonChangeInfo variant="outlined" onClick={handleChangeInfo}>Trocar CEP/Email</ButtonChangeInfo>
            </MainHeader>
            <ProductListStyled>
                <ProductItens />
            </ProductListStyled>
        </>
    )
}

export default memo(ProductPanel)