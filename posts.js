const { getUserIdFromToken } = require('./auth');
const posts = [];

const addPost = (request, response) => {
    const title = request.body.title;
    const text = request.body.text;
    const token = request.body.token;

    if (!title) {
        return response.json({ status: 'error', message: "insert title!" })
    }

    if (!text) {
        return response.json({ status: 'error', message: "insert text!" })
    }

    if (!token) {
        return response.json({ status: 'error', message: "missing token" })
    }
    const created = Date.now();

    const userId = getUserIdFromToken(token);
    // todo: check if user with this userId exists

    posts.push({ title, text, created, userId });

    response.json({ status: 'ok' });
};

module.exports = { posts, addPost };
