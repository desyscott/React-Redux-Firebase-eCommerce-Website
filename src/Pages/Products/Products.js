import React,{useState} from 'react'
import HomeNav from "../../Components/HomeNav/HomeNav"
import "./Products.css"
import NavBar from "../../Components/DashboardNav"
import Modal from "../../Components/Modal/index"


function Products() {
  
const [hideModal, setHideModal] = useState(true);
const [productCategory, setProductCategory] = useState('mens');
const [productName, setProductName] = useState('');
const [productThumbnail, setProductThumbnail] = useState('');
const [productPrice, setProductPrice] = useState(0);
const [productDesc, setProductDesc] = useState('');


const toggleModal = () => setHideModal(!hideModal);

const configModal = {
  hideModal,
  toggleModal
};


const handleSubmit = e => {
  e.preventDefault();

};

  return (
    <>
    {/* <NavBar/> */}
    <div className="product-container" >
   
    <div className="hero-product">
    <div className="admin">

<div className="callToActions">
  <ul>
    <li>
      <button onClick={() => toggleModal()}>
        Add new product
      </button>
    </li>
  </ul>
</div>

<Modal {...configModal}>
  <div className="addNewProductForm">
   
  </div>
</Modal>



</div>
    </div>
    </div>
    </>
  )
}

export default Products