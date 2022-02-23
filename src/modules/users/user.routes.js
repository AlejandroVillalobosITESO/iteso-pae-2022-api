const router = require('express').Router();
const UsersController = require('./users.controller');

router.get('/', UsersController.getAll);
router.put('/', UsersController.update);
router.post('/', UsersController.create);
router.delete('/', UsersController.delete);

module.exports = router;

