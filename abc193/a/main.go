package main
import (
	"fmt"
)

func main(){
	var a, b float64
	fmt.Scan(&a, &b)
	p := a - b
	ans := p / a * 100
	fmt.Println(ans)
	
}