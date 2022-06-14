import { all, call } from 'redux-saga/effects';

import userSagas from './Reducer/userReducer/userSaga';
import productsSagas from './Reducer/productsReducer/productsSagas';
// import ordersSagas from '../Redux/Reducer/productsReducer/productsSaga';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
  ])
}