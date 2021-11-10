using System;

/*
    Collatz conjecture

    @author Priyanshu Ranjan (ranjanistic)
*/


namespace CollatzConjecture {
    class Program {
        List<List<Int64>> ranges = new List<List<Int64>>();
        static void Main(string[] args) {
            int number = 0;
            int counter = 0;
            int max = 0;

            Console.WriteLine("Enter positive integral limit: ");
            limit = Convert.ToInt64(Console.ReadLine());

            ranges.Add(new List<Int64>());
            for (Int64 i = 1; i <= limit; i++) {
                ranges.Add(new List<Int64>());
                Resolve(i);
            }

            bool failed = false;
            for (int r = 1; r < ranges.size(); r++) {
                if (ranges[r][ranges[r].size() - 1] != 1) {
                    failed = true;
                    Console.Write("Failed at " + r + ": ");
                    for (int i = 0; i < ranges[r].size(); i++) {
                        Console.Write(ranges[r][i]);
                    }
                    Console.WriteLine("");
                }
            }

            if (!failed) {
                Console.WriteLine("No keys disproving conjecture found.");
            }
            int maxsteps = 0;
            int maxpos = 0;
            for (int r = 1; r < ranges.size(); r++) {
                if (ranges[r].size() > maxsteps) {
                    maxsteps = ranges[r].size();
                    maxpos = r;
                }
            }
            Console.WriteLine("Max steps " + maxsteps + " at " + maxpos);

            int highest = 0;
            int highestpos = 0;
            for (int r = 1; r < ranges.size(); r++) {
                for (int i = 0; i < ranges[r].size(); i++) {
                    if (ranges[r][i] > highest) {
                        highest = ranges[r][i];
                        highestpos = r;
                    }
                }
            }
            Console.WriteLine("Highest step " + highest + " at " + highestpos);

            String yn;
            Console.Write("Print ranges? (y/n): ");
            yn = Console.ReadLine();
            if (yn == 'y' || yn == 'Y'){
                for (int r = 1; r < ranges.size(); r++) {
                    Console.Write(r + ": [");
                    for (int i = 0; i < ranges[r].size(); i++) {
                        Console.Write(ranges[r][i] + ",");
                    }
                    Console.WriteLine("]");
                }
            }
        }
        Int64 Res(Int64 n, Int64 init){
            int x = 0;
            if (n % 2 == 0) {
                x = n / 2;
            } else {
                x = 3 * n + 1;
            }
            ranges.Get(init).Add(x);
            if (x == 1) {
                return x;
            } else {
                return Res(x, init);
            }
        }
        Int64 Resolve(Int64 num){
            return Res(num,num);
        }
    }
}
