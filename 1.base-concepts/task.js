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

  if (!Number(+percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (!Number(+contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (!Number(+amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
    
  // код для задачи №2 писать здесь
  
  return totalAmount;
}
