package main
import (
	"fmt"
	"strings"
)

func main() {
	var n string
	fmt.Scanf("%s", &n)

	date := strings.Split(n, "/")

	date[0] = "2018"

	fmt.Printf("%s/%s/%s\n", date[0], date[1], date[2])
}