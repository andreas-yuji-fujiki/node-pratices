/* imports:
*/
const express = require('express');
const app = express();

// database:
const mysql = require('mysql2');
const projectDB = mysql.createConnection ( {
    host: 'localhost',
    user: 'root',
    password: '2236',
    database: 'projeto'
} )

projectDB.connect( ( error ) => {
    if ( error ) throw error

    console.log(`Sucessfull connected to "${projectDB.config.database}" database! :)`)
});

// hello world route
app.get('/', ( req , res ) => {
    res.write('Learning node and mySQL');
    res.end();
});

app.get('/teste', ( req, res ) => {
    res.write('Teste page')
});

// hello world server
app.listen(8080, () => {
    console.log('Server running on: http://localhost:8080');
});