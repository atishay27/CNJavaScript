//Do not alter the starter code
function main() {
  //Create Character constructor function
  function Character(health, number, agility) {
    this.health = health;
    this.number = number;
    this.agility = agility;
  }
  //Create Warrior ,Mage, Enemy and Archer constructor fntion inheriting Character
  function Warrior(health, number, agility, weaponType) {
    Character.call(this, health, number, agility);
    this.weaponType = weaponType;
  }
  function Mage(health, number, agility, spellType) {
    Character.call(this, health, number, agility);
    this.spellType = spellType;
  }
  function Archer(health, number, agility, arrowType) {
    Character.call(this, health, number, agility);
    this.arrowType = arrowType;
  }
  function Hero(
    health,
    number,
    agility,
    weaponType,
    spellType,
    specialAbility
  ) {
    Warrior.call(this, health, number, agility, weaponType);
    Mage.call(this, health, number, agility, spellType);
    this.specialAbility = specialAbility;
  }
  function Enemy(health, number, agility, enemyType) {
    Character.call(this, health, number, agility);
    this.enemyType = enemyType;
  }

  //Create constructor function for Hero inheriting Hero and Mage

  let warrior1 = new Warrior(100, 50, 30, "sword");
  let mage1 = new Mage(80, 20, 50, "fireball");
  let archer1 = new Archer(90, 40, 40, "poison");
  let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
  let enemy1 = new Enemy(200, 80, 20, "goblin");

  console.log(warrior1);
  console.log(mage1);
  console.log(archer1);
  console.log(hero1);
  console.log(enemy1);

  return { Character, Hero, Warrior, Mage, Archer, Enemy };
}
main();
