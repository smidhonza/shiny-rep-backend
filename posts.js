const { getUserIdFromToken, getTokens, updateExpirationTime } = require('./auth');
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
    if (!userId) {
      return response.json({ status:"error", message:"invalid token"})
    };

    const validToken = getTokens().find((a) => a.userId === userId && a.token === token);
    if (!validToken) {
      return response.json({ status:"error", message:"token not found"})
    }

    if (Date.now() > validToken.expireAt) {
      return response.json({ status:"error", message:"token has expired"})
    }

    posts.push({ title, text, created, userId });

    updateExpirationTime(validToken);

    response.json({ status: 'ok' });
};

module.exports = { posts, addPost };
