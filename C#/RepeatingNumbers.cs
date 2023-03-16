using System;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {

            // Try to parse the command line argument as an integer
            int num = 0;

            // Print out the pattern for the given number of lines
            for (int i = 1; i <= num; i++)
            {
                for (int j = 1; j <= i; j++)
                {
                    Console.WriteLine(j);
                }
                Console.WriteLine();
            }
        }
    }
}
