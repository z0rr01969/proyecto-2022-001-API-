const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/db_cedeshops';

const conn = async () => {
    await mongoose.connect(uri);
    console.log('connection mongo runnig...')   ;
}

conn().catch(error => console.log('Error connection mongo, error'));