const UserGroupController = {
    getAll: (req, res) => {
        res.send('will get usergroup');
    },
    create: (req, res) => {
        res.send('will create usergroup');
    },
    update: (req, res) => {
        res.send('will update usergroup');
    },
    delete: (req, res) => {
        res.send('will delete usergroup');
    }
}

module.exports = UserGroupController;