
function validation()
{
    
    var name1 = document.getElementById('name1').value;
	var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var number = document.getElementById('number').value;
   
    

    
       if(name1 == ""){
				document.getElementById('username').innerHTML ="Please fill the username field";
				return false;
			}
			if((name1.length <= 2) || (name1.length > 20)) {
				document.getElementById('username').innerHTML ="Username lenght must be between 2 and 20";
				return false;	
			}  
			if(email == ""){
				document.getElementById('emailid').innerHTML ="Please fill the email idx` field";
				return false;
			}

			if((email.charAt(emails.length-4)!='.') && (email.charAt(emails.length-3)!='.')){
				document.getElementById('emailid').innerHTML ="Invalid Position";
				return false;
			}  
               
             
          if(password == ""){
				document.getElementById('passwords').innerHTML ="Please fill the password field";
				return false;
			}
			if((password.length <= 5) || (password.length > 20)) {
				document.getElementById('passwords').innerHTML ="Passwords lenght must be between  5 and 20";
				return false;	
			}  
          if(number == ""){
				document.getElementById('numbers').innerHTML ="Please fill the mobile NUmber field";
				return false;
			}
			
			if(number.length!=10){
				document.getElementById('numbers').innerHTML ="Mobile Number must be 10 digits only";
				return false;
			}
           
          
			
			
    
    }