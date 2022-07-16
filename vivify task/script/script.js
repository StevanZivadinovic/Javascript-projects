

let dropedWeapon = [];

class Macevalac {
  constructor(ranac, health) {
    this.ranac = ranac,
    this.health = health,
    this.defaultWeapon = ranac[0],
    this.swordDemage = 10,
    this.spearDemage = 15

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

class Carobnjak {
  constructor(ranac, health) {
    this.ranac = ranac,
    this.health = health,
    this.defaultWeapon = ranac[0],
    this.magicDemage =20
  }

}


class Zmaj{
    constructor(){
        this.health = 200,
        this.hit = 5,
        this.fire = 20
    }

    typeOfAttack(){
        if(this.fire){
            if(Math.random()>0.5){
                return this.hit;
            }else{
                return this.fire;
            }
        }else if(this.bite){
            if(Math.random()>0.5){
                return this.hit;
            }else{
                return this.bite;
            }
        }
    }
    typeOfWepon(){
        if(this.fire){
            if(Math.random()>0.5){
                return 'hit'
            }else{
                return 'fire'
            }
        }else if(this.bite){
            if(Math.random()>0.5){
                return 'hit';
            }else{
                return 'bite';
            }
        }
    }
}

class Pauk{
    constructor(){
        this.health = 50,
        this.hit = 5,
        this.bite = 8
    }
}

let macevalac = new Macevalac(["mac", "koplje"], 100);
let carobnjak = new Carobnjak(["carolija"], 150);
let zmaj = new Zmaj();
let pauk = new Pauk();

Carobnjak.prototype.changeWeapon = macevalac.changeWeapon;
Carobnjak.prototype.getWeapon = macevalac.getWeapon;
Carobnjak.prototype.throWeapon = macevalac.throWeapon;
Pauk.prototype.typeOfAttack = zmaj.typeOfAttack;
Pauk.prototype.typeOfWepon = zmaj.typeOfWepon;





//macevalac event-s
window.addEventListener("click", () => {
    try{
        macevalac.changeWeapon();
    }catch(err){
        console.log(err);
    }
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 71) {
    try{

        macevalac.getWeapon();
    }catch(err){
        console.log(err);
    }
  }
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 70) {
    try{

        macevalac.throWeapon();
    }catch(err){
        console.log(err);
    }
  }
});


//carbonjak event-s
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    try{
        carobnjak.changeWeapon();
    }catch(err){
        console.log(err);
    }
  }
});
window.addEventListener("keydown", (event) => {
    if (event.keyCode == 67) {
        try{
            carobnjak.getWeapon();
        }catch(err){
            console.log(err);
        }
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.keyCode == 86) {
        try{

            carobnjak.throWeapon();
        }catch(err){
            console.log(err);
        }
    }
  });


  //Borbu između heroja i čudovista


  window.addEventListener('keydown',(e)=>{
    
      if (event.keyCode == 32) {
          
          
       
              let heroes = ['sworsman', 'wizard'];
              let monsters = ['dragon', 'spider'];
              let heroHealth;
              let monsterHealth;
              let heroAtt;
              let monsterAtt;
              let random = Math.floor(Math.random() * 100);
              let hero='';
              let monster = '';
              if(random<50){
                hero=heroes[0];
                if(macevalac.defaultWeapon=='koplje'){

                    heroAtt=macevalac.spearDemage
                }else if(macevalac.defaultWeapon=='mac'){
                    heroAtt=macevalac.swordDemage;

                }
                monster=monsters[1]
                monsterAtt=pauk.typeOfAttack()
              }else{
                hero=heroes[1];
                monster=monsters[0]
                heroAtt=carobnjak.magicDemage;
                monsterAtt=zmaj.typeOfAttack()
              }
              if(hero=='sworsman'){
                heroHealth = 100
              }else if(hero=='wizard'){
                heroHealth = 150
              }
              if(monster=='dragon'){
                monsterHealth = 200
              }else if(monster=='spider'){
                monsterHealth = 50
              }

              
              let borba = setInterval(() => {
                  console.log(monster)
                  
                  
                  if(random<50){
                  console.log(`${hero} je napao ${monster} pomocu ${macevalac.defaultWeapon}`)
                monsterHealth=monsterHealth-heroAtt
               

              }else if(random>50){
                
                console.log(`${monster} je napao ${hero} pomocu ${monster.typeOfWepon}`)
                heroHealth=heroHealth-monsterAtt;
               

              }
              if(heroHealth<=0 || monsterHealth<=0){
                clearInterval(borba);
                  
                  if(heroHealth<=0){
                    
                    console.log(`${monster} je pobedio u duelu sa ${hero}`)
                }else if(monsterHealth<=0){
                    console.log(`${hero} je pobedio u duelu sa ${moster}`)
                }
                  
              }else{
                console.log(heroHealth, monsterHealth)
                  console.log('borba se nastavlja!')
              }
            }, 2000);
        

    }
  })


  