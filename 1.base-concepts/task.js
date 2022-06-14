"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c,
      x1 = (-b + Math.sqrt(d))/(2*a),
      x2 = (-b - Math.sqrt(d))/(2*a);
 
  if (d === 0) {
   arr.push(x1);  
  } else if (d > 0) {
    arr.push(x1, x2)
  }
  
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  // parameters check

  if (!+percent) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (!+contribution && contribution !=0) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (!+amount) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  } else {
  
  // credit calculation

    let body = amount - contribution,
        rate = percent / 100,
        monthlyRate = rate / 12,
        currentDate = new Date();
    
    let term = ((date.getFullYear() - currentDate.getFullYear()) * 12) + (date.getMonth() - currentDate.getMonth());
    
    let monthlyPayment = body * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**term) - 1)));
    
    totalAmount = +(monthlyPayment * term).toFixed(2);
  }

  return totalAmount
}
