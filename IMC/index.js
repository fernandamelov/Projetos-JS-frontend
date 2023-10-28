function calcIMC(peso, altura, sexo){

    let IMC = peso/(altura^2);
  
    console.log("IMC: " + IMC);
  
    if(sexo == "feminino"){
  
      if(IMC < 19.1){
        console.log("Abaixo do peso");
      }else if(IMC >= 19.1 && IMC < 25.8 ){
        console.log("Peso normal");
      }else if(IMC >= 25.8 && IMC < 27.3){
        console.log("Marginalmente acima do peso");
      }else if(IMC >= 27.3 && IMC < 32.3){
        console.log("Acima do peso ideal");
      }else if (IMC > 32.3){
        console.log("Obesa");
      }
      
    }else{
  
      if(IMC < 20.7){
        console.log("Peso Normal");
      }else if(IMC >= 20.7 && IMC < 26.4 ){
        console.log("Marginalmente acima do peso");
      }else if(IMC >= 26.4 && IMC < 27.8){
        console.log("Acima do peso ideal");
      }else if(IMC >= 27.8 && IMC < 31.1){
        console.log("Acima do peso ideal");
      }else if (IMC > 31.1){
        console.log("Obesa");
      }
      
    }
    
  }
  
  var sexo = "feminino";
  var peso = 62;
  var altura = 1.66
  
  console.log(`sexo: ${sexo} peso: ${peso} altura: ${altura}`);
  calcIMC(peso, altura, sexo);