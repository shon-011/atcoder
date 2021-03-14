package main
import (
	"fmt"
)

func main() {
	var x,y int
	fmt.Scanf("%d %d", &x, &y) 
	ans := "No"

	for a:=0; a <= (x+1); a++ {
		b := x - a
		if y == 2*a + 4*b {
			ans = "Yes"
		} 
	}

	fmt.Printf("%s\n", ans)
}