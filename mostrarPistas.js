function mostrarPista(){
var pista1 = document.getElementById("pista1");
var pista2 = document.getElementById("pista2");
var pista3 = document.getElementById("pista3");


if (pista1.style.display == "none"){
pista1.style.display = ""
document.getElementById("idPista").innerHTML = "1";
document.getElementById("pista1").innerHTML = b64DecodeUnicode(document.getElementById("pista1").textContent); 
}
else if(pista2.style.display == "none"){
pista2.style.display = ""
document.getElementById("idPista").innerHTML = "2"; 
document.getElementById("pista2").innerHTML = b64DecodeUnicode(document.getElementById("pista2").textContent); 
}
else if(pista3.style.display == "none"){
pista3.style.display = ""
document.getElementById("idPista").innerHTML = "3";
document.getElementById("pista3").innerHTML = b64DecodeUnicode(document.getElementById("pista3").textContent); 
}
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

