export function generateQuestion(pathLength: number) {
  const start: number = Math.floor(Math.random() * 7) + 1;
  let numberPath: number[] = [start];
  let operationPath: string[] = ["start"];
  let laconicOperationPath: string[] = ["start"];
  let value: number = start;
  let rnd: number = 0;
  for (let index = 0; index < pathLength; index++) {
    let prevRnd = rnd;
    rnd = Math.floor(Math.random() * 4);

    while (operationButtons[rnd].operation(value) < 1 && rnd != prevRnd) {
      rnd = Math.floor(Math.random() * 4);
    }
    value = operationButtons[rnd].operation(value);
    operationPath.push(operationButtons[rnd].name);
    laconicOperationPath.push(operationButtons[rnd].label);
    numberPath.push(value);
  }
  let returnObj: basicQuestion = {
    numberPath: numberPath,
    operationPath: operationPath,
    laconicOperationPath: laconicOperationPath,
  };
  if (numberPath[numberPath.length - 1] > 280 || numberPath[numberPath.length - 1] < 12) {
    //maximum
    returnObj = generateQuestion(pathLength);
  }
  return returnObj;
}

const operationButtons: Operation[] = [
  {
    name: "Square",
    label: "▢",
    operation: handleSquare,
  },
  {
    name: "Double",
    label: "×2",
    operation: handleDouble,
  },
  {
    name: "Increment",
    label: "+1",
    operation: handleIncrement,
  },
  {
    name: "Decrement",
    label: "-1",
    operation: handleDecrement,
  },
];

interface Operation {
  name: string;
  label: string;
  operation: (input: number) => number;
}

export interface basicQuestion {
  numberPath: number[];
  operationPath: string[];
  laconicOperationPath: string[];
}

function handleSquare(input: number): number {
  return input * input;
}

function handleDouble(input: number): number {
  return input * 2;
}

function handleIncrement(input: number): number {
  return input + 1;
}

function handleDecrement(input: number): number {
  return input - 1;
}
