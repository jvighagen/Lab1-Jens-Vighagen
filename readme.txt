Hejsan!

inte lyckats med allt vilket du kommer märka. en av de svåraste sakerna jag har gjort hittils eftersom att jag inte riktigt vet vart jag skall
info ifrån.


1- install npm with npm init -y
2- install dependencies
    1- npm i body-parser cors dotenv express mongodb mongoose
    2- npm i nodemon --save-dev
3- add to script
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon app.js"
4- start the server with
    npm run dev
5- server is running on http://localhost:3000/api/users/
    1- to get all the users GET http://localhost:3000/api/users/
    2- to add user POST http://localhost:3000/api/users/
        {
            "firstname": "-> write a name here <-"
            "lastname": "-> write a name here <-"
        }
    3- to delete user DELETE http://localhost:3000/api/users/_id
        first use GET http://localhost:3000/api/users/ to se what the ID is, then use it.
    4- to update user PATHC http://localhost:3000/api/users/_id
        get the ID from GET the PATCH 
        {
            "firstname": "-> write a name here <-"
            "lastname": "-> write a name here <-"
        }

6- open app.html in the webbrowser to get to the page, were you can se all the users and delete, update them. 
