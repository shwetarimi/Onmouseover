class customer {
      account='13456';
      getdetails=function()
      {
        console.log('account',this.account)
    }
    }
  
  let cust = new customer();
  
  console.log(cust.account);
  cust.getdetails();