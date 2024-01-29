
class BMICalculator {
    calculateBMI(weight: number, height: number): number {
      
        const heightInMeters = height / 100; 
        const bmi = weight / (heightInMeters * heightInMeters);
        return parseFloat(bmi.toFixed(2));
    }

    getCategory(bmi: number): string {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
}

const bmiCalculator = new BMICalculator();

const weight = 70; 
const height = 175; 

const bmiResult = bmiCalculator.calculateBMI(weight, height);
const bmiCategory = bmiCalculator.getCategory(bmiResult);

console.log(`BMI: ${bmiResult}`);
console.log(`Category: ${bmiCategory}`);
