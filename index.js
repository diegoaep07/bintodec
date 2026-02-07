import { binToDec, decToBin } from './bintodec.js'
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

let i = 0
while(i === 0){
  const rl = readline.createInterface({ input, output })

  let command = await rl.question(`Comandos disponibles:
  btd\tConvierte un string binario(0s y 1s) a Decimal
  dtb\tConvierte un int decimal a Binario
  exit\tTerminar el programa
  \n
  > `)

  if(command === 'btd'){
    let binstr = await rl.question("Binario a Convertir: ")
    console.log(binToDec(binstr))
  }
  else if(command === 'dtb'){
    let decint = Number(await rl.question('Decimal a Convertir: '))
    console.log(decToBin(decint))
  }
  else if(command === 'exit'){
    console.log("Adios...")
    i=1
  }
  else{
    console.log("Comando no reconocido")
  }

  rl.close()
}
