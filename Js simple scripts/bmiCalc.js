function bmiCalculator(weight, height) {
  const bmi = (weight/(height**2));
  return bmi;
}

const bmiCalc = bmiCalculator(65, 1.8);
console.log(Math.floor(bmi))
