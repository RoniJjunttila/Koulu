class Calculator {
    add(x: number, y: number): number {
      return x + y;
    }
  
    subtract(x: number, y: number): number {
      return x - y;
    }
  
    multiply(x: number, y: number): number {
      return x * y;
    }
  
    divide(x: number, y: number): number {
      if (y !== 0) {
        return x / y;
      } else {
        throw new Error("Cannot divide by zero.");
      }
    }
  }

  const calculator = new Calculator();
  
  const resultAdd = calculator.add(5, 3);
  console.log(`5 + 3 = ${resultAdd}`);
  
  const resultSubtract = calculator.subtract(8, 2);
  console.log(`8 - 2 = ${resultSubtract}`);
  
  const resultMultiply = calculator.multiply(4, 6);
  console.log(`4 * 6 = ${resultMultiply}`);
  
  try {
    const resultDivide = calculator.divide(10, 2);
    console.log(`10 / 2 = ${resultDivide}`);
  } catch (error) {
    console.error(error.message);
  }
  