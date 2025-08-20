function ver() {
    let papas = document.getElementById("iner"); // Asegúrate de que "iner" es un <p> o <span>
    let pas = document.getElementById("user").value;
    let con = document.getElementById("pas").value;

    if (pas === "0101" && con === "999") {
        papas.textContent = "Redirigiendo...";
        setTimeout(() => {
            window.location.href = "/soctrad";
        }, 1000); // Espera 1 segundo antes de redirigir
    } else {
            window.location.href = "/index2.html";
            

    }
}

     
      // function res(){
      //   alert("Whats this is the password? :p ");
      // }
      



    // if (pas !== "t" && con !== "con") {
    //   // alert.innerHTML="Password or Username incorrect ";
    //   IDhere.innerHTML= "Password or Username incorrect ";
    //   return false;
    // }


// ACTUALIZACIOIN 24/4/25

function muestra_pas() {
  let rig = document.getElementById('pass');
  let fa = document.getElementById('user');

  rig.innerHTML = "user: 0101";
  fa.innerHTML = "password: 999";
}
