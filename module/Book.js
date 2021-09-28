'use strict';


const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
    ownerName: String
});
const bookModel = mongoose.model('book', bookSchema);

function seedbookInformation() {
    const bookOne = new bookModel({
        title: 'math',
        description: 'mmmmmmmmmm',
        status: 'm',
        email: 'ahmad@gmail.com',
        ownerName: 'ahmad '
    })
    const bookTwo = new bookModel({
        title: 'science',
        description: 'sssssssssss',
        status: 's',
        email: 'zaid@gmail.com',
        ownerName: 'zaid '
    })
    const bookThree = new bookModel({
        title: 'physics',
        description: 'pppppp',
        status: 'p',
        email: 'waleed@gmail.com',
        ownerName: 'waleed'
    })

    bookOne.save();
    bookTwo.save();
    bookThree.save();
}
module.exports = {
    bookModel
}