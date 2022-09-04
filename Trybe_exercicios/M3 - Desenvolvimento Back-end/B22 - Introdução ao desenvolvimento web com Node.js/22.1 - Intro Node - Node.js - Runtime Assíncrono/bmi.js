const readLine = require('readline-sync');

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;
  
  return bmi;
}

function main() {
  const weightInKg = readLine.questionFloat('What\'s your weight? (kg)')
  const heightInCm = readLine.questionInt('What\'s your height? (cm)')

  const bmi = handleBMI(weightInKg, heightInCm);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();