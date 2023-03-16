using System; 

class selector {

	static void Main(){
		int input = 0;
		Console.Write($"Please select:{Environment.NewLine}");
		Console.Write($"1) Water{Environment.NewLine}");
		Console.Write($"2) Juice{Environment.NewLine}");
		Console.Write($"3) Lemonade{Environment.NewLine}");
		Console.Write($"4) Quit{Environment.NewLine}");
		input = Convert.ToInt32(Console.ReadLine());
		
		switch(input) {
			case 1: 
				Console.WriteLine("You selected Water.");
				break;
			case 2: 
				Console.WriteLine("You selected Juice.");
				break;
			case 3:
				Console.WriteLine("You selected Lemonade.");
				break;
			case 4: 
				Console.WriteLine("Quit!");
				break;
		}
	}
}