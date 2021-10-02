'use strict';


const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});
const bookModel = mongoose.model('book', bookSchema);

function seedbookInformation() {
    const bookOne = new bookModel({
        title: 'math',
        description: 'mmmmmmmmmm',
        status: 'm',
        email: 'ahmadromoh@gmail.com',
    })
    const bookTwo = new bookModel({
        title: 'science',
        description: 'sssssssssss',
        status: 's',
        email: 'ahmadromoh@gmail.com',
    })
    const bookThree = new bookModel({
        title: 'physics',
        description: 'pppppp',
        status: 'p',
        email: 'ahmadromoh@gmail.com',
    })

    bookOne.save();
    bookTwo.save();
    bookThree.save();
}
// seedbookInformation();
module.exports = bookModel;