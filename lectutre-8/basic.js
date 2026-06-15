let n = 5;
let totalRows = 2 * n - 1;

for (let i = 1; i <= totalRows; i++) {

 
  let mainNumber;
  if (i <= n) {
    mainNumber = i;
  } else {
    mainNumber = 2 * n - i;
  }

 
  let secondNumber = 2 * n - mainNumber;


  let line = "";

  for (let j = 1; j <= mainNumber; j++) {
    if (j % 2 === 1) {
      line += mainNumber + " ";
    } else {
      line += secondNumber + " ";
    }
  }

 
  let gapSize = (n - mainNumber) * 4;
  for (let s = 1; s <= gapSize; s++) {
    line += " ";
  }


  for (let j = 1; j <= mainNumber; j++) {
    if (j % 2 === 1) {
      line += secondNumber + " ";
    } else {
      line += mainNumber + " ";
    }
  }

  
  console.log(line);
}