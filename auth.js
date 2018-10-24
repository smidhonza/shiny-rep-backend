let tokens = [];

const getTokens = () => tokens;

const expireTime = 1; // minutes

const expireAt = () => new Date().getTime() + expireTime * 60000;

const createToken = (userId) => {
  const token = userId + "-" + Math.floor(Math.random() * 1000);
  tokens.push({
    token,
    userId,
    expireAt: expireAt(),
    created: Date.now()
  });



  return  token;
};

const getUserIdFromToken = (token) => {
    const bits = token.split("-");
    if (bits.length !== 2) {
      return null;
    }

    const id = bits[0];

    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return null;
    }

    return userId;
};

const updateExpirationTime = (token) => {
  tokens = tokens.map((a) => {
    if (a.token === token.token) {
      return { ...a, expireAt: expireAt() }
    }
    return a;
  });

};

module.exports = { getTokens, createToken, getUserIdFromToken, updateExpirationTime };
