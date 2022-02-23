const RoleController = {
    getAll: (req, res) => {
        res.send('will get role');
    },
    create: (req, res) => {
        res.send('will create role');
    },
    update: (req, res) => {
        res.send('will update role');
    },
    delete: (req, res) => {
        res.send('will delete role');
    }
}

module.exports = RoleController;