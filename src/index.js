import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import {createStore,applyMiddleware,compose} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import createSagaMiddle from "redux-saga"
import {persistStore} from "redux-persist"

// import {reactReduxFirebase} from "react-redux-firebase"
// import {reduxFirestore} from "redux-firestore"
// import  {firebaseApp} from "../../../Firebase"


import rootReducer from "./Components/Redux/rootReducer"
import rootSaga from "./Components/Redux/rootSaga"

import { Provider } from "react-redux";
import {persistGate} from "redux-persist/integration/react"

const sagaMiddleware =createSagaMiddle();
export const middlewares = [thunk,sagaMiddleware,logger]



export const store =createStore(rootReducer,applyMiddleware(...middlewares) ) 
sagaMiddleware.run(rootSaga);

const persist =persistStore(store)


  ReactDOM.render(
    <Provider store={store}>
  {/* The provider makes the redux store available to our entire apllication */}
  <BrowserRouter>
  <persistGate persist={persist}>
      <App />
      </persistGate>
 </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

