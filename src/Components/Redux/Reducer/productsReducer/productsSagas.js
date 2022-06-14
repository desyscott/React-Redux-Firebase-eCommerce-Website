import { takeLatest, put, all, call } from 'redux-saga/effects';
import productsTypes from './productsTypes';
import {handleAddProduct,handleFetchProducts,handleDeleteProducts} from "./productsHelper"
import {fetchProductsStart,setProductsStart} from "./productsAction"
import {auth} from "../../../../Firebase"


///Redux saga works whenever action gets dispatch it will  intercept  the action to handle the async event and it will dispatch 
///another action with the payload to update the redux sStore.
export function* addNewProduct({ payLoad :{
category,
title,
description,
imageUri,
price,
discount,
}}) {

  try {
    const timestamp = new Date();
    //handling our asynchronous code to update our firebase store
    yield handleAddProduct({
       category,
       title,
       description,
       imageUri,
       price,
       discount,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart())
  } catch (err) {
    console.log(err);
  }

}

///generator that intercept  the dispatch action with a payLoad that update the redux store
export function* onAddNewProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCTS_START, addNewProduct);
}

export function* fetchProducts({payLoad}){
    try{
      //performing async action
       const products = yield handleFetchProducts(payLoad)     
  //   updating the the redux state  
        yield put( setProductsStart(products))
    }catch(err){
      console.log(err)
    }
}

///generator that intercept  the dispatch action with a payLoad that update the redux store
export function* onFetchProductsStart(){
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START,fetchProducts)
} 

export function* deleteProduct({payLoad}){
   try{
   yield  handleDeleteProducts(payLoad)
   yield put(
     fetchProductsStart()
   )
   
   }catch(err){
     console.log(err)
   }
}

export function* onDeleteProductStart(){
    yield takeLatest(productsTypes.DELETE_PRODUCTS_START,deleteProduct)
}

export default function* productsSagas(){
    yield all([
        call(onAddNewProductStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart)
    ])
}
