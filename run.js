let val = require("./MiniProjektVal"); // Själva funktionen som gör valet
let info = require("./partier"); // Partierna, blocken och ideologierna som ska användas i valet
val.val(info.partier, info.blockArr, info.ideologiArr); // Valet körs med partierna, blocken och ideologierna som parametrar