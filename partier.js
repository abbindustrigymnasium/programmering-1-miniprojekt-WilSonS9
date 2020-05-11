module.exports = {//I detta objekt finns alla partier samt information om dem som bestämmer slutresultatet
partier: [ //Partierna i valet med deras ideologi, block, minsta antal röster och partiledare, 
           //samt variabler där partiets röster och riksdagsplatser senare skall bestämmas
  {
    parti: "Röda Tjurarna",
    vänster: true,
    block: "Faze Clan",
    min: 3,
    max: 12,
    ledare: "RedBull Tropical",
    röster: 0,
    platser: 0
  },
  {
    parti: "Poggarna",
    vänster: true,
    block: "Faze Clan",
    min: 2,
    max: 8,
    ledare: "Poggers Fish",
    röster: 0,
    platser: 0
  },
  {
    parti: "Fiskarna",
    vänster: false,
    block: "Faze Clan",
    min: 8,
    max: 18,
    ledare: "Fish Poggers",
    röster: 0,
    platser: 0
  },
  {
    parti: "Discordianerna",
    vänster: false,
    block: "Faze Clan",
    min: 3,
    max: 12,
    ledare: "Big Marpin",
    röster: 0,
    platser: 0
  },
  {
    parti: "Weebpartiet",
    vänster: false,
    block: "Fnatic",
    min: 3,
    max: 6,
    ledare: "Hatsune Miku",
    röster: 0,
    platser: 0
  },
  {
    parti: "Teknokraterna",
    vänster: true,
    block: "Fnatic",
    min: 12,
    max: 22,
    ledare: "Mr. Bionicle",
    röster: 0,
    platser: 0
  },
  {
    parti: "Airpodspartiet",
    vänster: false,
    block: "Fnatic",
    min: 12,
    max: 18,
    ledare: "Tim Apple",
    röster: 0,
    platser: 0
  },
  {
    parti: "Katolska Kyrkan",
    vänster: true,
    block: "Inget Block",
    min: 20,
    max: 34,
    ledare: "Jesus Kristus",
    röster: 0,
    platser: 0
  }
],
blockArr: [ //Här finns de olika blocken, med variabler för röster och "riksdagsröster",
            //vilket är antalet röster från partier i blocket över 4%, alltså de som räknas till riksdagsplatser
  {
    block: "Faze Clan",
    röster: 0,
    rRöster: 0
  },
  {
    block: "Fnatic",
    röster: 0,
    rRöster: 0
  },
  {
    block: "Inget Block",
    röster: 0,
    rRöster: 0
  }
],

ideologiArr: [ //Här är de olika ideologierna, vänster och höger
               //Här finns en variabel med alla röster på ideologin samt en bool som bestämmer om ideologin är vänster eller ej
               //Denna bool används i val-funktionen för att matcha de partier som har vänster till samma som ideologin
  {
    ideologi: "Vänster",
    vänster: 1,
    röster: 0
  },
  {
    ideologi: "Höger",
    vänster: 0,
    röster: 0
  }
],
}