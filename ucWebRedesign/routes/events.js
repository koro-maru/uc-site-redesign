const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController')
/* GET eventList */
/*router.get('/', eventController.getEvents);

router.get('/new', eventController.getCreateEvent);

router.post('/new', eventController.createEvent);

router.get('/edit', eventController.getEdit);

router.put('/edit/:id', eventController.editEvent);

router.get('/:id/delete', eventController.getDeleteEvent);

router.delete(':id/delete', eventController.deleteEvent);*/

module.exports = router;
