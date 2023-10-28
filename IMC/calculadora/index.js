// CALCULADORA

function calc(param1 , param2, operacao){
    switch (operacao){
      case '+':
          return param1 + param2;
      case '-':
        return param1 - param2;
      case '/':
        return param1 / param2;
      case '*':
        return param1 * param2;
    }
  }
  
  let x = 10;
  let y = 40;
  let operacao = '+'
  
  console.log(x + operacao + y + " = " + calc(x,y,operacao));
  
  