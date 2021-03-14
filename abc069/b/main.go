package main
import (
	"fmt"
	"strings"
)

func main() {
	var n string
	fmt.Scanf("%s", &n)

	w := strings.Split(n, "")
	s := len(w) - 2
	fmt.Printf("%s%d%s\n", w[0], s, w[s+1])
}