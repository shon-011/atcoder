package main

import (
	"fmt"
	"strings"
)

func main() {
	var a string
	fmt.Scanf("%s", &a,)
	s := strings.Split(a, "")	
	if s[0] == s[1] && s[1] == s[2] && s[2] == s[3]{
		fmt.Println("SAME")
	} else {
		fmt.Println("DIFFERENT")
	}
	 
}