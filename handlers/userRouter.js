// handle requests for specific book: e.g., /api/books/0321886518
const handleSingleUser = (app, User) => {
    app.route('/api/user/:id')
        .get((req,resp) => {
            User.find({id: req.params.id})
                .select('id details picture membership email')
                .exec((err, data) => {
                    if (err) {
                        resp.json({ message: 'User not found' });
                    } else {
                        resp.json(data);
                    }
                });
        });
};

const handleLogin = (app, User) => {
    app.route('/api/login')
        .post((req,resp) => {
            // not sure what to do
        });
};

module.exports = {
    handleSingleUser
}