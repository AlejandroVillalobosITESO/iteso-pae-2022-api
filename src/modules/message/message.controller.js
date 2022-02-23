const MessageController = {
    getAll: (req, res) => {
        res.send('will get message');
    },
    create: (req, res) => {
        res.send('will create message');
    },
    update: (req, res) => {
        res.send('will update message');
    },
    delete: (req, res) => {
        res.send('will delete message');
    }
}

module.exports = MessageController;