import React, { memo, useContext } from 'react'
import ProductCard from './ProductCard'
import Productdata from './Productdata'
import { ProductContext } from '../ProductContext'

const ProductList = memo(() => {
    const { productinfo } = useContext(ProductContext)
    // console.log("productinfo",productinfo);

    return (
        <div>
            <div className='flex-wrap gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    productinfo ? productinfo.map((product) => (
                        < ProductCard key={product.id} product={product} />
                    ))
                        :
                        "Data is not available"
                }
            </div>
        </div>
    )
})

export default ProductList; 