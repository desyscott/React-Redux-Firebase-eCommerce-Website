import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useHistory,useParams} from "react-router-dom"
import {fetchProductsStart} from "../Redux/Reducer/productsReducer/productsAction"
import LoadMoreButton from "../LoadMoreButton/index"
import FormSelect from "../FormSelect/index"
import "./ProductsResult.css"
import Product from "./Product/index"

const mapState=({ProductsData})=>({
    products:ProductsData.products
})

const ProductsResult=()=>{
    const history =useHistory()
      const {products}=useSelector(mapState)                    
    const dispatch=useDispatch()
    
    const {data,queryDoc,isLastPage } = products
    
    //useParams is used to get hold of the url Parameters
    const {filterType}=useParams();
    
    useEffect(()=>{
      dispatch(fetchProductsStart({filterType}))
    },[filterType])
    
    if(!Array.isArray(data)) return null
    
    if(data.length < 1){
        return(
            <div>
            <p>No products found</p>
            </div>
        )
    }
    
    const handleFilter=(e)=>{
   const nextFilter = e.target.value
   history.push(`/search/${nextFilter}`)
    }
    
    const configFilter={
        defaultValue:filterType,
        options:[
            {
                value: "",
                name: "show all"
        },
         
            {
                value: "fruits",
                name: "Fruits"
        },
        {
            value: "vegetables",
            name: "Vegetables"
    },
            {
                value: "meats",
                name: "Meats"
        },
            {
                value: "dairy products",
                name: "Dairy Products"
        }
                 ],
  handleChange: handleFilter
    }

const handleLoadMore =()=>{
  dispatch(fetchProductsStart({
    filterType,
    startAfterDoc:queryDoc,
    persistProducts:data
  }))
}
    const configLoadMore ={
      onLoadMoreEvt:handleLoadMore,
    }
      
  return (
    <div className="ProductsResult-container">
    
       <h1>Browse Products</h1>
       <FormSelect {...configFilter}/>
       
        {data.map(product=>{
            const{imageUri,price,title, documentID}=product
            
            const config={
                imageUri,
                price,
                title, 
                documentID
            }
          return(
    
              <Product {...config}/>
          )
        })}
        <div>
      {  
       !isLastPage &&
     ( <LoadMoreButton {...configLoadMore}/>)
       }
       </div>
    </div>
  )
}

export default  ProductsResult;