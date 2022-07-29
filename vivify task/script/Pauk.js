import Monster from "./Monster.js";
class Pauk extends Monster{
    constructor(health, hit) {
      super(health, hit);
      (this.health = 50), (this.hit = 5), (this.bite = 8);
    }
  }

  export default Pauk;