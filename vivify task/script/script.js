class Macevalac {
  constructor(ranac, health) {
    (this.ranac = ranac),
      (this.health = health),
      (this.defaultWeapon = ranac[0]);
  }

  changeWeapon(params) {
    if (this.ranac.length == 0) {
      throw Error("There is no weapon in the bag!");
    } else {
      if (this.defaultWeapon == this.ranac[0] && this.ranac[1]) {
        this.defaultWeapon = this.ranac[1];
      } else if (this.defaultWeapon == this.ranac[1]) {
        this.defaultWeapon = this.ranac[0];
      }
    }
    console.log(this.defaultWeapon);
  }

  getWeapon() {
    console.log("get");
  }

  throWeapon() {
    console.log("throw");
  }
}

class Carobnjak {
  constructor(ranac, health) {
    this.ranac = ranac;
    this.health = health;
    this.defaultWeapon = ranac[0];
  }

  getWeapon() {
    console.log("get");
  }
  throWeapon() {
    console.log("throw");
  }
}

let macevalac = new Macevalac(["mac", "koplje"], 100);
let carobnjak = new Carobnjak(["carolija"], 150);
Carobnjak.prototype.changeWeapon = macevalac.changeWeapon;

window.addEventListener("click", () => {
  macevalac.changeWeapon();
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    carobnjak.changeWeapon();
  }
});
