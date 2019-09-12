console.log('program start');

setTimeout(function () {
  console.log('first timeout');
}, 3000)

setTimeout(function () {
  console.log('second timeout');
}, 0)

setTimeout(function () {
  console.log('third timeout');
}, 0)

console.log('end of the program');
