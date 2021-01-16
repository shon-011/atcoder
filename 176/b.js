function Main(input) {
    n = input.split("\n")[0].split('').map(Number)

    sum = n.reduce( (acc,cur) => acc+cur)
    console.log(sum % 9 == 0 ? 'Yes' : 'No');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
