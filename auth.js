const createToken = (userId) => {
    return userId + "-" + Math.floor(Math.random() * 1000);
};

const getUserIdFromToken = (token) => {
    const bits = token.split("-");

    const id = bits[0];

    return parseInt(id, 10);
};

module.exports = { createToken, getUserIdFromToken };
