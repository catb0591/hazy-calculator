const calculate = (calculationSteps) => {
  let variable1 = 0
  let operand = NaN
  let variable2 = 0

  const operandArr = ['*', '-', '+', '/']

  for (let i = 0; i < calculationSteps.length; i++) {
    if (calculationSteps[i] >= 0 && variable1 === 0) {
      variable1 = Number(calculationSteps[i])
    }
    else if (operandArr.indexOf(calculationSteps[i]) >= 0) {
      operand = calculationSteps[i]
    }
    else if (calculationSteps[i] >= 0 && variable1 !== 0) {
      variable2 = Number(calculationSteps[i])
    }
  }

  return result(variable1, operand, variable2)
}


const result = (variable1, operand, variable2) => {
  switch (operand) {
    case '+':
      return (variable1 + variable2)
    case '-':
      return (variable1 - variable2)
    case '*':
      return (variable1 * variable2)
    case '/':
      return (variable1 / variable2)
    default: return NaN
  }
}

module.exports = calculate
