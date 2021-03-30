package main

import (
	"fmt"
)

func main() {
	var a, b, c, d int
	fmt.Scanf("%d %d\n%d %d", &a, &b, &c, &d)

	 x := b-1
	 y := c-1
	
	n := x-y
	fmt.Printf("%d\n", n)
}