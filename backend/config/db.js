// DB Connection
const mongoose = require('mongoose')
const uri = "mongodb+srv://chathurka:2RvDiwdnumgADHS@clustor0.l8g6i0r.mongodb.net/locationapp?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, { useNewUrlParser: true })

        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}

module.exports = connectDB