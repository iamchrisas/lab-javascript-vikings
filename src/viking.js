// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
// Super is useful to call properties from previous classes
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); 
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const result = randomSaxon.receiveDamage(randomViking.strength);


        if (randomSaxon.health <= 0) {
            const saxonIndex = this.saxonArmy.indexOf(randomSaxon);
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return result;
    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const result = randomViking.receiveDamage(randomSaxon.strength);


        if (randomViking.health <= 0) {
            const vikingIndex = this.vikingArmy.indexOf(randomViking);
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return result;
    }

}

