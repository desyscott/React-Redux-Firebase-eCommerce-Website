import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addNewProductsStart, fetchProductsStart,deleteProductStart} from "../../Components/Redux/Reducer/productsReducer/productsAction"
import "./index.css"
import Modal from "../../Components/Modal/index"
import {CKEditor} from 'ckeditor4-react';

import FormInput from "../../Components/FormInput/index"
import FormSelect from "../../Components/FormSelect/index"
import LoadMoreButton from "../../Components/LoadMoreButton/index"

const mapState=({ProductsData})=>({
  products:ProductsData.products
})


function ManageProducts() {
  const {products}=useSelector(mapState)
  const dispatch = useDispatch();
  const {data,queryDoc, isLastPage}=products
  
const [hideModal, setHideModal] = useState(true);

//local state
const [category, setCategory] = useState('fruits');
const [title, setTitle] = useState('');
const [imageUri, setImageUri] = useState('');
const [price, setPrice] = useState(0);
const [discount, setDiscount] = useState(0);
const [description, setDescription] = useState("");



const toggleModal = () => setHideModal(!hideModal);

const configModal = {
  hideModal,
  toggleModal
};

//fetch the products from the redux store as soon as the component unmount
useEffect(()=>{
  dispatch( fetchProductsStart())
  },[])
  
  
const ResetForm=()=>{
  setHideModal(true)
  setCategory("fruit");
  setDescription("");
  setImageUri("");
   setPrice("");
  setDiscount("");
  setTitle("");
}

const handleSubmit = e => {
  e.preventDefault();
  
dispatch(
  addNewProductsStart({
category,
title,
description,
imageUri,
 price,
discount,
  })
);
ResetForm()
}

const handleLoadMore=()=>{
      dispatch(fetchProductsStart({
        startAfterDoc:queryDoc,
        persistProducts:data
      }))
}

const configLoadMore={
        onLoadMoreEvt:handleLoadMore
}
  return (
    <>
    <div className="manageProduct-container">
<div className="callToActions">
      <button className="btn callToActions-btn" onClick={() => toggleModal()}>
        Add new product
      </button>
 
</div>

<Modal {...configModal}>
<div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2 className="product-header">
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[ {
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
              },
                        ]}
              handleChange={e => setCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={title}
              handleChange={e => setTitle(e.target.value)}
            />
            
            <FormInput
              label="Discount"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={discount}
              handleChange={e => setDiscount(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={imageUri}
              handleChange={e => setImageUri(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={price}
              handleChange={e => setPrice(e.target.value)}
            />
              <CKEditor
              onChange={evt => setDescription(evt.editor.getData())}
            />
            <br />

            <button type="submit">
              Add product
            </button>
          </form>
        </div>
</Modal>

<div className="manageProducts">
  <h3 className="manageProducts-header">Manage Products</h3>
  {(Array.isArray(data) && data.length > 0) && data.map((product)=>{
    const{title,price,imageUri,documentID}=product
  
return(
  <div className="newProduct-container"  key={documentID}>
  <div className="newProduct-wrapper">
    <img src={imageUri} alt="" className="imgUri"/>
    <p className="product-name">{title}</p>
    <p className="product-price">${price}</p>
    <button className="btn deleteBtn" onClick={()=>dispatch(deleteProductStart(documentID))}>Delete</button>
    </div>
    </div>
    )})}
</div>
      {  
       !isLastPage &&
     ( <LoadMoreButton {...configLoadMore}/>)
       }

</div>
    </>
  )}
export default ManageProducts