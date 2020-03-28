const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
   name: {type: String, required: true},
   description: {type: String},
   start: {type: Date, required: true},
   end: {type: Date, required: true},
   allDay: {type: Boolean},
});

EventSchema.virtual('url').get(()=>{
   return `/events/${this.id}`
})

module.exports = mongoose.model("Event", EventSchema)