function Main(input) {
    n = Number(input.split("\n")[0].split(" ")); 

    if(n%2===0) {
        let one = n / 2
        console.log(one**2);  
    } else {
        let x = (n-1) / 2
      console.log(x * (x+1))
    }

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
