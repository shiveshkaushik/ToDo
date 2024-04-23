const express = require('express');
const router = express.Router();
const {getalltask,gettask,createtask,updatetask,deletetask} = require('../controllers/tasks');

router.route('/').get(getalltask).post(createtask);
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask);


module.exports= router;