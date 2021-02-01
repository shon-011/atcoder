function Main(input) {
    n = Number(input.split('\n')[0])
    let sum = 0;
    for(let i = 1 ; i <= n ; i++) {
        num = input.split('\n')[i].split(' ').map(Number)
        let a = 1/2 * num[0] * (num[0] + 1) 
        let b = 1/2 * num[1] * (num[1] + 1)
        sum += b - (a - num[0])
    }
    console.log(sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
