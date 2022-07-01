import React from 'react'
// import Modal from './Modal';
import classes from './SchedulePayment.module.css'


const SchedulePayment = (props) => {
  return (
    // <Modal onClose={props.onClose}>
    <div className={classes.box}>
      <div className="d-flex flex-wrap ">
        <div className={classes.spacing}>
            <div class="container">
            <div class="row">   
            <div class="col">         
                <div className={classes.spacing}>
                <div className="input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Pay Frequency</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Pay Weekly</option>
                        <option value="2">Pay Bi-weekly</option>
                        <option value="3">Pay Monthly</option>
                    </select>
                </div>   
                </div>
            </div>  
            <div class="col">             
            <div className={classes.spacing}>
                    <div class="input-group">
                        <label class="input-group-text" for="inputGroupSelect01">Number of Installments</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">12</option>
                            <option value="2">24</option>
                            <option value="3">48</option>
                        </select>
                    </div>
                    </div>

                </div>
                </div> 
                <div class="row">
                    <div class="col">
                    <div className={classes.spacing}>
                    <div class="input-group">
                        <label class="input-group-text" for="amountInput">Amount</label>
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" id="amountInput" aria-label="Amount (to the nearest dollar)"/>
                        <span class="input-group-text">.00</span>
                    </div>
                    <div class="col"></div>
                    </div>
                    </div>
                    
               
                    <div class="col">
                    <form method="post">
                    <div className={classes.spacing}>
                        <div class="form-group"> 
                            <label class="control-label" for="date">Installment Start Date</label>
                                <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
                        </div>
                        </div>
                    </form>
                    </div>
                    </div>
                    <div className={classes.spacing}>
                        <div class="form-group">
                            <select class="custom-select">
                                <label class="control-label">Payment Method</label>
                                <option selected>Select Payment Method</option>
                                <option value="1">Add new payment method</option>
                                <option value="2">Visa ****1111</option>
                                <option value="3">MC ****3232</option>
                                <option value="3">E-check ****2560</option>
                                <option value="3">AmEx ****1599</option>
                            </select>
                        </div>
                        </div>
                        </div>
                        
                        <form class="form-group">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">By checking this box, you acknowledge that you have reviewed, understand, meet and agree to the Online Payment Terms and Conditions</label>
                            </div>
                        </form>
                       
                                <button type="button" class="btn btn-primary ">Save</button>
                               
                                
                                <button type="button" class="btn btn-primary ">Cancel</button>
            
            
            </div>
            </div>
        </div>
        // </Modal>
    
  )
  };

export default SchedulePayment