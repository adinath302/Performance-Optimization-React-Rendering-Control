import React, { Suspense, useCallback, useState } from 'react'
import ProductList from '../components/Product/ProductList'
import Other from '../components/other/Other';
import Filter from '../components/Product/Filter';
import { lazy } from 'react';
const Textshow = lazy(() => import('../components/Product/textshow.jsx'))
const Dashboard = React.memo(() => {
    const [count, setCount] = useState(1);
    const [othercount, setothercount] = useState(1)
    const [showtext, setShowtext] = useState(false)
    // console.log("Dashboard");

    const handlecount = useCallback(() => {
        setCount(count + 1)
        // console.log("update count");
    }, [count, setCount])

    return (
        <Suspense className='' fallback={<div>Loading...</div>}>
            <div className='bg-blue-300 p-2 flex justify-between'>
                <div className='font-bold text-md' onClick={() => setShowtext(!showtext)}>
                    Dashboard
                </div>
                {
                    showtext &&
                    <div className='relative'>
                        <Textshow />
                    </div>
                }
                <div
                    className='font-semibold text-sm cursor-pointer select-none'
                    onClick={handlecount}
                >
                    Update {count}
                </div>
                <div>
                    <Other setothercount={setothercount} othercount={othercount} />
                </div>
                <div>
                    <Filter />
                </div>
            </div>
            <div className='px-2 py-2'>
                <ProductList />
            </div>
        </Suspense>
    )
})
export default React.memo(Dashboard);