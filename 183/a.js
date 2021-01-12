function Main(input) {
    
    input < 0 ? input=0 : null

    console.log(input );
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
