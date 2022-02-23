const router = require('express').Router();
const SessionController = require('./session.controller');

router.get('/', SessionController.getAll);
router.put('/', SessionController.update);
router.post('/', SessionController.create);
router.delete('/', SessionController.delete);

module.exports = router;