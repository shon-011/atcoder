function Main(input) {
    let n = 0
    
    a = input.split("\n")[0].split('')

    a.forEach(element => {
        element == 1 ? n++ : undefined
    });

    console.log(n)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
