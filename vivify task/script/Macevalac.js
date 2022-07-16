let dropedWeapon = [];

export default class Macevalac {
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
      if (dropedWeapon.length > 0 && this.ranac.length <= 1) {
        this.defaultWeapon = dropedWeapon[0];
        this.ranac.push(dropedWeapon[0]);
        dropedWeapon.splice(0,1);
      }else{
          throw Error("You can't have more than two weapons!");
      }
      console.log(this.ranac);
      console.log(dropedWeapon);
    }
  
    throWeapon() {
      if(this.ranac.length>0){
  
          let a = this.ranac.splice(this.ranac.indexOf(this.defaultWeapon),1)
          dropedWeapon.push(this.defaultWeapon);
          console.log(a);
          console.log(this.ranac);
          console.log(dropedWeapon);
          console.log(this.defaultWeapon);
      }else{
          throw Error('There is no weapon!')
      }
  
    }

    
  }

