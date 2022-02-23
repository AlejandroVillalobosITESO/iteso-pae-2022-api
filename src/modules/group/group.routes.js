const router = require('express').Router();
const GroupController = require('./group.controller');

router.get('/', GroupController.getAll);
router.put('/', GroupController.update);
router.post('/', GroupController.create);
router.delete('/', GroupController.delete);


module.exports = router;