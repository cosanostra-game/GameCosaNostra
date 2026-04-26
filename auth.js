// middleware/auth.js — JWT ստուգման middleware
const jwt  = require('jsonwebtoken');
const User = require('./User');

const protect = async (req, res, next) => {
  let token;

  // Authorization header-ից կամ cookie-ից վերցնում ենք token-ը
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Մուտք արգելված է: token-ը բացակայում է',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // DB-ից user-ը ստուգում ենք (token-ը կարող է գոյություն ունենալ, բայց user-ն ջնջված)
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Token-ը վավեր չէ: օգտատերը գտնված չէ',
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Token-ը վավեր չէ կամ ժամկետը լրացել է',
    });
  }
};

module.exports = { protect };
