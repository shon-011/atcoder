function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number) 
    // input = input.trim().split("\n")
    let count = 0

    for(let i = 1 ; i <= n[1] ; i++ ) {
        nums = input.split("\n")[i].split(' ').map(Number)
        
        cul = Math.sqrt(nums[0]**2 + nums[1]**2)

        if( cul >= n[1]){
            count++
        }
    }
    console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
