const fs = require('fs');

let base = 3;
let content = '';

for (let i = 1; i <= 10; i++) {
  content += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`files/table${base}.txt`, content, (err) => {
  if (err) throw err;
  console.log(`the table${base}.txt file has been created`);
});
