/**
 * 
 */
 function sendMessage(){
	  var empty_user = document.forms["user_form"]["username"].value;
	 var empty_email = document.forms["user_form"]["email"].value;
	 if (empty_user == "" && empty_email == "") {
		 alert("Please enter values for username and email!");
		 return false;
	 } else (
		 alert("You have successfully sent your message!")
	 )
	
}