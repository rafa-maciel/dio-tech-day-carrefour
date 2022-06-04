import React, {memo} from "react";
import ProductCard from "../ProductCard";

function ProductList({ products }) {
    return (
        <ul>
            { products.map((product, index) => 
                <li key={`product-${index}`}><ProductCard product={product}/></li>)}
        </ul>
    )
}

export default memo(ProductList)