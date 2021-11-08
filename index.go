/*
 * Collatz conjecture
 * @author Priyanshu Ranjan (ranjanistic)
*/
package main

import (
	"bufio"
	"fmt"
	"os"
)

var ranges [][]int

func res(num int, init int) int {
	var x = 0
	if num%2 != 0 {
		x = num*3 + 1
	} else {
		x = num / 2
	}
	ranges[init] = append(ranges[init], x)
	if x == 1 {
		return 1
	} else {
		return res(x, init)
	}
}

func resolve(n int) int {
	return res(n, n)
}

func main() {
	var limit int
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter positive integral limit: ")
	limt, _ := reader.ReadString('\n')
	fmt.Sscan(limt, &limit)

	ranges = make([][]int, limit+1)
	ranges[0] = []int{}
	for i := 1; i <= limit; i++ {
		resolve(i)
	}
	failed := false
	for r := 1; r < len(ranges); r++ {
		if ranges[r][len(ranges[r])-1] != 1 {
			failed = true
			fmt.Println("Failed at ", r, ": ", ranges[r])
		}
	}
	if !failed {
		fmt.Println("No keys disproving conjecture found.")
	}
	maxsteps := 0
	maxpos := 0
	for r := 1; r < len(ranges); r++ {
		if len(ranges[r]) > maxsteps {
			maxsteps = len(ranges[r])
			maxpos = r
		}
	}
	fmt.Println("Max steps", maxsteps, "at", maxpos)

	highest := 0
	highestpos := 0
	for r := 1; r < len(ranges); r++ {
		for i := 0; i < len(ranges[r]); i++ {
			if ranges[r][i] > highest {
				highest = ranges[r][i]
				highestpos = r
			}
		}
	}
	fmt.Println("Highest step", highest, "at", highestpos)

	var yn string
	fmt.Print("Print ranges? (y/n): ")
	y, _ := reader.ReadString('\n')
	fmt.Sscan(y, &yn)
	if yn == "y" {
		fmt.Println(ranges)
	}
	return
}
