import React from 'react'
import classes from './Payments.module.css'



function Payments(props) {
  return (

    <div className={classes.box}>
        
    <span className={classes.font}>How would you like to pay?</span>
    <div class="container">
  
  <p>DISCLAIMER: The balance shown is not updated in real-time and may not reflect credit for all previous payments and/or adjustments. If you have any questions about this account please contact us.</p>
  <form className={classes.radios}>
    <label class="radio-inline" className={classes.item}>
      <input  type="radio" name="optradio" />Make a Partial Payment
    </label>
    <label class="radio-inline" className={classes.item}>
      <input type="radio" name="optradio"/>Set up a Payment Plan
    </label>
    <label class="radio-inline" className={classes.item}>
      <input type="radio" name="optradio" />Pay Entire Balance
    </label>
  </form>

</div>
    <h2>Total Balance:  $231.09</h2>
    
    
    </div>
  )
}

export default Payments