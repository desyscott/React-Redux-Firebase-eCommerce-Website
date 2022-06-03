import { all, call } from 'redux-saga/effects';

// import userSagas from '../Redux/Reducer/userReducer/productsSaga';
import productsSagas from './Reducer/productsReducer/productsSagas';
// import ordersSagas from '../Redux/Reducer/productsReducer/productsSaga';

export default function* rootSaga() {
  yield all([
    call(productsSagas),
  ])
}