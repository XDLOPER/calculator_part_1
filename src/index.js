import "./styles.css";

// variables
let workVariable, updateText, updateNumber, tableSize, iconString, reverseArray;

// workstation variables
workVariable = document.getElementById("data");
updateText = "";
iconString = "";
reverseArray = [];
updateNumber = 2;
tableSize = 3;

// functions
const isEven = (number) => {
  return number % updateNumber === 0;
};

const funcNumber = (fori, fora) => {
  return fori + (updateNumber * fori + fora);
};

const switchFunc = (funcNumber) => {
  switch (funcNumber) {
    case 2:
      iconString = "<i class='fa fa-arrow-down'></i>";
      break;
    case 4:
      iconString = "<i class='fa fa-arrow-left'></i>";
      break;
    case 6:
      iconString = "<i class='fa fa-arrow-right'></i>";
      break;
    case 8:
      iconString = "<i class='fa fa-arrow-up'></i>";
      break;

    default:
      break;
  }

  return iconString;
};

// project start

for (let i = 0; i < tableSize; i++) {
  updateText += "<tr>";

  for (let a = 1; a <= tableSize; a++) {
    if (i > 0) {
      if (isEven(funcNumber(i, a)) === true) {
        updateText += `<td>${switchFunc(funcNumber(i, a))} ${funcNumber(
          i,
          a
        )}</td>`;
      } else {
        updateText += `<td>${funcNumber(i, a)}</td>`;
      }
    } else {
      updateText += `<td>${
        isEven(funcNumber(i, a))
          ? switchFunc(funcNumber(i, a)) + funcNumber(i, a)
          : funcNumber(i, a)
      }</td>`;
    }
  }

  updateText += "</tr>,";
}

reverseArray = updateText.split(",").slice(0, 3).reverse();
reverseArray = reverseArray[0] + reverseArray[1] + reverseArray[2];

workVariable.innerHTML = reverseArray;
