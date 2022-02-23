const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send('will create users');
    },
    update: (req, res) => {
        res.send('will update users');
    },
    delete: (req, res) => {
        res.send('will delete users');
    }
}

module.exports = UsersController;