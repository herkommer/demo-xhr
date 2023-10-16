const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

//modulen fs hanterar att läsa och skriva till filer från node

//modulen body parser underlättar att hantera json filer
app.use(bodyParser.json());

//Tillåt nodejs att via express servera filer från public-katalogen
app.use(express.static('public'));

//index start
app.get('/', (req,res) => {
    res.sendFile('index');
});

//json data via api/XHR/fetch anrop
app.get('/data', (req,res) => {
    //res.sendFile('data');
    //const data = [{name: "kalle", email: "aaa@kjhsad.se"},
    //{name: "musse", email: "ahsgd@askjdh.se"}];
    //res.json(data);
    fs.readFile('data.json', 'utf-8', (err, data) => {
        res.json(JSON.parse(data));
    } );
});

//starta webbserver
app.listen(4242, () => {
    console.log('Server up and running on 4242');
});
