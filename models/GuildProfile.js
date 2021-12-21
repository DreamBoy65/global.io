const { model, Schema } = require('mongoose');

module.exports = model("server_profiles ", Schema({
    _id: String,
    prefix: {
        type: String,
        default: "."
    },
    channels: {
        count: {
            type: String,
            default: null
        },
        oneWord: {
            type: String,
            default: null
        },
        lastWord: {
            type: String,
            default: null
        },
        chat: {
            type: String,
            default: null
        } 
    }
}))