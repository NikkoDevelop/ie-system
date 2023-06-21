const jwt = require('jsonwebtoken');

const createToken = (userId) => {
  return jwt.sign({
    userId: userId,
  }, 'SECRET_STRING', {
    algorithm: 'HS256',
    expiresIn: '1d'
  })
};

// const verifyToken;

module.exports = createToken;