package main
import (
	"fmt"
	"strconv"
)

func main() {
	var r,b,g string
	fmt.Scanf("%s %s %s", &r, &b, &g)
	var rgb int

	rgb, _ = strconv.Atoi(r+b+g)
	if rgb % 4 == 0  {
		fmt.Printf("%s\n", "YES")
	} else {
		fmt.Printf("%s\n", "NO")
	}

	
}