using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        await FetchDataFromAPI();
    }

    static async Task FetchDataFromAPI()
    {
        using (HttpClient client = new HttpClient())
        {
            try
            {
                // Replace the URL with the actual API endpoint you want to fetch data from
                string apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

                HttpResponseMessage response = await client.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("API Response:");
                    Console.WriteLine(result);
                }
                else
                {
                    Console.WriteLine($"Error: {response.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }
        }
    }
}
