const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    create: (req, res) => {
        res.send('will create channel');
    },
    update: (req, res) => {
        res.send('will update channel');
    },
    delete: (req, res) => {
        res.send('will delete channel');
    }
}

module.exports = ChannelsController;