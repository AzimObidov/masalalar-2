document.getElementById("javob").onclick = function(){
// 1

    // let a = 5;
    // let b = 2.35;
    // const y = - ( 8 / 2 ) * ( ( a * a ) + ( b * b ) );




// 2

//     let a = 6.84;
//     let b = 3.22;
//     let c = 4;
//     let d = 1;
//     const y = ( ( ( a + b)  / (c  + d  ) ) * 2 ) + ( b * b )




// 3

//     let a = 5.95;
//     let b = 10;
//     let c = 3.6;
//     let d = 3;
//     const y = 2 * ( ( a ** d ) + ((( 4 * c ) ** 2 ) ) )



// 4

//     let a = 2.6;
//     let b = 56.6;
//     let c = 35;
//     let d = 20.3;
//     const y = - ( 1 / ( a ** 2 ) ) * ( ( 8 / 10 ) ** 3 ) * ( ( c + d ) ** 2 )



// 5

//     let a = -6;
//     let b = 1.64;
//     let c = 0.16;
//     let d = 0.8;
//     const y = ( ( ( a / b ) * 1 ) / ( c / ( d - 1 ) ) ) ** 2




// 6
//     let a = 25;
//     let b = 1.64;
//     let c = 0.16;
//     let d = 0.8;
//     const y = ( ( a + b ) / ( c + ( d / ( a + c ) ) ) )


// 7
// let a = 25
// let b = 8
// let c = 12.5
// const p = ( ( a + b + c ) ** 2 ) - ( ( a - b - c ) ** 2 )
// const y = Math.sqrt(p)


// 8
// let a = 0.6
// let b = 0.5
// let c = 6
// const y = ( ( a ** 2 ) + ( b ** 2 ) + ( c ** 2 ) ) / ( a * b * c )


// 9
// let a = 0.3
// let b = 2.8
// let c = 4.5
// let d = 1.35
// const y = a * ( ( d ** 3 ) / 3 ) + b * ( ( c ** 2 ) / 2 )


// 10
// let a = 0.3
// let b = 2.8
// let c = 4.5
// let d = 1.35
// const y = Math.abs( ( a / b ) - ( b / c ) ) + Math.pow( a + c , 1/4)
document.getElementById("div").innerText = `Natija=  ${y}`;
}


// 40-1 !!!!!!!!!!!!!!!!!!!!
// function checkOrder(a) {
//     if ( a >= 0 , a < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }!!!!!!!!!!!!!!!!!!!!!!!!

// let a = prompt('a qiymatni kiriting');

// let resultElement = document.getElementById("div");
// if (checkOrder(a)) {
//     resultElement.textContent = "+";
// } else {
//     resultElement.textContent = "-";
// }



// 40-6
// function checkOrder(a, b, c) {
//     if (a <= b && b <= c) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let a = prompt('a qiymatni kiriting');
// let b = prompt('b qiymatni kiriting');
// let c = prompt('c qiymatni kiriting');

// let resultElement = document.getElementById("div");
// if (checkOrder(a, b, c)) {
//     resultElement.textContent = "to'g'ri";
// } else {
//     resultElement.textContent = "noto'g'ri";
// }


// 40-5
// function checkOrder(a, b) {
//     if ( a >= 0 , b < -2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let a = prompt('a qiymatni kiriting');
// let b = prompt('b qiymatni kiriting');

// let resultElement = document.getElementById("div");
// if (checkOrder(a, b)) {
//     resultElement.textContent = "to'g'ri";
// } else {
//     resultElement.textContent = "noto'g'ri";
// }


// 40-7
// function checkOrder(a, b, c) {
//     if (a <= b && b <= c) {
//         return true;
//     } else {
//         return false;
//     }
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseFloat(prompt('a qiymatni kiriting'));
//     let b = parseFloat(prompt('b qiymatni kiriting'));
//     let c = parseFloat(prompt('c qiymatni kiriting'));

