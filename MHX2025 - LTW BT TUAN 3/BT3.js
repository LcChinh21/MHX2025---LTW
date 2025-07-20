const prompt = require('prompt-sync')();
// install prompt-sync de nhap tu ban phim
var a = [];
var n = prompt("Nhap so pham tu: ");
n = parseInt(n);
var max = Number.MIN_SAFE_INTEGER; 
var b = [];

for(let i = 0; i < n; i++){
    let x = prompt("Nhap phan tu thu " + (i + 1) + ": ");
    a.push(Number(x));
    if(a[i] > max) max = a[i];
    if(a[i] > 0) b.push(a[i]);
}

console.log("CAC SO CHAN TRONG MANG: ");
for(let i = 0; i < n; i++){
    if(a[i] % 2 === 0) console.log(a[i] + " ");
}

console.log("SO LON NHAT TRONG MANG: " + max);

console.log("MANG MOI CHUA CAC SO > 0: ");
for(let i = 0; i < b.length; i++){
    console.log(b[i] + " ");
}