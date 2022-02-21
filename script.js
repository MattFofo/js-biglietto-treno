const KmPrice = 0.21;

let userAge = prompt('Età');

let KmRoute = prompt('Km da percorrere');

let element = document.getElementById("ticket-price");



if (userAge < 18) {
    element.innerHTML =  ((KmPrice * KmRoute) - ((KmPrice * KmRoute) * 0.2)).toFixed(2);

}else if (userAge >= 65) {
    element.innerHTML = ((KmPrice * KmRoute) - ((KmPrice * KmRoute) * 0.4)).toFixed(2);

}else if (18 >= userAge < 65) {
    element.innerHTML =  (KmPrice * KmRoute).toFixed(2);
}    
