function Main(input) {
    x = input.trim().split("\n")[0].split(' ').map(Number)

    let a =x[0]
    let b =x[1]
    let c =x[2]
    let d =x[3]
    let countA = 0
    let countB = 0

    for(let i =1; a>=0; i++) {
        c -= b
        countA++
        if(c<=0 || a<=0) {
            break
        }

        a -= d
        countB++
        if(c<=0 || a<=0) {
            break
        }
        
    }
    console.log(countA>countB ? 'Yes' : 'No');

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
