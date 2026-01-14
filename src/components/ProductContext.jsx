import { Children, useEffect, useMemo, useState } from "react";
import Productdata from "./Product/Productdata";
import React from "react";
const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {

    const [productinfo] = useState(Productdata) // 
    const [filter, setFilter] = React.useState('')
    console.log(filter);

    const filterProduct = useMemo(() => {
        if (filter === '') return productinfo;
        return productinfo.filter((product) => product.category === filter)
    }, [filter, productinfo])

    const contextvalue = {
        productinfo: filterProduct,
        filter,
        setFilter
    }

    return (
        <ProductContext.Provider value={contextvalue}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
export { ProductContext }