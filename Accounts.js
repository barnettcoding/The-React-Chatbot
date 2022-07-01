import React from 'react'
import Button from './UI/Button'
import classes from './Accounts.module.css'
function Accounts() {
  return (
    <div className={classes.box}>
        <div className={classes.font} >ACCOUNTS</div>
        <div className= "container">
            <div class="row row-cols-5">
                
                    <div className="col">Acct Number</div>
                    <div className="col">Acct Type</div>
                    <div className="col">Date</div>
                    <div className="col">Amount Due</div>
                    <div className="col">Payment Amount</div>
                </div>
            <hr></hr>           
    
            <div class="row row-cols-5">
                <div className="col">123456</div>
                <div className="col">Methodist Hospital</div>
                <div className="col">06/07/2002</div>
                <div className="col">$1,323</div>
                <input type="number" placeholder="Payment Amount"></input>
            </div>
    
    
            <div class="row row-cols-5">
                <div>129468</div>
                <div>Legal</div>
                <div>06/01/2006</div>
                <div>$1,910</div>
                <input type="number" placeholder="Payment Amount"></input>
            </div>
    
            <div class="row row-cols-5">
                <div>618358</div>
                <div>Community North</div>
                <div>02/01/2009</div>
                <div>$24,001</div>
                <input type="number" placeholder="Payment Amount"></input>
            </div>
    
            <div class="row row-cols-5">
                <div>987654</div>
                <div>St. Vincent Medical</div>
                <div>03/02/2006</div>
                <div>$1,477</div>
                <input type="number" placeholder="Payment Amount"></input>
            </div>
   
            <div class="row row-cols-5">
                <div>99658</div>
                <div>Boston Legal</div>
                <div>04/22/1998</div>
                <div>$5,234</div>
                <input type="number" placeholder="Payment Amount"></input>
            </div>
        </div>
    <Button>Pay Now</Button>
    </div>
  
  )
}

export default Accounts