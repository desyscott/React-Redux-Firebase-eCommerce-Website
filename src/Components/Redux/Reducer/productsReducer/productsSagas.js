import { takeLatest, put, all, call } from 'redux-saga/effects';
import productsTypes from './productsTypes';
import {handleAddProduct} from "./productsHelper"
import {auth} from "../../../../Firebase"


///Redux saga works whenever action gets dispatch it will  intercept  the action to handle the async event and it will dispatch 
///another action with the payload to update the redux sStore.
export function* addProduct({ payload :{
  productCategory,
  productName,
  productThumbnail,
  productPrice,
}}) {

  try {
    const timestamp = new Date();
    
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
  } catch (err) {
    console.log(err);
  }

}
///updating the redux state
export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export default function* productsSagas(){
    yield all([
        call(onAddProductStart)
    ])
}
