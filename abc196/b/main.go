package main

import (
	"fmt"
	"strings"
)

func main() {
	var n string
	fmt.Scanf("%s", &n)
	ans := strings.Split(n, ".")
	fmt.Printf("%s\n", ans[0])
}