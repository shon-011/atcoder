package main

import (
	// "bufio"
	"fmt"
	// "os"
	// "strings"
)

// func readLine() string {
// 	sc := bufio.NewScanner(os.Stdin)
// 	sc.Scan()
// 	return sc.Text() 
// }

func main(){
	
	// x := readLine()
	// col := strings.Split(x, " ")
	var s int 
	for i:=0; i <= 4; i++ {
		fmt.Scan(&s)
		if s == 0 {
			fmt.Println(i+1)
		}
	}
}