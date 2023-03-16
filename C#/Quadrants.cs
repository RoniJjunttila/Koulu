using System;

class quadrant {

	static void Main(){
		while(true) {
		int y = 0;
		int x = 0;
		Console.WriteLine("Find the quadrant for a point in x-y axis:");
		Console.Write("X coordinate: ");
		x = Convert.ToInt32(Console.ReadLine());
		Console.Write("Y coordinate: ");
		y = Convert.ToInt32(Console.ReadLine());
		
		if(x > 0 && y > 0) {
				Console.WriteLine("The coordinate point (" + x + "," + y + ") is in the First quandrant.");
				break;
		}
		 else if (x < 0 && y > 0){
				Console.WriteLine("The coordinate point (" + x + "," + y + ") is in the Second quandrant.");
				break;
		}
		 else if (x < 0 && y < 0)
        {
                Console.WriteLine("The coordinate point (" + x + "," + y + ") is in the Third quandrant.");
			 	break;
        }
         else if (x > 0 && y < 0)
        {
              	Console.WriteLine("The coordinate point (" + x + "," + y + ") is in the Fourth quandrant.");
			 	break;
        }
         else 
        {
           		 Console.WriteLine("The coordinate point (" + x + "," + y + ") is at the origin.");
			 	break;
        }
	  }
	}
}