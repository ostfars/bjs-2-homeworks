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

  // let parameters = [percent, contribution, amount, date];
  // for (let i = 0; i < parameters.length; i++) {
  //   let parameter
  //   if (Number(parameters[i] == NaN)) {
  //     switch (parameters[i]) {
  //       case percent:
  //         parameter = 'Процентная ставка'
          
  //         break
      
  //     }  
      
  //   }
  // }

  // код для задачи №2 писать здесь

  return totalAmount;
}
