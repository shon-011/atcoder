package main
import (
	"fmt"
	"strings"
)

func main() {
	var n string
	var count int
	fmt.Scanf("%s", &n)
	
	slice := strings.Split(n, "")

	if slice[0] == "1" { count++ }
	if slice[1] == "1" { count++ }
	if slice[2] == "1" { count++ }

	fmt.Printf("%d\n", count)
}