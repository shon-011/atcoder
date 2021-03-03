function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number)
    const a = n[0]
    const b = n[1]
    const c = n[2]
    const d = n[3]

    if(a+b+c === d || a+d === b+c || a+c === b+d || a+b === c+d || a+b+d === c || a === b+c+d || b === a+c+d) {
        console.log('Yes');
    } else {
        console.log("No");
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
