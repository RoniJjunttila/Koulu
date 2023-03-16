using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
		int input;
		bool flag = true;								 
        while(flag)
        {
			
            Console.WriteLine("\n\r" + "\n\r" + "Movie Watchlog" + $"{Environment.NewLine}==============" + $"{Environment.NewLine}1) Add a Movie" + $"{Environment.NewLine}2) Delete a Movie" + $"{Environment.NewLine}3) Show Report" + $"{Environment.NewLine}4) Load Database" + $"{Environment.NewLine}5) Save Database" + $"{Environment.NewLine}6) Quit");
        	Console.Write("Input: ");
			input = Convert.ToInt32(Console.ReadLine());
			Console.Write("\n\r");
			switch(input) {
		
				case 1:
					addMov();
					break;
				case 2:
					del();
					break;
				case 3: 
					rep();
					break;
				case 4: 
					load();
					break;
				case 5:
					save();
					break;
				case 6:
					flag = false;
					break;
				default:
					Console.WriteLine("Invalid input.");
					break;
			}
		}
    }

 	static void addMov() { Console.WriteLine("Add a Movie"); }
	static void del() { Console.WriteLine("Delete a Movie"); }
	static void rep() { Console.WriteLine("Show Report"); }
	static void load() { Console.WriteLine("Load database"); }
	static void save() { Console.WriteLine("Save database"); }