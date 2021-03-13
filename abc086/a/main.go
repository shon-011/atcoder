package main
import (
	"fmt"
)

func main(){
	var a, b int
	var s string
	fmt.Scanf("%d %d", &a, &b)

	ans := a * b % 2
	if ans == 0 {
		s = "Even"
	} else {
		s = "Odd"
	}
	
	fmt.Printf("%s\n", s)
}