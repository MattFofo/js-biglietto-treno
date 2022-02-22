const KmPrice = 0.21;

let userAge = prompt('Età');

let KmRoute = prompt('Km da percorrere');

let elementOutput = document.getElementById("ticket-price");

let DiscountMinors = 20 / 100;

let DiscountSeniors = 40 / 100;




if (userAge < 18) {
    elementOutput.innerHTML =  ((KmPrice * KmRoute) - ((KmPrice * KmRoute) * DiscountMinors)).toFixed(2);

}else if (userAge >= 65) {
    elementOutput.innerHTML = ((KmPrice * KmRoute) - ((KmPrice * KmRoute) * DiscountSeniors)).toFixed(2);

}else if (18 >= userAge < 65) {
    elementOutput.innerHTML =  (KmPrice * KmRoute).toFixed(2);
}    
