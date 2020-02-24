# wemanity_kata: Phonebook application
This repo contains 2 folders, one for the back-end and the other for front-end of a phonebook application.

## Back-end: crud-api 
Node.js Rest Apis with Express, Sequelize and MySql.
To run locally, you'll need Mysql Server running with the "phonebook" schema created.
Modify DB connection config in crud-api\app\config\db.config.js
Run `npm install` to install dependencies
Compile and run with command `node server.js` (will run on localhost:8080)

## Front-end: phonebook-app
Angular 8 front-end
Compile and run with `ng serve --port 8081` (will run on localhost:8081)
