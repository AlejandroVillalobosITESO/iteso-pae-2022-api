const router = require('express').Router();
const MessageController = require('./message.controller');

router.get('/', MessageController.getAll);
router.put('/', MessageController.update);
router.post('/', MessageController.create);
router.delete('/', MessageController.delete);

module.exports = router;