//     let resultElement = document.getElementById("div");
//     if (checkOrder(a, b, c)) {
//         resultElement.textContent = "to'g'ri";
//     } else {
//         resultElement.textContent = "noto'g'ri";
//     }
// }



// 40-8
// document.getElementById("javob").onclick = function() {
//     let number = parseInt(prompt('Sonni kiriting:'));
//     let resultElement = document.getElementById("div");

//     if (isEven(number)) {
//         resultElement.textContent = " juft son.";
//     } else {
//         resultElement.textContent = " toq son.";
//     }
// }

// function isEven(n) {
//     return n % 2 === 0;
// }


// 40-9
// function isEven(n) {
//     return n % 2 === 0;
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseInt(prompt('a qiymatini kiriting'));
//     let b = parseInt(prompt('b qiymatini kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = isEven(a) ? `a juft son.` : `a toq son.`;
//     let w = isEven(b) ? `b juft son.` : `b toq son.`;

//     resultElement.textContent = `${q} ${w}`;
// }


// 40-10
// function isEven(n) {
//     return n % 2 === 0;
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseInt(prompt('a qiymatini kiriting'));
//     let b = parseInt(prompt('b qiymatini kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = isEven(a) ? `` : `a toq son.`;
//     let w = isEven(b) ? `` : `b toq son.`;

//     resultElement.textContent = `${q} ${w}`;
// }


// 40-11
// function isEven(n) {
//     return n % 2 === 0;
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseInt(prompt('a qiymatini kiriting'));
//     let b = parseInt(prompt('b qiymatini kiriting'));

//     let resultElement = document.getElementById("div");

//     if (n(a) && n(b)) {
//         resultElement.textContent = "juft";
//     } else if (!n(a) && !n(b)) {
//         resultElement.textContent = "toq";
//     } else {
//         resultElement.textContent = "xato";
//     }
// }


// 40-12
// function checkSign(n) {
//     if (n > 0) {
//         return "musbat";
//     } else if (n < 0) {
//         return "manfiy";
//     } else {
//         return "nol";
//     }
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseFloat(prompt('a qiymatni kiriting'));
//     let b = parseFloat(prompt('b qiymatni kiriting'));
//     let c = parseFloat(prompt('c qiymatni kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = `a = ${a} soni ${checkSign(a)}`;
//     let w = `b = ${b} soni ${checkSign(b)}`;
//     let e = `c = ${c} soni ${checkSign(c)}`;

//     resultElement.textContent = `${q}, ${w}, ${e}`;
// }


// 40-13
// function checkSign(n) {
//     if (n > 0) {
//         return "+ dan";
//     } else if (n < 0) {
//         return "manfiy";
//     } else {
//         return " 0 ";
//     }
// }

// document.getElementById("javob").onclick = function() {

//     let a = parseFloat(prompt('a qiymatni kiriting'));
//     let b = parseFloat(prompt('b qiymatni kiriting'));
//     let c = parseFloat(prompt('c qiymatni kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = `a = ${a} soni ${checkSign(a)}`;
//     let w = `b = ${b} soni ${checkSign(b)}`;
//     let e = `c = ${c} soni ${checkSign(c)}`;

//     resultElement.textContent = `${q}, ${w}, ${e}`;
// }


// 40-14
// function checkSign(n) {
//     if (n > 0) {
//         return "musbat";
//     } else if (n < 0) {
//         return "manfiy";
//     } else {
//         return "nol";
//     }
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseFloat(prompt('a qiymatni kiriting'));
//     let b = parseFloat(prompt('b qiymatni kiriting'));
//     let c = parseFloat(prompt('c qiymatni kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = `a = ${a} soni ${checkSign(a)}`;
//     let w = `b = ${b} soni ${checkSign(b)}`;
//     let e = `c = ${c} soni ${checkSign(c)}`;

//     resultElement.textContent = `${q}, ${w}, ${e}`;
// }


// 40-15
// !!!!!!


// 40-16
// function isTwoDigitPositive(n) {
//     return n >= 10 && n <= 99;
// }

