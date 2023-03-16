using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<Movie> movies = new List<Movie>() { };
        movies.Add(new Movie("Robocop", 102, 1987));
        movies.Add(new Movie("Robocop 2", 117, 1990));
        movies.Add(new Movie("Robocop 3", 104, 1993));

        foreach (var movie in movies)
        {
            Console.Write("Name: " + movie.Name + ", length: " + movie.Length + "min, year: " + movie.Year + "\n\r");
        }
    }
}


[Serializable]
class Movie 
{
	public string Name { get; set; }
	public int Length { get; set; }
	public int Year { get; set; }

	public Movie(string name, int length, int year)
	{
		Name = name;
		Length = length;
		Year = year;
		
	}
}