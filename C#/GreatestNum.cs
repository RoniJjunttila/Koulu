using System; 

class compaire {

	static void Main(){
	int first = 0;
	int second = 0;
	Console.Write($"Please input the first number: {Environment.NewLine}");
	first = Convert.ToInt32(Console.ReadLine());
	Console.Write($"Please input the second number: {Environment.NewLine}");
	second = Convert.ToInt32(Console.ReadLine());
	if(first == second) {Console.WriteLine("Numbers are equal.");}
	else if (first > second) {Console.WriteLine("Number 1 is greater than number 2.");}
	else {Console.WriteLine("Number 2 is greater than number 1.");}
	}
}