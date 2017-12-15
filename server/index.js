const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express() // simulation -1 74C
app.use(bodyParser.json()) //simulation -1 72C 76F
app.use(cors())
massive(process.env.CONNECTION_STRING).then(db => { // simulation -1 70C
    app.set('db', db);


}).catch(err => console.log(err));

// 
app.get('/api/shelf/:id', ctrl.getShelf); //simulation -1 74D-1
// 74 D - 2
// 74 D - 3
// 74 D - 4
app.get('/api/bin/:id', ctrl.getBin);
app.put('/api/bin/:id', ctrl.updateBin);
app.delete('/api/bin/:id', ctrl.deleteBin);
app.post('/api/bin/:id', ctrl.createBin);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
