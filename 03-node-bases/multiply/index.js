const fs = require('fs');

let createFile = base => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`the value entered ${base} is not a number`);
      return;
    }

    let content = '';

    for (let i = 1; i <= 10; i++) {
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
  createFile
}
