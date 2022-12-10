function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.length == arr2.length) && arr1.every((element, index) => element === arr2[index]);
  return result; 
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((el) => el > 0).filter((element) => element % 3 === 0).map((element) => element * 10)

  return resultArr;
}
