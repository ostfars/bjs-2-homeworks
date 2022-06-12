"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4*a*c;
  switch(discriminant) {
    case discriminant === 0:
      arr.push(-b/(2*a))
    break;
    case discriminant > 0:
      arr.push((-b + Math.sqrt(d))/(2*a))
      arr.push((-b - Math.sqrt(d))/(2*a))
    break;
    default:

    break;
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
