#include <iostream>
using namespace std;

int main()
{
	int selection; 
	int number1;
	int number2;

	cout << "Choose desired calculation:\n" << "1: subtraction\n" << "2: addition\n" << "3: multiplication\n" << "4: division\n" << "5: Remainder\n" << "Choose a calculation:";
	cin >> selection;
	cout << "Input first number:";
	cin >> number1;
	cout << "Input second number:";
	cin >> number2;
	
	if (selection == 1)
		cout << number1 << "-" << number2 << " = " << number1 - number2 << endl;
	else if (selection == 2)
		cout << number1 << "+" << number2 << " = " << number1 + number2 << endl;
	else if (selection == 3)
		cout << number1 << "*" << number2 << " = " << number1 * number2 << endl;
	else if (selection == 4)
		cout << number1 << "/" << number2 << " = " << number1 / number2 << endl;
	else 
	cout << number1 + number2 << endl;}	