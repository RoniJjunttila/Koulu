#include <iostream>
using namespace std;

int main()
{
	char number1;
	int number2;
 
	cout << "Do you drink coffee or tea? (k/t) ";
	cin >> number1;
	cout << "With how many cubes of sugar? ";
	cin >> number2;
		if (number1 == 'c' && number2 > 0)
			cout << "Coffee certainly is invigorating!" << endl;
	
		else if (number1 == 'c' && number2 >= 3 && number2 < 3)
			cout << "Well, coffee can taste pretty intense..." << endl;
	
		else if (number1 == 't' && number2 >= 0 && number2 < 3)
			cout << "Tea can have a soothing effect!" << endl;
	
		else if (number1 == 't' && number2 >= 3)
			cout << "Guess you enjoy your tea overly sweet?" << endl;
	
		else
			cout << "An error occurred in the program!" << endl;}