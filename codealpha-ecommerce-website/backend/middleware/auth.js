const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({message:'No token'});
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.id;
    next();
  } catch(e) {
    res.status(401).json({message:'Invalid token'});
  }
}

module.exports = authMiddleware;
