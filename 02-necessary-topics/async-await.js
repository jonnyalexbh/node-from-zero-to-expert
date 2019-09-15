// let getName = async () => {
//   return 'Jonny Alexander'
// };

let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Jonny Alexander');
    }, 3000);
  });
}

let greeting = async () => {
  let name = await getName();
  return `Hello ${name}`;
}

greeting().then(message => {
  console.log(message);
});
