using System;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[args.Length];
            for (int i = 0; i < args.Length; i++)
            {if (!int.TryParse(args[i], out arr[i])){}}

            bool sorted = false;
            while (!sorted)
            {
                sorted = true;
                for (int i = 0; i < arr.Length - 1; i++)
                {
                    if (arr[i] > arr[i + 1])
                    {
                        int temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        sorted = false;
                    }
                }
            }

            for (int i = 0; i < arr.Length; i++)
            {
                Console.Write(arr[i] + " ");
            }
        }
    }
}