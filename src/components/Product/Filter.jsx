import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'

const Filter = () => {
  const { setFilter, filter } = useContext(ProductContext)
  return (
    <div>
      <select name="" id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)} className='outline-none'>
        <option value="">Category</option>
        <option value="Electronics">Electronic</option>
        <option value="Fitness">Fitness</option>
        <option value="Home">Home</option>
        <option value="Fashion">Fashion</option>
        <option value="Office">Office</option>
        <option value="Outdoors">Outdoors</option>
      </select>
    </div>
  )
}

export default Filter;