const router = require('express').Router();
const RoleController = require('./role.controller');

router.get('/', RoleController.getAll);
router.put('/', RoleController.update);
router.post('/', RoleController.create);
router.delete('/', RoleController.delete);

module.exports = router;