import React, {memo} from "react";
import { shallowEqual, useSelector } from "react-redux";

function ProductPanel() {
    const productList = useSelector((state) => state.products.productList, shallowEqual)

    return (
        <>
            <h3>As melhores ofertas perto de você</h3>
            <ul>
                {productList.map((product, index) => <li>{product.productName}</li>)}
            </ul>
        </>
    )
}

export default memo(ProductPanel)