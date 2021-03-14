package main
import (
	"fmt"
	"strings"
)

func main() {
	var n string
	fmt.Scanf("%s", &n)
	sum := 700

	s := strings.Split(n, "")

	if s[0] == "o" {sum += 100}
	if s[1] == "o" {sum += 100}
	if s[2] == "o" {sum += 100}

	fmt.Printf("%d\n", sum)
}