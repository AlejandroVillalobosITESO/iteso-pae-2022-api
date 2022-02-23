const router = require('express').Router();

const channelRoutes = require('./../modules/channel/channel.routes');
const groupRoutes = require('./../modules/group/group.routes');
const messageRoutes = require('./../modules/message/message.routes');
const roleRoutes = require('./../modules/role/role.routes');
const roomRoutes = require('./../modules/room/room.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const usergroupRoutes = require('./../modules/usergroup/usergroup.routes');
const userRoutes = require('./../modules/users/user.routes');

router.use('/channel', channelRoutes);
router.use('/group', groupRoutes);
router.use('/message', messageRoutes);
router.use('/role', roleRoutes);
router.use('/room', roomRoutes);
router.use('/session', sessionRoutes);
router.use('/usergroup', usergroupRoutes);
router.use('/users', userRoutes);

module.exports = router;