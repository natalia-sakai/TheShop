import React from 'react';
import {createStore, combineReducers, applyMiddleware} from  'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './navigation/AppNavigator';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth'

const rootReducer = combineReducers({
  products : productsReducer,
  cart: cartReducer, 
  orders: ordersReducer ,
  products: productsReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store = {store} >
      <AppNavigator/>
    </Provider>
  );
};