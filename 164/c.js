function Main(input) {
    input = input.trim().split("\n")
    input.shift()
    const list = Array.from(new Set(input))
    console.log(list.length);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
