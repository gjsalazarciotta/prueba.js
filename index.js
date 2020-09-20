let countDownDate = new countDownDate("jan 01, 2020 00:00:00").getTime();

let tiempo = setInterval(function() {
    let now = new Date().getTime();
    let diferencia = countDownDate - now;
   
}, 1000);

let dias = Math.floor(diferencia/(1000*60*60*24));
let horas = Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60));
let minutos = Math.floor((diferencia % (1000*60*60)) / (1000*60));
let segundos = Math.floor((diferencia % (1000*60)) / 1000);

document.getElementById("cuentaregresiva").innerHTML = "<h3>" + dias + " D " +
                                                       horas + " H " + minutos +
                                                       " M " + segundos + " S " + "<h3>";
if(distancia < 0) {
    clearInterval(tiempo);
    document.getElementById("cuentaregresiva").innerHTML = "<h3> ¡Feliz 2020 para todos! </h3>"; 
}