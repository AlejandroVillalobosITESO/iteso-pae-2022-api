const GroupController = {
    getAll: (req, res) => {
        res.send('will get groups');
    },
    create: (req, res) => {
        res.send('will create group');
    },
    update: (req, res) => {
        res.send('will update group');
    },
    delete: (req, res) => {
        res.send('will delete group');
    }
}

module.exports = GroupController;