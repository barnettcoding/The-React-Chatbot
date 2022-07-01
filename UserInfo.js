import React from 'react'
import classes from './UserInfo.module.css'
import Button from './UI/Button'
import Accounts from './Accounts'
import SchedulePayment from './SchedulePayment'
import SimpleForm from './ChatBot'





function UserInfo(props) {
  
  return (
    <div className={classes.box}>
        <span className={classes.font}>Welcome to the Payment Portal!</span>
        <h4 className={classes.fontp}>John Smith</h4>
        <p className={classes.fontp}>Account #</p>
        <p className={classes.fontp}>2143754</p>
        <h2>Total Balance:  $231.09</h2>
        <div className={classes.grid}>
        
        <div><Button onClick={props.onShowPaymentMethods}>Edit Payment Methods</Button></div>
        <div><Button onClick={props.onShowPaymentHistory}>Payment History</Button></div>  
        {/* <div><Button onClick={props.onShowPayArrangements}>Payment Arrangements</Button></div>   */}
       
          
        
          <div className={classes.btn}>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    See Accounts</button>
          </div></div>
          <div class="collapse" id="collapseExample">
          <div class="card card-body"><Accounts></Accounts></div>


          </div>
          <div className={classes.grid}>
          <div className={classes.btn}>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
    Schedule Payments</button>
          </div></div>
          <div class="collapse" id="collapse1">
          <div class="card card-body"><SchedulePayment></SchedulePayment></div>
          </div>
          <div>
          <SimpleForm>Hello</SimpleForm>
          </div>

          </div>
          
       
      
       
        
       
  )
}

export default UserInfo