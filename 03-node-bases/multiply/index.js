const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
  console.log('=================='.green);
  console.log(`table of ${base}`.green);
  console.log('=================='.green);
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

let createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`the value entered ${base} is not a number`);
      return;
    }

    let content = '';

    for (let i = 1; i <= limit; i++) {
      content += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`files/table${base}.txt`, content, (err) => {
      if (err) reject(err)
      else
        resolve(`table${base}.txt`);
    });
  });
}

module.exports = {
  createFile,
  listTable
}
