const express = require('express');
const app = express();
require('./Database/Connection');
app.use(express.json());
const emprouter = require('./Routes/Emproute')
app.listen(3000,()=>{console.log("API running on port 3000");})
app.use(emprouter);