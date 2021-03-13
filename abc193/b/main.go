package main
import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func readLine() string {
	sc := bufio.NewScanner(os.Stdin)
	sc.Scan()
	return sc.Text() 
}

func main(){
	
	x := readLine()
	col := strings.Split(x, " ")

	fmt.Println(col)
	
}