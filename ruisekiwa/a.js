const hoge = [1,2,3,4,5]

console.log(hoge.reduce((acc,x)=> acc + x),0);

// 累積和
const a = [1,2,3,4,5]
let x=0;
for(let i=0; i<5; i++){
    x +=  hoge[i]
    a[i] = x
}

console.log(a); //[ 1, 3, 6, 10, 15 ] ->累積和
console.log(a[3] - a[0]);