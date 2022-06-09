import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux"
import {addNewProducts} from "../../Components/Redux/Reducer/productsReducer/productsAction"
import "./Products.css"
import Modal from "../../Components/Modal/index"
import {CKEditor} from 'ckeditor4-react';

import FormInput from "../../Components/FormInput/index"
import FormSelect from "../../Components/FormSelect/index"

import {auth,db} from "../../Firebase"
import {addDoc,collection,onSnapshot,doc, deleteDoc} from "firebase/firestore"

function Products() {
  const dispatch =useDispatch();
  const [products, setProducts] = useState([]);
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
  
// dispatch(
//   addNewProducts({
//     productCategory,
//     productName,
//     productThumbnail,
//     productPrice,
//   })
// );

const timestamp = new Date();

addDoc(collection(db,"addProducts"),{
  category,
 description,
 imageUri,
  price,
 discount,
 title,
 id : auth.currentUser.uid,
 createdDate:timestamp,
 
 }).then((result)=>{
     console.log(result)
 }).catch((err)=>{
     console.log(err)
 })

ResetForm()

}

useEffect(()=>{
 const unsubscribe= onSnapshot(collection (db,"addProducts"),(snapshot)=>(
  
    snapshot.docs.map((doc)=>(
      setProducts(snapshot.docs.map((doc)=>(
      {
        data:doc.data(),
        userID:doc.id
       }
      )))
    ))
    
 ))   
  return unsubscribe;
},[])
console.log(products)


const {userID}=products

const deleteProduct=()=>{
   const docRef=doc(db,"addProducts", userID)
   
   deleteDoc(docRef).then(()=>{
     console.log("document deleted")
   }).catch((err)=>{
     console.log(err)
   })
}

  return (
    <>
    <div className="product-container">

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
                value: "vegetables",
                name: "Vegetables"
              }, {
                value: "fruits",
                name: "Fruits"
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
  {products.map(({userID,data:{title,price,imageUri}})=>{
    {/* const{title,price,imageUri}=product */}
    
return(
  <div className="newProduct-container"  key={userID}>
  <div className="newProduct-wrapper">
    <img src={imageUri} alt="" className="imgUri"/>
    <p className="product-name">{title}</p>
    <p className="product-price">${price}</p>
    <button className="btn deleteBtn" onClick={()=>
      
   
   deleteDoc(doc(db,"addProducts", userID))
   }>Delete</button>
    </div>
    </div>
)   
  })}

</div>


</div>

    </>
  )
}

export default Products