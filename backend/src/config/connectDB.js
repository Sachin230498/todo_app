const mongoose = require('mongoose')


function connectDB(){
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch(err => console.log('Failed to connect to MongoDB'));

}

module.exports = connectDB;