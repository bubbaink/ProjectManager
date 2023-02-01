const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const {connection} =  await mongoose.connect(process.env.DB_CONNECTION)
        console.log(connection)
        const url = `${connection.host}:${connection.port}`

        console.log(`MongoDB connected in ${url}`)

    } catch (error) {
        console.log(`error mongoDB: ${error.message}`)
    }
}

module.exports = connectDB;
