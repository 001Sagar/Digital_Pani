const jwt = require('jsonwebtoken');
const config = require('../config.json')



module.exports.authenticate = async function(req,res,next){
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader
      if (token == null) {
          return res.status(401).json({message: 'Authorization token is missing'});
      }
  
      jwt.verify(token, config.jwtsecret, (err, user) => {
          if (err) {
          return res.status(403).json({message: 'Invalid token'});
          }else{
              next();
          }
      })
    } catch (error) {
      console.log(error);
      return; res.status(500).json(error)
    }
  }
  