import React from 'react'
import ReactDOM from 'react-dom'

import routes from './config/routes'

ReactDOM.render(routes, document.getElementById('app'));


// Potential React structure
// That will link to Varya's React folder. This will notn work with ARMTHEPIT
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { createStore } from 'redux'
// import reducer from './redux/modules/reducer';
// import { Provider } from 'react-redux';
//
// import AddToCartButton from './containers/AddToCartButton';
// import Cart from './components/Cart';
//
// import {connect} from 'react-redux';
//
// let store = createStore(reducer);
//
// const CartWithStore = connect(
//     state => ({size: state.cart.goods})
//     )(Cart);
//
// const App = () => {
//
//   return (
//     <div>
//       <p>
//         Our fashion cart:
//         <CartWithStore/>
//       </p>
//       <AddToCartButton/>
//     </div>
//   )
//
// }
//
// ReactDOM.render(
//   <Provider store={store} key="provider">
//     <App/>
//   </Provider>
//   ,
//   document.getElementById('root')
// );
