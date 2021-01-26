function Main(input) {
    n = input.trim().split("\n")[0].split(' ').map(Number)

    let num = n[0] - n[1]
    console.log(num <=0 ? 'unsafe': 'safe');


}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
