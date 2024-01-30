#include <iostream>
#include <cmath>

using namespace std;

// Function to calculate BMI
double calculateBMI(double weight, double height) {
    return weight / pow(height, 2);
}

int main() {
    // Input weight in kilograms and height in meters
    double weight, height;

    cout << "Enter weight in kilograms: ";
    cin >> weight;

    cout << "Enter height in meters: ";
    cin >> height;

    // Calculate BMI
    double bmi = calculateBMI(weight, height);

    // Display the result
    cout << "BMI: " << bmi << endl;

    // Interpretation of BMI categories
    if (bmi < 18.5) {
        cout << "Underweight" << endl;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        cout << "Normal weight" << endl;
    } else if (bmi >= 25 && bmi < 29.9) {
        cout << "Overweight" << endl;
    } else {
        cout << "Obese" << endl;
    }

    return 0;
}
