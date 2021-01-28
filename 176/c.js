function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number);
    num = input.split("\n")[1].split(" ").map(Number)
    let box = 0
    for(let i = 0; i < n; i++) {
        if(num[i] > num[i+1]) {
            box += num[i] - num[i+1]
            num[i+1] += num[i] - num[i+1]
        }
        
    }
    console.log(box);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
