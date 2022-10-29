"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b**2-4*a*c;

  if (d < 0) {
      arr.push();
  } else if(d == 0) {
    let x1 = -b/(2*a);
    arr.push(x1);
  } else {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 =(-b - Math.sqrt(d) )/(2*a);
    arr.push(x1,x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    //сумма которую необходимо вернуть банку
    let refundAmount = amount - contribution;
    let now = new Date();
    let montTerm = (date.getMonth()) - (now.getMonth()) + (12* (date.getFullYear() - now.getFullYear()));
    //ежемесячная сумма S * (P + (P / (((1 + P)^n) - 1)))
    let p = percent/12/100;
    let monthlySum = refundAmount *(p + (p / (((1 + p)**montTerm)-1)));

    let result = monthlySum * montTerm;
    totalAmount = parseFloat(result.toFixed(2));
    console.log(totalAmount);
     
  }
  // код для задачи №2 писать здесь

  return totalAmount;
}
