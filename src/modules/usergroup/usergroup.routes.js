const router = require('express').Router();
const UserGroupController = require('./usergroup.controller');

router.get('/', UserGroupController.getAll);
router.put('/', UserGroupController.update);
router.post('/', UserGroupController.create);
router.delete('/', UserGroupController.delete);

module.exports = router;