import UserInfo from './components/UserInfo'
import classes from './App.module.css'
import {useState} from 'react'

import PaymentHistory from './components/PaymentHistory'
import PaymentMethods from './components/PaymentMethods'


function App(props) {
const [showPaymentMethodsModal, setPaymentMethodsModal] = useState(false);
const [showPaymentHistoryModal, setPaymentHistoryModal] = useState(false);
// const [showPayArrangementModal, setPayArrangementModal] = useState(false);

const showPaymentMethodsModalHandler = () => {
  setPaymentMethodsModal(true)
}
const showPaymentHistoryHandler = () => {
  setPaymentHistoryModal(true);
}
// const showPayArrangementHandler = () => {
//   setPayArrangementModal(true);
// }
const hidePaymentMethodsModalHandler = () => {
  setPaymentMethodsModal(false);
}
const hidePaymentHistoryHandler = () => {
  setPaymentHistoryModal(false);
}
// const hidePayArrangementHandler = () => {
//   setPayArrangementModal(false);
// }
    
return (
 
<div className={classes[`bg-color`]}>
  <div className={classes.placeholder}></div>
  <UserInfo onShowPaymentMethods={showPaymentMethodsModalHandler} onShowPaymentHistory={showPaymentHistoryHandler}> </UserInfo>
  {showPaymentMethodsModal && <PaymentMethods onClose={hidePaymentMethodsModalHandler}/>}
  {showPaymentHistoryModal && <PaymentHistory onClose={hidePaymentHistoryHandler}/>}
  {/* {showPayArrangementModal && <SchedulePayment onClose={hidePayArrangementHandler}/>} */}
  {/* // onShowPayArrangements={showPayArrangementHandler}> */}
 
  {/* <Payments ></Payments> */}
  <div className={classes.placeholder}></div>
  <div className={classes.placeholder}></div>
 
 </div>
);
}

export default App;
