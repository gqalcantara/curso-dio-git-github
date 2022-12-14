let n = 3;

function desajustado(n) {
  let currentNumber = n;
  let amountOfOperations = n / 5 + 1;

  let result = [];

  let numbersToDivide = [];
  let numbersToSum = [];
  
  for (let i = 0; i < amountOfOperations; i++) {
    if (currentNumber > 0) {
      let operationResult = currentNumber * (currentNumber - 1);
      if (i != 0) {
        operationResult *= -1;
      }

      if (currentNumber - 2 > 0) numbersToDivide.push(currentNumber - 2);
      if (currentNumber - 3 > 0) numbersToSum.push(currentNumber - 3);
      if(currentNumber == 1 && i == (amountOfOperations-1)) operationResult = -1
      currentNumber -= 4;
      result.push(operationResult);
    }
  }

  for (let i = 0; i < numbersToDivide.length; i++) {
    result[i] = parseInt(result[i]/numbersToDivide[i]);
  }

  let resultadoFinal = 0;

  for (let i = 0; i < result.length; i++) {
    resultadoFinal += result[i];
  }
  for (let i = 0; i < numbersToSum.length; i++) {
    resultadoFinal += numbersToSum[i];
  }

  return resultadoFinal;
}

console.log(desajustado(n));
