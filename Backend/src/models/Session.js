const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }],
    json_file_url: {
        type: String
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    }
},{ timestamps: true });

const Session = mongoose.model("Session",SessionSchema);
module.exports= Session;