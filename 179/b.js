function Main(input) {
    inp = input.split("\n")[0].split(" ")
    let x = 0; 
    for(let i = 0; i<inp; i++){
        nums = input.split("\n")[i+1].split(" ").map(Number)
        nums[0] === nums[1] ? x += 1 : x = 0
        if(x >= 3){
            break;
        }
    }
    console.log( x >= 3 ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
