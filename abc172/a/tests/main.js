function Main(input) {
    n = Number(input.trim().split("\n")[0])
    const sum = n + n **2 + n **3
    console.log(sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
