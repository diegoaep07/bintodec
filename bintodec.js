//Funcion para llevar el binario bincode a decimal
const binToDec = (bincode) => {
  let reversedBinCodeArr = bincode.split("").reverse();
  let dec = 0;

  for (let i = 0; i < reversedBinCodeArr.length; i++) {
    if (reversedBinCodeArr[i] === "0") {
      dec += 0;
    } else {
      dec += 2 ** i;
    }
  }

  return dec;
};

//Funcion para llevar el decimal decCode a Binario
function decToBin(decCode) {
  let binary = "";

  for (let i = 0; decCode > 0; i++) {
    if (decCode % 2 === 0) {
      binary += "0";
      decCode = decCode / 2;
    } else {
      binary += "1";
      decCode = Math.floor(decCode / 2);
    }
  }

  binary = binary.split("").reverse().join("");

  return binary;
}

exports.binToDec = binToDec;
exports.decToBin = decToBin;

