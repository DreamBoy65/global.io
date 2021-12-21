module.exports = {

    prefix: ".",
    
    channels: {
        debug: ""
    },

    database: {
        enable: true,
        uri: process.env.MONGO_URI,
        config: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: false,
            connectTimeoutMS: 10000,
            family: 4
        }
    },
}