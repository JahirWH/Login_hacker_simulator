 function ver(){

  
     let pas = document.getElementById("user").value;
     let con = document.getElementById("pas").value;
     // let alert = document.getElementById("IDhere");

     if (pas == "1935" && con == "27,32") {
        IDhere.innerHTML= "Redirec... ";
        if (1<3) {
         window.location.href = "/dashboard/login/soctrad";
        }
      return false;
     }
     
    else {

      IDhere.innerHTML= "Password or Username is incorrect";
         return false;
    }
      }
     
      function res(){
        alert("Whats this is the password? :p ");
      }
      
    $('.input').keypress(function (e) {
  if (e.which == 13) {
    $('form#login').submit();
  }
});


    // if (pas !== "t" && con !== "con") {
    //   // alert.innerHTML="Password or Username incorrect ";
    //   IDhere.innerHTML= "Password or Username incorrect ";
    //   return false;
    // }


