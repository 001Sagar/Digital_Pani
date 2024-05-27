const jwt = require('jsonwebtoken');
const jwtsecret = 'Digital_pani'



module.exports.authenticate = async function(req,res,next){
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader
      if (token == null) {
          return res.status(401).json({message: 'Authorization token is missing'});
      }
  
      jwt.verify(token, jwtsecret, (err, user) => {
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
  