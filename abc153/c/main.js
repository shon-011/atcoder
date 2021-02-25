function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number)
    h = input.split("\n")[1].split(" ").map(Number)
    // input = input.trim().split("\n")

    let hp = h.sort((a,b) => a - b)

    for(let i = 0; i < n[1]; i++) {
        hp.pop();
    }

    let sum = 0

    sum = hp.reduce((p,c) => {
        return p + c 
    },0)

    console.log(sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
