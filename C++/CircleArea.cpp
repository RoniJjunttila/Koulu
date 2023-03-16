#include <iostream>
#include <iomanip>
#include<cmath>

using namespace std;

int main()
{
	double number1;
	
	cout << "Input circle radius:";
	cin >> number1;
	std::cout << std::setprecision(6);
	cout << "Circle area with the given radius: " << M_PI * (number1 * number1) << endl;}