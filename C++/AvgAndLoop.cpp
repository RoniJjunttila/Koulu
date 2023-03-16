#include <iostream>
using namespace std;

int main()
{
	float number1;
	float number2;
	int i = 0;

	cout << "Program calculates the test grade average.\n" << "Finish inputting with a negative number.\n";
	while(i <= 10) {
		cout << "Input grade (4-10) ";
			cin >> number1;	
			if(number1 > 3 && number1 < 11) 
				 (number2 = number2 + number1) && i++;
			else if (number1 < 0)
				break;
				
	}
	cout <<"You inputted " << i  << " grades." << "\n" << "Grade average: " << number2/i << endl;
}
