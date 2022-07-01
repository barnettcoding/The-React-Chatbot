import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';


const customers = {"123-45-6789": {"Name": "John Smith",
"Total Balance": 18221.79, 
"Accounts": [{"Number": "44001003", "Type": "Medical", "Date": "04/21/1998", "Balance": 982.23}, 
{"Number": "44001003", "Type": "Medical", "Date": "01/11/2012", "Balance": 63.14},
{"Number": "44002922", "Type": "Legal", "Date": "07/15/2021", "Balance": 1788.98},
{"Number": "44002585", "Type": "Collections", "Date": "06/17/1989", "Balance": 15387.44}],
"Payment Methods": ["Visa1111", "MC2222", "AmEx3333", "Bank4444"]},

"987-65-4329": {"Name": "Tracy Jones",
"Total Balance": 399.95, 
"Accounts": [{"Number": "1298765", "Type": "Medical", "Date": "07/11/2020", "Balance": 399.95}],
"Payment Methods": ["Visa2398"]},

"456-12-7934": {"Name": "Samuel Adams",
"Total Balance": 945.52, 
"Accounts": [{"Number": "44004685", "Type": "Medical", "Date": "09/01/2017", "Balance": 143.97}, 
{"Number": "18548003", "Type": "Medical", "Date": "01/11/2007", "Balance": 101.55},
{"Number": "44985422", "Type": "Legal", "Date": "10/31/2021", "Balance": 700}],
"Payment Methods": ["Visa3692", "MC1414", "Bank7106"]},

"444-88-1616": {"Name": "Natasha Romanoff",
"Total Balance": 876.14, 
"Accounts": [{"Number": "1995845", "Type": "Medical", "Date": "03/14/2018", "Balance": 765.13}, 
{"Number": "1995866", "Type": "Medical", "Date": "03/17/2018", "Balance": 111.01}],
"Payment Methods": ["Visa7777"]}}


class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        ssNumber: '',
        accountToPay: '',
        paymentMethod: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { ssNumber, accountToPay, paymentMethod } = steps;
  
      this.setState({ ssNumber, accountToPay, paymentMethod });
    }
  
    render() {
      const { ssNumber, accountToPay, paymentMethod } = this.state;
      return (
        <div>Hello</div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
  class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hello! Im your payment pal!',
              trigger: '2',
            },
            {
              id: '3',
              user: true,
              trigger: '4',
              validator: (value) => {
                if (!(value in customers))
                { return 'invalid Social Security Number'}
                return true;
              },
            },
            { 
                id: '4',
              message: 'Account validated!',
              trigger: 'options'
            },
            {
                id: 'options',
                message: 'What would you like to do?',
                trigger: 'show options',
            },
            {   id: 'show options',
                options: [
                { value: 1, label: 'See Balance', trigger: 'show balance' },
                { value: 2, label: 'Make Payment', trigger: 'make payment' },
                { value: 3, label: 'Exit', trigger: 'end' },
              ],
              
            },
            {
              id: '2',
              message: 'Can you give me your social security number so that I can access your account?',
              trigger: '3',
            },
          
              {
                id: 'show balance',
                message: 'Your balance is '+ customers['123-45-6789']['Total Balance'],
                trigger: 'show options',
              },
            
            {
              id: 'make payment',
              options: [{ value: 1, label: 'Pay Total Balance', trigger: 'Payment Method' },
                        { value: 2, label: 'Pay Partial Amount', trigger: 'Pay Partial Amount' }]
            },
       
            
            {
              id: 'Pay Options',
              options: [
                { value: 'all', label: 'Pay on all accounts', trigger: 'Payment Method' },
                { value: 'oneAccount', label: 'Choose an account', trigger: 'Show Accounts' }
              ],
            },
            {
              id: 'Pay Partial Amount',
              message: 'Your total balance is ' + customers['123-45-6789']['Total Balance'] + '\nHow much would you like to pay?',
              trigger: 'Pay Amount',
            },
            {
              id: 'Pay Amount',
              user: true,
              trigger: 'Pay Options',
            },
            {
              id: 'Show Accounts',
              message: 'Type the account number of the account to pay: ' + customers['123-45-6789']['Accounts'],
              trigger: 'Choose Account',
            },
            {
              id: 'Payment Method',
              message: 'Type the last 4 digits of the card you would like to use: ' + customers['123-45-6789']['Payment Methods'],
              trigger: 'Card Choice',
            },

            {
              id: 'Card Choice',
              user: true,
              trigger: 'confirm',
            },
            {
              id: 'Choose Account',
              user: true,
              trigger: 'Payment Method',
            },
            {
              id: 'confirm',
              message: 'Thanks! Your payment was submitted successfully!',
              end: true,
            },
            {
              id: 'end',
              message: 'Thank you for using Payment pal',
              end: true,
            },
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;