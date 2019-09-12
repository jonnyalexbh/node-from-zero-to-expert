let name = 'Deadpool';
let real = 'Wade Winston';

// console.log(name + ' ' + real);
// console.log(`${ name } ${ real }`);

let fullName = name + ' ' + real;
let templateName = `${name} ${real}`;

console.log(fullName === templateName);

function getName() {
  return `${name} ${real}`;
}

console.log(`the name of ${getName()}`);
