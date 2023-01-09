function bmiCalculator(weight, height) {
  const bmi = Math.floor((weight/(height*height)));
  if (bmi<18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi>18.5 && bmi <24.9){
      return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

bmiCalculator(60,2);