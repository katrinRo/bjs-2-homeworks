// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0]; 
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  let result = sum/arr.length;
  avg = parseFloat(result.toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
  let resultWorker = func(arrOfArr[i]);
   if (resultWorker > max) {
    max = resultWorker;
   }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  };
  return Math.abs(max-min);
}
