import React from 'react'
import classes from './Accounts.module.css'
import Modal from './Modal'
const PaymentHistory = (props) => {
  return (
   
    <Modal onClose={props.onClose}>{PaymentHistory}
    <div className={classes.box}>
    <div className={classes.font}>PAYMENT HISTORY</div></div>
    <div className={classes.header}>
    <div className={classes.fontp}>Date Posted</div>
    <div className={classes.fontp}>Amount Paid</div>
    <div className={classes.fontp}>Balance</div>
   
    </div>

    <div className={classes.table}>
      
        <div>04/01/2022</div>
        <div>$197</div>
        <div>$391</div>

    </div>
    <div className={classes.table}>
      
        <div>03/04/2022</div>
        <div>$249</div>
        <div>$588</div>

    </div>
    <div className={classes.table}>
      
        <div>02/16/2022</div>
        <div>$205</div>
        <div>$837</div>

    </div>
    <div className={classes.table}>
      
        <div>01/01/2022</div>
        <div>$197</div>
        <div>$1042</div>

    </div>
    </Modal>
  )
}

export default PaymentHistory