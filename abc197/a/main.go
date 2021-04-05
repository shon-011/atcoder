package main

import (
	"fmt"
	"strings"
)

func main() {
	var n string
	fmt.Scanf("%s", &n)
	s := strings.Split(n, "")
	fmt.Printf("%s\n", s[1]+s[2]+s[0])
}