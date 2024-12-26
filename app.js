const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

let finalHeight=0;
let finalWeight=0;

const button = document.querySelector(".calc-btn");
const result = document.querySelector(".result");
const resultInfo = document.querySelector(".result-info");
const userHeight = document.querySelector("#height");
const userWeight = document.querySelector("#weight");


button.addEventListener("click", handleSubmit);
function handleSubmit(e){
  e.preventDefault();
  const BMIresult = BMICalc(finalHeight, finalWeight);
  console.log(BMIresult);  
  if(BMIresult > 0){
    result.textContent=BMIresult.toFixed(1);
    const category = BMIRange(BMIresult);
    resultInfo.textContent = BMIData[category].name;
    resultInfo.style.color = BMIData[category].color;
  } else {
    result.textContent="WOOPS";
    resultInfo.textContent = "Veuillez entrer correctement les inputs";
  }  
}
//Recuperation des valeurs du formulaire
userWeight.addEventListener("input", handleWeightInput)
function handleWeightInput(e){   
  finalWeight= e.target.value;
}

userHeight.addEventListener("input", handleHeightInput)
function handleHeightInput(e){   
  finalHeight= e.target.value;
}

//recuperation de la categorie
function BMIRange(BMIresult){
  if(BMIresult>=BMIData[5].range){
    return 5;
  }
  for (i=0; i<BMIData.length;i++){
    if (BMIresult>=BMIData[i].range[0] && BMIresult<BMIData[i].range[1]){
      return i;     
    } 
  }
  return -1;
}

// IMC = poids en kg / taille² en m
function BMICalc(height, weight){
  if (isWeight(weight) && isHeight(height)) {
    return weight / Math.pow(cmToMeters(height),2);
  }else{
    return -1;
  }
}

function isWeight(weight){
  const weightNumber = parseFloat(weight);   
  if ((weightNumber <= 200) && (weightNumber >= 20)){
    return true;
  } else {
    return false;
  }  
}

function isHeight(height){
  const heightNumber = parseFloat(height)
  if ((heightNumber <= 220) && (heightNumber >= 100)){
    return true;
  } else {
    return false;
  }
}

function cmToMeters(height){
  return height/100;
}

