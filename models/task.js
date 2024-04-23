const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,'must be a name'],
        trim:true,
        maxlength:[20,'cannot be more than 20']
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Task',taskSchema);