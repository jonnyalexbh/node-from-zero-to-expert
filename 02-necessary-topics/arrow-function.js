// function sum(a, b) {
//   return a + b;
// }

// let sum = (a, b) => a + b;
// console.log(sum(5, 5));

// function greet() {
//   return 'Hello World';
// }

// let greet = () => 'Hello World';

// let greet = name => `Hello ${name}`;

let deadpool = {
  name: 'Wade',
  lastName: 'Winston',
  power: 'Regeneracion',
  getName() {
    return `${this.name} ${this.lastName} - power: ${this.power}`
  }
}

console.log(deadpool.getName());
