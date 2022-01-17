const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const UsersSchema = mongoose.Schema({
    iduser:{type: ObjectId, ref:'users.model'},
    judul: String,
    deskripsi: String,
    target: Number,
    terkumpul: Number,
    status_donasi: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UsersSchema);