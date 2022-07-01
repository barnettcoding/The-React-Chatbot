import React from 'react'
import classes from './Payments.module.css'
import Modal from './Modal'


const PaymentMethods = (props) => {
  return (
    <Modal onClose={props.onClose}>{PaymentMethods}
    <div className={classes.box}>
     
        <h2 className={classes.font}>GNC Bank</h2> 
          <p className={classes.fontp}>Checking ****1234</p> 
        <h2 className={classes.font}>Visa</h2>
        <p className={classes.fontp}>******1111</p>
        <h2 className={classes.font}>MC</h2>
        <p className={classes.fontp}>******3754</p>
        <div className={classes.grid}></div>
        
    </div></Modal>
  )
}

export default PaymentMethods