#include <iostream>
using namespace std;
 
int main()
{
	int n;
    long double factorial = 1.0;
	
	cout << "Input an integer:";
	cin >> n;
	if (n < 0)
		cout << "Error";
	 else 
        for(int i = 1; i <= n; ++i) 
            factorial *= i;	
	cout << "The factorial of number " << n << " is " << factorial << endl;
  
}