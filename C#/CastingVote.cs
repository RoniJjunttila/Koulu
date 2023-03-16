using System; 

class CastVote {

	static void Main() {
		int age = 0;
		Console.Write($"Please input your age: {Environment.NewLine}");
		
		age = Convert.ToInt32(Console.ReadLine());
		if (age > 17) {
		Console.WriteLine("You can cast your vote!");
		} else {}
	}
}