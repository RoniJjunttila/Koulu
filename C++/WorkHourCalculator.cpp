#include <iostream>
using namespace std;

int main()
{
	float number1;
	float number2;
	int i = 1;
	int loop;
	float array[30];
	
	cout << "The program calculates the total amount of\nwork hours during a given time frame and the average work day length.\nHow many days:\n";
	cin >> loop;
	while(i <= loop) {
		cout << "Input hours of workday " << i << ": ";
			cin >> number1;
				 (number2 = number2 + number1) && i++ && (array[i] = number1);
	}

	cout << "Total work hours: " << number2 << "\n" << "Average work day length: " << number2/(i-1) << "\nInputted hours: "; 
			for(int i = 2; i < loop+2; i++) {
					cout << array[i] << " "; 
	} cout << endl;
	
}