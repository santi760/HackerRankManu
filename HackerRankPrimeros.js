//Solve Me First
function solveMeFirst(a, b) {
  return a + b;   
}

//Simple Array Sum
let sum = 0;
    for (let index = 0; index < ar.length; index++){
        sum += ar[index];
    }
    return sum;
}
   function simpleArraySum(ar) {
    let sum = 0;
    for (let index = 0; index < ar.length; index++){
        sum += ar[index];
    }
    return sum;
}
console.log(sum);
}

//A Very Big Sum
function aVeryBigSum(ar) {
  let sum = 0;
  for (let index = 0; index < ar.length; index++){
      sum += ar[index];
  }
  return sum;
}


//Diagonal Difference
function diagonalDifference(arr) {
  let sumadiagonal = 0;
  let sumadiagonal2 = 0;
  
  for (let i = 0; i < arr.length; i++){
      sumadiagonal += arr[i][i];
      
  }
  let j;
  for(let k = arr.length - 1, j = 0; k >= 0 && j < arr.length; k--, j++){
      sumadiagonal2 += arr[k][j];
  }
      
  return Math.abs(sumadiagonal - sumadiagonal2);
}

//Plus Minus
function plusMinus(arr) {
    
  const positivos = arr.filter(num => num > 0);
  const negativos = arr.filter(num => num < 0);
  const ceros = arr.filter(num => num === 0);
  
  const ratio1 = positivos.length / arr.length;
  const ratio2 = negativos.length / arr.length;
  const ratio3 = ceros.length / arr.length;
  
  console.log(ratio1);
  console.log(ratio2);
  console.log(ratio3);
}

//StairCase
function staircase(n)  {
  for (let i = 0; i < n; i++) {
    let piso = '';
    for (let j = 1; j < n - i; j++) {
      piso = piso + ' ';
    }

    for (let j = 0; j < i + 1; j++) {
      piso = piso + '#';
    }
    console.log(piso);
  }
}

//Mini-Max Case
function miniMaxSum(arr) {
  let suma = 0;
  let resultados = [];
  for(let i = 0; i < arr.length; i++){
      suma += arr[i];        
  }
  let resultadoFinal = 0;
  for(let j = 0; j < arr.length; j++){
      resultadoFinal = suma - arr[j];
      resultados.push(resultadoFinal);        
  }
  
  console.log(Math.min.apply(null,resultados),Math.max.apply(null,resultados)); 
}

//BirthdayCake Candles
function birthdayCakeCandles(candles) {

  let max = candles.reduce((a, b)=>Math.max(a, b));
  return candles.filter(x => x == max).length

}

//Time Convertion
function timeConversion(s) {
  let ultimosDos = s.substring(8);  
  
  let tiempo = s.substring(0, 8);
  let tiempos = tiempo.split(':');
  
  if(ultimosDos === "PM") {
      if(tiempos[0] !== "12"){
          tiempos[0] = parseInt(tiempos[0]) + 12;
      }
  } else {
      if (tiempos[0] === "12") {
          tiempos[0] = "00";
      }
  }
return tiempos.join(':');
}