const jwt = require('jsonwebtoken');
const secret = 'Guruji_Astro'; // replace with your own secret key


module.exports.authenticate = async function(req,res,next){
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader
      if (token == null) {
          return res.status(401).json({message: 'Authorization token is missing'});
      }
  
      jwt.verify(token, secret, (err, user) => {
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
  