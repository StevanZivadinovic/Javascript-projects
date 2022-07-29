import Hero from './Hero.js'

class Macevalac extends Hero{
    constructor(ranac, health) {
      super(ranac, health);
        (this.defaultWeapon = ranac[0]),
        (this.swordDemage = 10),
        (this.spearDemage = 15);
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
    }
  
    getWeapon() {
      if (dropedWeapon.length > 0 && this.ranac.length <= 1) {
        this.defaultWeapon = dropedWeapon[0];
        this.ranac.push(dropedWeapon[0]);
        dropedWeapon.splice(0, 1);
      } else {
        throw Error("You can't have more than two weapons!");
      }
    }
  
    throWeapon() {
      if (this.ranac.length > 0) {
        let a = this.ranac.splice(this.ranac.indexOf(this.defaultWeapon), 1);
        dropedWeapon.push(this.defaultWeapon);
      } else {
        throw Error("There is no weapon!");
      }
    }
  }

  export default Macevalac;