const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const PostSchema = new Schema({
    title: {type: String, required: true},
    body:  {type: String, required: true},
    image: {type: Buffer},
    date: {type: Date},
    tags: {type: Array}
});

PostSchema.virtual('dateCreatedFormatted').get
    (function(){
        return moment(this.dateCreated).format('MMMM Do, YYYY')
    })


module.exports = mongoose.model("Post", PostSchema)