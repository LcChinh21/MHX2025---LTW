var a = [];
var n = prompt("Nhap so pham tu: ");
n = parseInt(n);
var max = 0;
var b = [];

for(let i = 0; i < n; i++){
    var x = prompt();
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
for(let i = 0; i < b.size; i++){
    console.log(b[i] + " ");
}