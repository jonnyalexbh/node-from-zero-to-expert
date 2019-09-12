let deadpool = {
  name: 'Wade',
  lastName: 'Winston',
  power: 'Regeneracion',
  getName: function () {
    return `${this.name} ${this.lastName} - power: ${this.power}`
  }
}

// let name = deadpool.name;
// let lastName = deadpool.lastName;
// let power = deadpool.power;

let { name: firstName, lastName, power } = deadpool;

console.log(firstName, lastName, power);
