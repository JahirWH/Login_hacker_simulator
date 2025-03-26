window.onload = function() {

visor=document.getElementById("reloj"); //localizar pantalla del reloj
//asociar eventos a botones: al pulsar el botón se activa su función.
document.cron.boton1.onclick = activo; 
document.cron.boton2.onclick = pausa;
document.cron.boton1.disabled=false;
document.cron.boton2.disabled=true;
//variables de inicio:
var marcha=0; //control del temporizador
var cro=0; //estado inicial del cronómetro.

}

 window.addEventListener("load",function(){
   document.getElementById("lo").classList.toggle("loading2")
});




// obtener ip
    document.addEventListener("DOMContentLoaded", function() {
                                                let randomNumero = (Math.random() * (999.999 - 1.000) + 1.000).toFixed(3);
                                                document.getElementById("randomNum").innerText = randomNumero;
                                            });

function get_ip(obj){
    document.getElementById('ipId').innerHTML = obj.ip;
    document.getElementById('ipId2').innerHTML = obj.ip;
    document.getElementById('ipId3').innerHTML = obj.ip;

}


// boton de la camara 
   function showcam1(){
    
    var d1 = document.getElementById("back1");
    var d2 = document.getElementById("back2");
    var d3 = document.getElementById("back3");
    var d4 = document.getElementById("back4");

  



    if (1<4) {
        d1.classList.toggle("back1");
        d2.classList.toggle("back2");
        d3.classList.toggle("back3");
        d4.classList.toggle("back4");
      
   

    }
}

//more othoer
function showcam2(){
   

      var d5 = document.getElementById("back1");
    var d6 = document.getElementById("back2");
    var d7 = document.getElementById("back3");
    var d8 = document.getElementById("back4");



    if (2<5) {
        d5.classList.toggle("back5");
        d6.classList.toggle("back6");
        d7.classList.toggle("back7");
        d8.classList.toggle("back8");
     
    }
 }
//other here

function showcam3(){


      

    var d9 = document.getElementById("back1");
    var d10 = document.getElementById("back2");
    var d11 = document.getElementById("back3");
    var d12 = document.getElementById("back4");


    

    if (2<5) {
        

        d9.classList.toggle("back9");
        d10.classList.toggle("back10");
        d11.classList.toggle("back11");
        d12.classList.toggle("back12");


       
    }
 }
// other i here

function showcam4(){
   
 

    var d13 = document.getElementById("back1");
    var d14 = document.getElementById("back2");
    var d15 = document.getElementById("back3");
    var d16 = document.getElementById("back4");


    if (2<5) {
        

    
        
        d13.classList.toggle("back13");
        d14.classList.toggle("back14");
        d15.classList.toggle("back15");
        d16.classList.toggle("back16");

      
    }
 }

 //4

 function showcam5(){

    var d17 = document.getElementById("back1");
    var d18 = document.getElementById("back2");
    var d19 = document.getElementById("back3");
    var d20 = document.getElementById("back4");


    if (2<5) {
        

 
        d17.classList.toggle("back17");
        d18.classList.toggle("back18");
        d19.classList.toggle("back19");
        d20.classList.toggle("back20");

        
    }
 }
 //56

  function showcam6(){
 
 

    var d21 = document.getElementById("back1");
    var d22 = document.getElementById("back2");
    var d23 = document.getElementById("back3");
    var d24 = document.getElementById("back4");

    if (2<5) {
        

 
        d21.classList.toggle("back21");
        d22.classList.toggle("back22");
        d23.classList.toggle("back23");
        d24.classList.toggle("back24");
    }
 }
// closeee

function close_cam(){

if (2<6) { 
    
     document.getElementById("back1").classList.remove();
     document.getElementById("back2").classList.remove();
     document.getElementById("back3").classList.remove();
     document.getElementById("back4").classList.remove();
    
}

}










// camera

function camara() {


    var x = document.getElementById("show");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    var elemento = document.getElementsByClassName("cameras_img");
for(var i = 0; i < elemento.length; i++)
    elemento[i].className += " flex";


}

// mostrar y ocultar overflo

function overflow() {
    let pr = document.getElementById("div_img1");

    if (1<3) {
        pr.classList.add("div_img2");
    }




    var t = document.getElementById("t");
    if (t.style.display === "none") {
        t.style.display = "flex";
    }else {
        t.style.display = 'none';
    }
}
// muestra y esconde sisi


function link() {
    var c = document.getElementById("modal");
    if (c.style.display === "none") {
        c.style.display = "block";
    }else {
        c.style.display = 'none';
    }
}






// define numero random en orden

var n = 29;
var arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
}

arr.sort(() => Math.random() > 0.9 ? 1 : -1);


var loteria = arr.slice(0 , 5);


// generador de numeros aleatorio

var cantidadNumeros = 19;
var myArray = []
while(myArray.length < 1 ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=18;i<myArray.length;i++){
    if(myArray [i] > numeroAleatorio){
        existe = true;
        break;
    }
}
if(!existe){
    myArray[myArray.length] = numeroAleatorio;
}

}




// ocultar 

    function acess() {
        var a = document.getElementById("ro");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
            return;
        }
    }


// acesso

function send(event){

    event.preventDefault();
    let usuario = document.getElementById("user").value;
    let contraseña = document.getElementById("pas").value;
    let alerta = document.getElementById("negado");
      let s = document.getElementById("sec");
      let intro = document.getElementById("int");
      let cocolate;
      let ver;
      let close = document.getElementById('ro');


    if (usuario == "777" && contraseña == "t") {
        intro.style.display = "block";
        close.style.display = 'none';
        ver = setTimeout(verd,5000);
        return false;
        
    }else {

        alerta.style.display = "block";
        chocolate = setTimeout(redirec,3000);
       
    
    }
    function verd(){
        if (true) {
         s.style.visibility = "visible";
    }
     }
    function redirec(){
         window.location.href = "http://localhost/dashboard/login/";
    }
}

function close_sec(){
    let t = document.getElementById("sec");
     let intro = document.getElementById("int");

    if (1<2) {
        t.style.visibility = "hidden";
         intro.style.display = "none";
    }
}
// redirecionar

// multiplication
function operacion(){
let operation = prompt("What operation 1.sum 2.subtraction 3.division 4.multiplication");

if (operation == 1 ) {
     let p1 = parseInt(prompt("firt number"));
    let p2 = parseInt( prompt("second number"));
    // let  p = parseInt(p1,p2);
    var result = p1 +  p2;
    alert("The operation is : "+ result );
}
if (operation == 2) {
    let p1 = parseInt(prompt("firt number"));
    let p2 = parseInt( prompt("second number"));
    var result = p1 -  p2;
    alert("The operation is : " + result);
}
if (operation == 3) {
    let p1 = parseInt(prompt("firt number"));
    let p2 = parseInt( prompt("second number"));
    var result = p1 /  p2;
    alert("The operation is : " + result);
}
if (operation == 4) {
    let p1 = parseInt(prompt("firt number"));
    let p2 = parseInt( prompt("second number"));
    var result = p1 *  p2;
    alert("The operation is :  " + result);
}else {
    alert("error writing the number");
}
}


// The new proyect
// other close overflow

