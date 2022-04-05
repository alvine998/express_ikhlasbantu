const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const DonasiSchema = mongoose.Schema({
    iduser:String,
    judul: String,
    deskripsi: String,
    target: Number,
    terkumpul: Number,
    kategori: String,
    foto: String,
    durasi:Number,
    status_donasi: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Donasi', DonasiSchema);
