function validateForm() {
  var errors=[];
  var x = document.forms["myForm"]["Email"].value;
  var y = document.forms["myForm"]["Password"].value;

  if (x == "") 
  {
    errors.push("Email must be filled out");
  }
  if (y == "") 
  {
    errors.push("password must be filled out");  
  }
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
  {  
    errors.push("Please enter a valid e-mail address!");  
  }  
  if(y.length<8)
  { 
    errors.push("password must be of 8 characters ");
  }
  if(y.search(/[a-z]/i)<0)
  {
    errors.push("passsword must contain at least one lower case alphabate");
  }
  if(y.search(/[0-9]/i)<0)
  {
    errors.push("passsword must contain  at least one number");
  }
  if(y.search(/[A-Z]/i)<0)
  {
    errors.push("passsword must contain at least one upper case alphabate");
  }
  if(y.search(/[*&%$#@!*]/i)<0)
  {
    errors.push("passsword must contain at least one special character");
  }
  if(errors.length>0)
  {
    alert(errors.join("\n"));
    return false;
  }
}