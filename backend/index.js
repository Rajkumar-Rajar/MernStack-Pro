const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Router
const new_data_user =require('./Userrouter')
app.use('/', new_data_user);

// Connect to MongoDB
mongoose.connect(process.env.MYDB_CONNECTION,{ 
  useNewUrlParser: true,
   useUnifiedTopology: true 
  }
).then((con) =>{
  console.log('mongodb is connected to the server');
}).catch((err)=>{
console.log(`error accured in this conection ${err}`);
});


// Start the server
const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
