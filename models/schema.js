const mongoose = require('mongoose');
const visitor_schema = new mongoose.Schema({

    visitor_name:{

        type: String,
        required: true,
        default: "Anon"
    },

    visitor_email:{

        type: String,
        required: true
    },

    date:{

        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Mongoose_Schema',visitor_schema);