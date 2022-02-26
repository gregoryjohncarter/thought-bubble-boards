## thought-bubble-boards

## Usage
This application enables the user to browse and create blog posts by using Sequelize for a MySQL2 DB / ORM  and Heroku for a deployed server host (or NPM Express locally) to provide the service. Visitors can view posts without any authentication but must sign up and log in to create posts. Logged in users can also leave comments on posts as well as edit or delete posts they have created themselves.

## Installation
Firstly, make sure you have Node.js and MySQL installed. Next, run 'npm install' in the command prompt/terminal while navigated to the root directory to add the following dependencies.
```
bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, sequelize
```
Type in 'mysql -u root -p' while navigated to the root directory to activate the MySQL shell, then type 'source db/schema.sql' to create the source database. Now you should be set up to type in 'npm start' to run the server locally and check out the features on ''https://localhost:3001" or use the Insomnia API client to input requests. Check the routes under the controllers directory for references on which routes are available, and note that a valid Login POST request must be made for those which require authentication. If you follow these guidelines you will be able to sign up and manipulate accounts and posts using Insomnia. 

