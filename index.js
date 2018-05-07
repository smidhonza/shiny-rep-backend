const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const users = [];
const port = 1234;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  console.log(new Date().toLocaleString(), '/', request.query);
  response.json({ users });
});

app.post('/register', (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const password = request.body.password;

  console.log({ name, email, password });

  if (!name){
    return response.json({ status:'error', message: 'i need your name first!' })
  }

  if (!email){
    return response.json({ status:'error', message: 'i need your email first!' })
  }

  if (!password){
    return response.json({ status:'error', message: 'i need your password first!' })
  }

  const userWithSameEmail = users.find((user) => {
      if (user.email === email) {
        return true;
      }
      return false;
  });

  if (userWithSameEmail) {
return response.json({status:'error', message: 'User with this email already exists'});
}

  users.push({ name, email, password });

  response.json({ status:'ok' })
});

app.post('/login',(request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  console.log({ email, password });

  if (!email){
    return response.json({ status:'error', message: 'i need your email first!' })
  }

  if (!password){
    return response.json({ status:'error', message: 'i need your password first!' })
  }

  const existingUser = users.find((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }
      return false;
  });

  if(existingUser) {
    return response.json({status:'ok'})
  } else {
    return response.json({ status: 'error', message: 'wrong id' });

  }

});





app.listen(port, () => console.log(`bezim na ${port}`));
