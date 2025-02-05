// express import
const express = require('express');
const app = express();

// hello world route
app.get('/', (req, res) => {
    res.write('Learning node and mySQL');
    res.end()
});

// hello world server
app.listen(8080, () => {
    console.log('Server running on: http://localhost:8080')
});