const connectToMongo = require('./config');
const express = require('express');
const dotenv=require('dotenv');
var cors = require('cors')
connectToMongo();
dotenv.config();

const app = express()
const port = process.env.PORT;

 
app.use(cors())
app.use(express.json())


//Giving different routes used 
// app.use('/api/user',require('./routes/user'));
// app.use('/api/admin/user',require('./routes/cruduser'));
// app.use('/api/attendance',require('./routes/attendance'));
// app.use('/api/product', require('./routes/notes'))s

//Listening at 4000 ||1000 port
app.listen(port||1000, () => {
    console.log(`ShopForHome  listening at http://localhost:${port}`)
})