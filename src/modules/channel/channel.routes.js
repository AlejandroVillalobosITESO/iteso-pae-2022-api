const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);
router.put('/', ChannelsController.update);
router.post('/', ChannelsController.create);
router.delete('/', ChannelsController.delete);

module.exports = router;
