package main
import (
	"fmt"
)

func main() {
	var n,a int
	fmt.Scanf("%d", &n)
	fmt.Scanf("%d", &a)

	over := n % 500
	if over <= a {
		fmt.Printf("%s\n", "Yes")
	} else {
		fmt.Printf("%s\n", "No")
	}


	
}