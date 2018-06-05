# shiny-rep-backend

## instructions
- install node and npm from https://nodejs.org/en/
- git clone git@github.com:smidhonza/shiny-rep-backend.git
- cd shiny-rep-backend
- npm i
- npm run start


## TODO
- [ ] validate email address
- [ ] add endpoints for:
  - GET `/` returns a list of blogposts
  - POST `/todolist` with body: `{ todo: 'my todo' }` adds a todo into the local storage, and insert the timestamp into it so the todo object looks like `{ todo: 'my todo', created: '2018-09-01' }`



 // const token = `${userId}-${Math.floor(Math.random() * 1000)}`;
