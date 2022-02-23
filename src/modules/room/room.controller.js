const RoomController = {
    getAll: (req, res) => {
        res.send('will get room');
    },
    create: (req, res) => {
        res.send('will create room');
    },
    update: (req, res) => {
        res.send('will update room');
    },
    delete: (req, res) => {
        res.send('will delete room');
    }
}

module.exports = RoomController;