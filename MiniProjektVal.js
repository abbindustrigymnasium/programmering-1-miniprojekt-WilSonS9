module.exports = { val: function(partier, blockArr, ideologiArr) { //Denna funktion exporteras som en CommmonJS modul
  

//Här deklareras alla variabler, de flesta är ganska självklara
let totalRöster = 0;
let befolkning = 0;
let störstaParti = 0;
let minstaParti = 0;
let störstaBlock = 0; //Indexet för det största blocket i block-objektet
let störstaIdeologi = 0; //Indexet för den största ideologin i ideologi-objektet
let idString = ""; //En string där alla partiledare som tillhör den största ideologin läggs till, sepparerade med och
let blockString = ""; //Samma som med idString fast med det största blocket

//2 Arrayer med indexna i partier-objektet hos de partier som tillhör det största blocket samt den största ideologin
let störstaBlockArr = [];
let störstaIdeologiArr = [];

//Funktion som räknar ut antalet röster för varje parti med hjälp av min och max-värdena
function räknaRöster(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Ett litet console.log() för att snygga till slutresultatet så att det inte blir ett stort block med text
console.log("");

for (let i = 0; i < partier.length; i++) {
  //Räknar ut befolkningen, röster per parti samt antalet totala röster
  befolkning += partier[i].max;
  partier[i].röster += räknaRöster(partier[i].min, partier[i].max);
  totalRöster += partier[i].röster;

  //Om detta parti har fler röster än det nuvarande största partiet så sätts detta partis index som största parti
  if (partier[i].röster > partier[störstaParti].röster) {
    störstaParti = i;
  }

  //Samma som det som räknar ut största parti fast för minsta parti
  if (partier[i].röster < partier[minstaParti].röster) {
    minstaParti = i;
  }
}

let riksdagsRöster = totalRöster;

for (let i = 0; i < partier.length; i++) {
  //Om detta parti inte fått 4% av rösterna dras deras röster bort ifrån riksdagsRöster, som bestämmer riksdagsplatser
  if (partier[i].röster / totalRöster <= 0.04) {
    riksdagsRöster -= partier[i].röster;
  }
}

for (let i = 0; i < partier.length; i++) {
  if (partier[i].röster / totalRöster >= 0.04) {
    partier[i].platser = (partier[i].röster * 349) / riksdagsRöster;
  }
  let röstProcent = (partier[i].röster / totalRöster) * 100;
  let rounded = röstProcent.toFixed(2);
  console.log(
    partier[i].parti +
      " fick: " +
      partier[i].röster +
      " röster! Detta motsvarar: " +
      rounded +
      "% av rösterna!"
  );
  console.log(
    "Andel riksdagsplatser: " +
      ((partier[i].platser * 100) / 349).toFixed(2) +
      "%!"
  );

  for (let y = 0; y < blockArr.length; y++  ) {
    if (partier[i].block == blockArr[y].block && partier[i].röster / 100 >= 0.04) {
      blockArr[y].rRöster += partier[i].röster;
      blockArr[y].röster += partier[i].röster;
    } else if (partier[i].block == blockArr[y].block) {
      blockArr[y].röster += partier[i].röster;
    }
  }

  for (let x = 0; x < ideologiArr.length; x++) {
    if (partier[i].vänster == ideologiArr[x].vänster) {
      ideologiArr[x].röster += partier[i].röster;
    }
  }
}

console.log("");

for (let i = 0; i < blockArr.length; i++) {
  console.log(blockArr[i].block + 
    " fick: " + 
    blockArr[i].röster + 
  " röster! Detta motsvarar: " + (blockArr[i].röster * 100 / totalRöster).toFixed(2) + 
  "% av rösterna! Blocket får då: " + (blockArr[i].röster * 100 / riksdagsRöster).toFixed(2) + 
  "% av riksdagsplatserna!");

  if (blockArr[i].röster > blockArr[störstaBlock].röster) {
    störstaBlock = i;
  }
}

for (let i = 0; i < ideologiArr.length; i++) {
  console.log(
    ideologiArr[i].ideologi +
      " fick: " +
      ideologiArr[i].röster +
      " röster! Detta motsvarar: " +
      (ideologiArr[i].röster * 100 / totalRöster).toFixed(2) +
      "% av rösterna!"
  );

  if (ideologiArr[i].röster > ideologiArr[störstaIdeologi].röster) {
    störstaIdeologi = i;
  }
}

for (let y = 0; y < partier.length; y++) {
  if (partier[y].vänster == ideologiArr[störstaIdeologi].vänster) {
    störstaIdeologiArr += y;
  }
  if (partier[y].block == blockArr[störstaBlock].block) {
    störstaBlockArr += y;
  }
}

befolkningProcent = (totalRöster / befolkning) * 100;

console.log(
  partier[störstaParti].parti +
    " fick flest röster! De fick: " +
    partier[störstaParti].röster +
    " röster! Detta motsvarar: " +
    (partier[störstaParti].röster * 100 / totalRöster).toFixed(2) +
    "% av rösterna!"
);
console.log(
  totalRöster +
    " röster kastades! Detta motsvarar: " +
    befolkningProcent.toFixed(2) +
    "% av befolkningen!"
);

console.log("");
console.log(
  partier[störstaParti].ledare + " är mycket nöjd med valresultatet!"
);
console.log(
  partier[minstaParti].ledare +
    " kan ses med tårar i ögonen och verkar väldigt ledsen över att deras parti fått minst stöd!"
);
console.log("");

for (let i = 0; i < störstaIdeologiArr.length; i++) {
  idString += partier[störstaIdeologiArr[i]].ledare + " och ";
}


  console.log(
    idString.slice(0, -4) + "är nöjda över att deras ideologi fått störst stöd!"
  );

for (let i = 0; i < störstaBlockArr.length; i++) {
  blockString += partier[störstaBlockArr[i]].ledare + " och ";
}


  console.log(
    blockString.slice(0, -4) + "är nöjda över att deras block fått störst stöd!"
  );
  console.log("");
}}