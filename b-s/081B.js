function Main(input) {
    const a = Number(input.split("\n")[0])
    let init = input.split("\n")[1].split(' ').map(Number)
    let count = 0
    let flag =true
    
    while(flag) {
        for(let i=0; i < a; i++) {
            if(init[i] % 2 === 0) {
                init[i] = init[i] / 2
                flag = true
                
            } else {
                flag = false
                break
            }
        }

        flag ? count++ : undefined
    }
    console.log(count);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
