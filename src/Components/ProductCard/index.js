import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useParams,useHistory} from "react-router-dom"
import {fetchProductStart,setProduct} from "../Redux/Reducer/productsReducer/productsAction"
import { addProduct} from "../Redux/Reducer/cartsReducer/cartAction"
import "./index.css"


const mapState=({ProductsData})=>({
    product:ProductsData.product
})

const ProductCard=({})=>{
  const history =useHistory()
     const dispatch =useDispatch()
    const {product} =useSelector(mapState)
    
    const {productID}=useParams()
    
    const {productName,productPrice,productImg}= product
    
    useEffect(()=>{
        dispatch(fetchProductStart(productID) )
       return ()=>{
        dispatch(
            setProduct({})
         )
       }   
    },[])
    
    
    const handleAddToCart=(product)=>{
      if(!product) return;
      dispatch( addProduct(product));
      history.push("/cart");
    }
    
  return (
    <div className="productDetails-container">
    <img src={productImg} alt="" className="productDetails-img"/>
    <div>
    <p>
    {productName}
    </p>
    <p>{productPrice}</p>
    </div>
    <button className="btn cartBtn" onClick={()=>handleAddToCart(product)}>Add  To Cart</button>
    </div>
  )
}

export default ProductCard