// function n(n) {
//     return n % 2 === 0;
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseInt(prompt('Birinchi ikki xonali musbat sonni kiriting'));
//     let b = parseInt(prompt('Ikkinchi ikki xonali musbat sonni kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = isTwoDigitPositive(a) ? (n(a) ? `${a} juft son.` : `${a} toq son.`) : `${a} ikki xonali musbat son emas.`;
//     let w = isTwoDigitPositive(b) ? (n(b) ? `${b} juft son.` : `${b} toq son.`) : `${b} ikki xonali musbat son emas.`;

//     resultElement.textContent = `${q} ${w}`;
// }


// 40-17
// function isTwoDigitPositive(n) {
//     return n >= 99 && n <= 999;
// }

// function n(n) {
//     return n % 2 === 0;
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseInt(prompt('Birinchi 3 xonali musbat sonni kiriting'));
//     let b = parseInt(prompt('Ikkinchi 3 xonali musbat sonni kiriting'));

//     let resultElement = document.getElementById("div");

//     let q = isTwoDigitPositive(a) ? (n(a) ? `${a} juft son.` : `${a} toq son.`) : `${a} ikki xonali musbat son emas.`;
//     let w = isTwoDigitPositive(b) ? (n(b) ? `${b} juft son.` : `${b} toq son.`) : `${b} ikki xonali musbat son emas.`;

//     resultElement.textContent = `${q} ${w}`;
// }


// 40-18
// document.getElementById("javob").onclick = function() {
//     let a = parseFloat(prompt('Birinci sonni kiriting'));
//     let b = parseFloat(prompt('Ikkinchi sonni kiriting'));
//     let c = parseFloat(prompt('Uchinchi sonni kiriting'));

//     let resultElement = document.getElementById("div");

//     if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
//         resultElement.textContent = "teng.";
//     } else {
//         resultElement.textContent = "teng emas.";
//     }
// }


// 40-19
// !!!!!!!!


// 40-20
// function getSign(n) {
//     if (n > 0) {
//         return "musbat";
//     } else if (n < 0) {
//         return "manfiy";
//     } else {
//         return "nol";
//     }
// }

// document.getElementById("javob").onclick = function() {
//     let a = parseFloat(prompt('Birinchi sonni kiriting'));
//     let b = parseFloat(prompt('Ikkinchi sonni kiriting'));
//     let c = parseFloat(prompt('Uchinchi sonni kiriting'));

//     let resultElement = document.getElementById("div");

//     let aSign = getSign(a);
//     let bSign = getSign(b);
//     let cSign = getSign(c);

//     if (aSign !== bSign && aSign !== cSign && bSign !== cSign) {
//         resultElement.textContent = `Uchta son har xil: ${aSign}, ${bSign}, ${cSign}.`;
//     } else {
//         resultElement.textContent = "Uchta sonning barchasi har xil emas.";
//     }
// }


// 40-21
// document.getElementById('javob').addEventListener('click', function() {
//     let son = parseInt(prompt("Iltimos, uch xonali son kiriting:"));

//     function uchXonaliSonniAjratish(son) {
//         if (son < 100 || son > 999) {
//             return "Iltimos, uch xonali son kiriting.";
//         }
        
//         let raqamlar = son.toString().split('');
        
//         return `Raqamlar: ${raqamlar.join(', ')}`;
//     }

//     let result = uchXonaliSonniAjratish(son);
//     document.getElementById('div').innerText = result;
// });


// 40-22
// document.getElementById('javob').addEventListener('click', function() {
//     let son = parseInt(prompt("Iltimos, uch xonali son kiriting:"));

//     function uchXonaliSonniAjratish(son) {
//         if (son < 100 || son > 999) {
//             return "Iltimos, uch xonali son kiriting.";
//         }
        
//         let raqamlar = son.toString().split('');
        
//         return `Raqamlar: ${raqamlar.join(', ')}`;
//     }

//     let result = uchXonaliSonniAjratish(son);
//     document.getElementById('div').innerText = result;
// });


