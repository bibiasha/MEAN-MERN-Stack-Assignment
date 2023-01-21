const express = require('express');
const router = express.Router();
const {createTask, updateTask, deleteTask}= require("../controller/taskController")

router.post('/task', createTask)

router.put('/updateTask', updateTask)

router.delete('/deleteTask', deleteTask)

router.all("/**",  (req, res) => {
    return res.status(404).send({ status: false, msg: "API request not Available!"})
});

module.exports = router;