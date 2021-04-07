package main
import (
	"fmt"
)

func main() {
	var n,m string
	fmt.Scanf("%s\n%s", &n,&m)
	num := len(n)
	base := m[:num]
	m2 := m[num:]

	if n == base && len(m2) == 1 {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}