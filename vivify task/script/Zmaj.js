import Monster from "./Monster.js";
class Zmaj extends Monster {
    constructor(health, hit) {
      super(health, hit);
      (this.fire = 20);
    }
  
    typeOfAttack() {
      if (this.fire) {
        if (Math.random() > 0.5) {
          return this.hit;
        } else {
          return this.fire;
        }
      } else if (this.bite) {
        if (Math.random() > 0.5) {
          return this.hit;
        } else {
          return this.bite;
        }
      }
    }
    typeOfWepon() {
      if (this.fire) {
        if (Math.random() > 0.5) {
          return "hit";
        } else {
          return "fire";
        }
      } else if (this.bite) {
        if (Math.random() > 0.5) {
          return "hit";
        } else {
          return "bite";
        }
      }
    }
  }

  export default Zmaj;