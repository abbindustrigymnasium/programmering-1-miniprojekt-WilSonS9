const partier = [
    {
    parti: "Gröngölingarna",
    vänster: true,
    block: "Småpartierna",
    min: 3,
    max: 12,
    ledare: "Gustavo Frigolito",
    röster: 0
    },
    {
    parti: "Partikelpartiet",
    vänster: true,
    block: "Småpartierna",
    min: 2,
    max: 8,
    ledare: "Forse Va",
    röster: 1
    },
    {
    parti: "Mälarpartiet",
    vänster: false,
    block: "Småpartierna",
    min: 8,
    max: 18,
    ledare: "Emde Hå",
    röster: 0
    },
    {
    parti: "Sjörövarpartiet",
    vänster: false,
    block: "Småpartierna",
    min: 3,
    max: 12,
    ledare: "Arrr yarrrr",
    röster: 0
    },
    {
    parti: "Extremisterna",
    vänster: false,
    block: "Oljeblocket",
    min: 3,
    max: 6,
    ledare: "Hejdolf Snitler",
    röster: 0
    },
    {
    parti: "Maskinpartiet",
    vänster: true,
    block: "Oljeblocket",
    min: 12,
    max: 22,
    ledare: "Mr. Bionicle",
    röster: 0
    },
    {
    parti: "Framtidspartiet",
    vänster: false,
    block: "Oljeblocket",
    min: 12,
    max: 18,
    ledare: "Andrew Yang",
    röster: 0
    },
    {
    parti: "Allpartiet",
    vänster: true,
    block: "Inget",
    min: 20,
    max: 34,
    ledare: "Jesus Kristus",
    röster: 0
    }
];

let totalRöster = 0;
let befolkning = 0;
let vänsterRöster = 0;
let högerRöster = 0;
let vänsterProcent = 0;
let högerProcent = 0;
let störstaParti = 0;
let störstaProcent = 0;
let minstaParti = 0;
let oljeRöster = 0;
let småRöster = 0;
let oljeProcent = 0;
let småProcent = 0;
let ingaRöster = 0;
let ingaProcent = 0;
let blockRöster = 0;
let störstaBlock = 0;
let störstaIdeologi = 0;
let vänsterStörst = 0;
let idString = "";
let blockString = "";
let newIdString = "";
let newBlockString = "";
let riksdagsRöster = totalRöster;

let blockArr = [
    {
    block: "Oljeblocket",
    röster: oljeRöster
    },
    {
    block: "Småpartierna",
    röster: småRöster
    },
    {
    block: "Inget",
    röster: ingaRöster
    }
];

let ideologiArr = [
    {
    ideologi: "Vänster",
    röster: vänsterRöster
    },
    {
    ideologi: "Höger",
    röster: högerRöster
    }
];

let störstaBlockArr = [];
let störstaIdeologiArr = [];

function räknaRöster(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

for (let i = 0; i < partier.length; i++) {
    befolkning += partier[i].max;
    partier[i].röster += räknaRöster(partier[i].min, partier[i].max);
    totalRöster += partier[i].röster;

    if (partier[i].vänster) {
        vänsterRöster += partier[i].röster;
    } else {
        högerRöster += partier[i].röster;
    }

    if (partier[i].röster > partier[störstaParti].röster) {
        störstaParti = i;
    }

    if (partier[i].block == "Oljeblocket") {
        oljeRöster += partier[i].röster;
    } else if (partier[i].block == "Småpartierna") {
        småRöster += partier[i].röster;
    }

    if (partier[i].röster < partier[minstaParti].röster) {
        minstaParti = i;        
    }

}

for (let i = 0; i < partier.length; i++) {
    let röstProcent = partier[i].röster / totalRöster * 100;
    let rounded = röstProcent.toFixed(2);
    if (röstProcent < 4) {
        
    }

    console.log(partier[i].parti + " fick: " + partier[i].röster + " röster! Detta motsvarar: " + rounded + "% av rösterna!");
}

for (let i = 0; i < blockArr.length; i++) {
    if (blockArr[i].röster > blockArr[störstaBlock].röster) {
        störstaBlock = i;        
    }
}

for (let i = 0; i < ideologiArr.length; i++) {
    if (ideologiArr[i].röster > ideologiArr[störstaIdeologi].röster) {
        störstaIdeologi = i;
    }
}

if (vänsterRöster > högerRöster) {
    vänsterStörst = true;    
} else {
    vänsterStörst = false;
}

for (let i = 0; i < partier.length; i++) {
    if (partier[i].vänster == vänsterStörst) {
        störstaIdeologiArr += i;
    }
    if (partier[i].block == blockArr[störstaBlock].block) {
        störstaBlockArr += i;
    }
    if (partier[i].röster / totalRöster <= 0.04) {
        riksdagsRöster -= partier[i].röster;        
    }
}

blockRöster = oljeRöster + småRöster;
ingaRöster = totalRöster - blockRöster;
oljeProcent = oljeRöster / totalRöster * 100;
småProcent = småRöster / totalRöster * 100;
ingaProcent = ingaRöster / totalRöster * 100;
störstaProcent = partier[störstaParti].röster / totalRöster * 100;
vänsterProcent = vänsterRöster / totalRöster * 100;
högerProcent = högerRöster / totalRöster * 100;
befolkningProcent = totalRöster / befolkning * 100;

console.log(partier[störstaParti].parti + " fick flest röster! De fick: " + partier[störstaParti].röster + " röster! Detta motsvarar: " + störstaProcent.toFixed(2) + "% av rösterna!");
console.log(totalRöster + " röster kastades! Detta motsvarar: " + befolkningProcent.toFixed(2) + "% av befolkningen!");
console.log(vänsterRöster + " människor röstade vänster! Detta motsvarar: " + vänsterProcent.toFixed(2) + "% av rösterna!");
console.log(högerRöster + " människor röstade höger! Detta motsvarar: " + högerProcent.toFixed(2) + "% av rösterna!");
console.log(oljeRöster + " människor röstade på Oljeblocket! Detta motsvarar: " + oljeProcent.toFixed(2) + "% av rösterna!");
console.log(småRöster + " människor röstade på Småpartierna! Detta motsvarar: " + småProcent.toFixed(2) + "% av rösterna!");
console.log(ingaRöster + " människor röstade inte på något block! Detta motsvarar: " + ingaProcent.toFixed(2) + "% av rösterna!");
console.log("");
console.log(partier[störstaParti].ledare + " är mycket nöjd med valresultatet!");
console.log(partier[minstaParti].ledare + " kan ses med tårar i ögonen och verkar väldigt ledsen över att deras parti fått minst stöd!");
console.log(blockString);

for (let i = 0; i < störstaIdeologiArr.length; i++) {
        idString += partier[störstaIdeologiArr[i]].ledare + " och ";
}

newIdString = idString.slice(0, -4);

if (vänsterRöster != högerRöster){
    console.log(newIdString + "är nöjda över att deras ideologi fått störst stöd!");
}

for (let i = 0; i < störstaBlockArr.length; i++) {
        blockString += partier[störstaBlockArr[i]].ledare + " och ";
}

newBlockString = blockString.slice(0, -4);

if (oljeRöster != småRöster && oljeRöster != ingaRöster && småRöster != ingaRöster) {
    console.log(newBlockString + "är nöjda över att deras block fått störst stöd!");
}