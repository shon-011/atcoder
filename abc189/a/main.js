function Main(input) {
    n = input.trim().split("\n")[0].split("")
    if(n[0] == n[1] && n[1] == n[2]) {
        console.log('Won');
    } else {
        console.log('Lost');
    }

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
