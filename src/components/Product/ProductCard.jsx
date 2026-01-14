import React from 'react'

const ProductCard = ({ product }) => {

    return (
        <div className=''>
            <div className='flex-col p-2 shadow-sm shadow-black rounded-md'>
                <div className='text-gray-400 text-sm font-semibold'>
                    {product.category}
                </div>
                <div>
                    <h2 className='font-bold text-lg'>
                        {product.name}
                    </h2>
                    <div className='text-gray-700'>
                        {product.description}
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <div className='font-bold text-lg'>${product.price}</div>
                        <div className='p-1 rounded-md bg-blue-400 text-white font-semibold text-sm'>Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;