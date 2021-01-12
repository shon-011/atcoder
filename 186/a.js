function Main(input) {
    input = input.split("\n")[0].split(" ");

    max = Number(input[0])
    n = Number(input[1])

	console.log(Math.floor(max / n));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
