let totaDeHerois = 5;

const herois = [
  {
    nome: "Ana",
    xp: 6001
  },
  {
    nome: "Bia",
    xp: 900
  },
  {
    nome: "Caio",
    xp: 4800
  },
  {
    nome: "Danilo",
    xp: 15000
  },
  {
    nome: "Ester",
    xp: 9500
  }
];





function calculaNivel(xp) {
  let nivel;
  
  if(xp < 1000) {
    nivel = "Ferro";
  } else if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze"
  } else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata"
  } else if (xp > 6000 && xp <= 7000) {
    nivel = "Ouro"
  } else if (xp > 7000 && xp <= 8000) {
    nivel = "Platina"
  } else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente"
  } else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal"
  } else {
    nivel = "Radiante";
  }

  return nivel;
}

for(let i = 0; i < totaDeHerois ; i++) {
  console.log(`O herói de nome ${herois[i].nome} está no nível ${calculaNivel(herois[i].xp)}`)
}