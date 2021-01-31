function Main(input) {
    inp = input.split("\n")[0].split(" ").map(Number) 
    const N = inp[0] //max
    const M = inp[1] //cafe
    const T = inp[2] //backTime
    let  life = N
    let c = 0
    let now = 0

    for ( let i = 1 ; i <= M ; i++) {
        let x = input.split("\n")[i].split(" ").map(Number) 

        life -= (x[0] - now) 
        if(life===0){
            break
        }
        c = x[1] - x[0]  

        if(c + life > N ) {
            life += N -life
        } else {
            life += c  
        }
        now = x[1]
    }
    
    life - (T - now)>0 ? console.log('Yes') : console.log("No");

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
