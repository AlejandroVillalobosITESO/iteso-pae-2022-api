const router = require('express').Router();
const RoomController = require('./room.controller');

router.get('/', RoomController.getAll);
router.put('/', RoomController.update);
router.post('/', RoomController.create);
router.delete('/', RoomController.delete);

module.exports = router;