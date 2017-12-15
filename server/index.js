const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express() // simulation -1 74C
app.use(bodyParser.json()) //simulation -1 72C 
app.use(cors())
// massive(process.env.CONNECTION_STRING).then( db => {
//     app.set('db', db);


// }).catch(err => console.log(err));

// 
app.get('/api/shelf/:id', ctrl.getShelf);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
