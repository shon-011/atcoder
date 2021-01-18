function Main(input) {
    n = input.split("\n")[0].split(" ")[0];
    let p = 0;
    for(i=0; i < n; i+=1000 ) {
        p++
    }
    p = p *1000
    console.log(p-n);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
