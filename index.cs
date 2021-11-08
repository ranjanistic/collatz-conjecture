
/*
    Collatz conjecture

    @author Priyanshu Ranjan (ranjanistic)
*/
using System;

namespace CollatzConjecture {
    class Program {
        static void Main(string[] args) {
            int number = 0;
            int counter = 0;
            int max = 0;

            Console.WriteLine("Enter positive integral limit: ");
            number = Convert.ToInt32(Console.ReadLine());

            while (number != 1) {
                if (number % 2 == 0) {
                    number = number / 2;
                } else {
                    number = number * 3 + 1;
                }
                counter++;
            }

            if (counter > max) {
                max = counter;
            }

            Console.WriteLine("The longest sequence is " + max + " steps.");
        }
    }
}
