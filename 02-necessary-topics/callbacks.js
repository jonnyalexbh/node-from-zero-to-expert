// setTimeout(() => {
//   console.log('hello world');
// }, 3000)

let getUserById = (id, callback) => {
  let user = {
    id,
    name: 'Jonny Alexander'
  }

  if (id === 20) {
    callback(`the user with id ${id} does not exist`)
  } else {
    callback(null, user)
  }
}

getUserById(2, (err, user) => {
  if (err) {
    return console.log(err);
  }
  console.log('database user', user);
})
