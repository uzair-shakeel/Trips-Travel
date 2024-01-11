import jwt from 'jsonwebtoken';
import User from '../models/User.js'

const verifyToken =  (req, res, next) => {
  const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decoded.id;
    req.role = decoded.role;

    
    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error({message: "JWT error occured"});
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

const verifyUser = (req, res, next) => {
    const userId = req.id;
    const paramsId = req.params.id
    const role = req.role;
              
        if(paramsId === userId || role === 'admin'){
          next()
        }else{
          res.status(401).json({success: false, message: "You're not Authorized"})
        }    
}

const verifyAdmin = (req, res, next) => {
  const role = req.role;
      if(role === 'admin'){
        next()
      }else{
        res.status(401).json({success: false, message: "You're not Authorized"})
      }
}

export  {verifyToken, verifyAdmin, verifyUser};
