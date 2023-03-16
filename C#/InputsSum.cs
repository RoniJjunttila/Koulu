using System;

class sumsystem {
	static void Main(){
		int sum = 0;
		int i = 0;
		while(i < 1) {
			i++;
			if(sum < 199){
				Console.Write("Sum is now " + sum + ". " + "Input: ");
				sum = sum + Convert.ToInt32(Console.ReadLine());
				i--;
			} else {
				
				Console.WriteLine("Reached 200. The total was " + sum + ".");
			}	
		}
	}
}