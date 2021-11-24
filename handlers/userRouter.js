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

module.exports = {
    handleSingleUser
}