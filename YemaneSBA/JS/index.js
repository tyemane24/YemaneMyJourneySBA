/**
 * 
 */
 
 function required(){
	  var empty_user = document.forms["login_form"]["username"].value;
	 var empty_pass = document.forms["login_form"]["password"].value;
	 if (empty_user == "" && empty_pass == "") {
		 alert("Please enter values for username and password!");
		 return false;
	 } else (
		 alert("You have successfully logged in!")
	 )
	
}
 function required2() {
	 var empty_first = document.forms["create_from"]["email"].value;
	 var empty_last = document.forms["create_form"]["password"].value;
	 if (empty_first == "" && empty_last == "") {
		 alert("Please enter values for all boxes");
		 return false;
	 } else (
		 alert("You have successfully created an account!")
	 )
 }