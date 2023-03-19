const express = require("express")
const userController = require('../controllers/users')
const router = express.Router();

router.get('/', userController.findAll)
router.get('/:id', userController.findOne)
router.post('/', userController.create)
router.patch('/:id', userController.update)
router.delete('/:id', userController.destroy);

module.exports = router;