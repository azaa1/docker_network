const express = require('express');

const app = express();


// Define the static file path
app.use(express.static(__dirname+'/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
});