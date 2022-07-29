
import Carobnjak from "./Carobnjak.js";
import Macevalac from "./Macevalac.js";
import Pauk from './Pauk.js';
import Zmaj from './Zmaj.js';
let dropedWeapon = [];










let macevalac = new Macevalac(["mac", "koplje"], 100);
let carobnjak = new Carobnjak(["carolija"], 150);
let zmaj = new Zmaj(200,5);
let pauk = new Pauk();

Carobnjak.prototype.changeWeapon = macevalac.changeWeapon;
Carobnjak.prototype.getWeapon = macevalac.getWeapon;
Carobnjak.prototype.throWeapon = macevalac.throWeapon;
Pauk.prototype.typeOfAttack = zmaj.typeOfAttack;
Pauk.prototype.typeOfWepon = zmaj.typeOfWepon;

//macevalac event-s
window.addEventListener("click", () => {
  try {
    macevalac.changeWeapon();
  } catch (err) {
    console.log(err);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 71) {
    try {
      macevalac.getWeapon();
    } catch (err) {
      console.log(err);
    }
  }
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 70) {
    try {
      macevalac.throWeapon();
    } catch (err) {
      console.log(err);
    }
  }
});

//carbonjak event-s
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    try {
      carobnjak.changeWeapon();
    } catch (err) {
      console.log(err);
    }
  }
});
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 67) {
    try {
      carobnjak.getWeapon();
    } catch (err) {
      console.log(err);
    }
  }
});
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 86) {
    try {
      carobnjak.throWeapon();
    } catch (err) {
      console.log(err);
    }
  }
});

//Borbu između heroja i čudovista

window.addEventListener("keydown", (e) => {
  if (event.keyCode == 32) {
    let heroes = ["sworsman", "wizard"];
    let monsters = ["dragon", "spider"];
    let heroHealth;
    let monsterHealth;
    let heroAtt;
    let monsterAtt;
    let random = Math.floor(Math.random() * 100);
    let hero = "";
    let monster = "";
    if (random < 50) {
      hero = heroes[0];
      if (macevalac.defaultWeapon == "koplje") {
        heroAtt = macevalac.spearDemage;
      } else if (macevalac.defaultWeapon == "mac") {
        heroAtt = macevalac.swordDemage;
      }
      monster = monsters[1];
      monsterAtt = pauk.typeOfAttack();
    } else {
      hero = heroes[1];
      monster = monsters[0];
      heroAtt = carobnjak.magicDemage;
      monsterAtt = zmaj.typeOfAttack();
    }
    if (hero == "sworsman") {
      heroHealth = 100;
    } else if (hero == "wizard") {
      heroHealth = 150;
    }
    if (monster == "dragon") {
      monsterHealth = 200;
    } else if (monster == "spider") {
      monsterHealth = 50;
    }

    let borba = setInterval(() => {
      console.log(monster);

      if (random < 50) {
        console.log(
          `${hero} je napao ${monster} pomocu ${macevalac.defaultWeapon}`
        );
        monsterHealth = monsterHealth - heroAtt;
      } else if (random > 50) {
        console.log(
          `${monster} je napao ${hero} pomocu ${monster.typeOfWepon}`
        );
        heroHealth = heroHealth - monsterAtt;
      }
      if (heroHealth <= 0 || monsterHealth <= 0) {
        clearInterval(borba);

        if (heroHealth <= 0) {
          console.log(`${monster} je pobedio u duelu sa ${hero}`);
        } else if (monsterHealth <= 0) {
          console.log(`${hero} je pobedio u duelu sa ${monster}`);
        }
      } else {
        console.log(heroHealth, monsterHealth);
        console.log("borba se nastavlja!");
      }
    }, 2000);
  }
});


console.log('haj');





