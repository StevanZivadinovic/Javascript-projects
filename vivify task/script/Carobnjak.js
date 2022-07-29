import Hero from "./Hero.js";
class Carobnjak extends Hero{
    constructor(ranac, health) {
      super(ranac, health);
        (this.defaultWeapon = ranac[0]),
        (this.magicDemage = 20);
    }
  }

  export default Carobnjak;