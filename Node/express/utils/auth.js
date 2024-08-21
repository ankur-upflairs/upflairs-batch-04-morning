const jwt =require('jsonwebtoken')

module.exports=(req,res,next)=>{
    // console.log(req.headers)
    try {
      let bearerToken=req.headers.authorization
      let token=bearerToken.split(' ')[1]
      if(!token){
        return res.json({status:'failed',message:'no token provided'})
      }
      let verifyToken=jwt.verify(token,'my_secret_key')
      if(!verifyToken){
        return res.json({status:'failed',message:'wrong token'})
  
      }
      req.user=verifyToken.email
      next()
      // console.log(verifyToken)
    } catch (error) {
      return res.json({status:'failed',message:error.message})
  
    }
    
    // next()
  }