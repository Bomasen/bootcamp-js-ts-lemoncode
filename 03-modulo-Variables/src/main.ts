interface musicalGroup {
  nombre: string;
  año: number;
  activo: boolean;
  genero: string;
}

let stylesTitle = ("font-size:20px; font-weight:bold;background:green;");

const group1: musicalGroup = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  genero: "🎵 Pop Rock",
};

console.log("%cThe Beatles:",stylesTitle);
console.log(group1);

const group2: musicalGroup = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  genero: "🎸 Rock",
};

console.log("%cQueen:",stylesTitle);
console.log(group2);

const group3: musicalGroup = {
  nombre: "AC/DC",
  año: 1973,
  activo: true,
  genero: "🤘 Hard Rock",
};

console.log("%cAC/DC:",stylesTitle);
console.log(group3);

const group4: musicalGroup = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  genero: "🎼 Clásica",
};

console.log("%cLudwig van Beethoven:",stylesTitle);
console.log(group4);

const group5: musicalGroup = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: "🎸 Rock",
};

console.log("%cThe Rolling Stones:",stylesTitle);
console.log(group5);
