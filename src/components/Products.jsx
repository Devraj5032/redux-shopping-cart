import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const Products = ({category}) => {
  const [products , setProducts] = useState([])

  const fetchData = async () => {
    const getData = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await getData.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchData()
  } , [category])

  return (
    <div style={{display: 'flex' , flexWrap: 'wrap' , padding: '20px' , gap: '20px' , justifyContent: 'center' , alignItems: 'center'}}>
      {products.map(pro => <Product product={pro} key={pro.id}/>)}
    </div>
  )
}
const mapStateToProps = (state) => ({
  category: state.categoryReducer
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps , mapDispatchToProps) (Products)
