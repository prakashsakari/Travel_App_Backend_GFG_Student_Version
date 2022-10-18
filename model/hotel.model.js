const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    imageArr: { type: Array, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    numberOfBathrooms: { type: Number, required: true },
    numberOfBeds: { type: Number, required: true },
    numberOfguest: { type: Number, required: true },
    numberOfBedrooms: { type: Number, required: true },
    numberOfStudies: { type: Number, required: true },
    hostName: { type: String, required: true },
    hostJoinedOn: { type: String, required: true },
    ameneties: { type: Array, required: true },
    healthAndSafety: { type: Array, required: true },
    houseRules: { type: Array, required: true },
    propertyType: { type: String, required: true },
    isCancelable: { type: Boolean, required: true },
})

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;