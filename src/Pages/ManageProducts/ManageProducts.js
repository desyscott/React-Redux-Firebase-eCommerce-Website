import React,{useState,useEffect} from 'react'

import "./index.css"

import {useSelector,useDispatch} from "react-redux"
import {addNewProductsStart, fetchProductsStart,deleteProductStart} from "../../Components/Redux/Reducer/productsReducer/productsAction"
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
const [productCategory, setProductCategory] = useState('perfumes');
const [productName, setProductName] = useState('');
const [productImg, setProductImg] = useState('');
const [productPrice, setProductPrice] = useState(0);
const [productDiscount, setProductDiscount] = useState(0);
const [productDescription, setProductDescription] = useState("");



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
  setProductCategory('perfumes');
  setProductDescription("");
  setProductImg("");
   setProductPrice("");
  setProductDiscount("");
  setProductName("");
}

const handleSubmit = e => {
  e.preventDefault();
  
dispatch(
  addNewProductsStart({
productCategory,
productName,
productDescription,
productImg,
productPrice,
 productDiscount,
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
              options={[{
                name: "Perfumes",
                value: 'perfumes'
              },
              {
                name: "Sneakers",
                value: 'sneakers'
              },
              {
                name: "Shirts",
                value: 'shirts'
              },
              {
                name: "Watches",
                value: 'watches'
              },
                        ]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />
            
            <FormInput
              label="Discount"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productDiscount}
              handleChange={e => setProductDiscount(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productImg}
              handleChange={e => setProductImg(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />
              <CKEditor
              onChange={e=> setProductDescription(e.editor.getData())}
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
    const{productName,productPrice,productImg,documentID}=product
  
return(
  <div className="newProduct-container"  key={documentID}>
  <div className="newProduct-wrapper">
    <img src={productImg} alt="" className="imgUri"/>
    <p className="product-name">{productName}</p>
    <p className="product-price">${productPrice}</p>
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