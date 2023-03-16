#include <iostream>

using namespace std;

int largest(int first, int second, int third);

intsmallest(int first, int second, int third);

int main()

{

  int number1, number2, number3, largestnumber,smallestnumber;

  cout << "Input the first integer";

  cin >> number1;

  cout << "Input the second integer:";

  cin >> number2;

  cout << "Input the third integer:";

  cin >> number3;

  largestnumber = largest(number1, number2, number3);

 smallestnumber =smallest(number1, number2, number3);

  cout << "The largest number was " << largestnumber;

  cout << " and the smallest " <<smallestnumber << "." << endl;
  }

int smallest(int first, int second, int third) 
{
	if(first < second && first < third)
		return first;
	else if (second < first && second < third) 
	   return second;
	else
	   return third;
}

int largest(int first, int second, int third) 
{
	if(first > second && first > third)
		return first;
	else if (second > first && second > third) 
	   return second;
	else
	   return third;
}