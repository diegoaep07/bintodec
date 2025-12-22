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
  let div = decCode;

  for (let i = 0; div > 0; i++) {
    if (div % 2 === 0) {
      binary += "0";
      div = div / 2;
    } else {
      binary += "1";
      div = Math.floor(div / 2);
    }
  }

  binary = binary.split("").reverse().join("");

  return binary;
}

exports.binToDec = binToDec;
exports.decToBin = decToBin;

