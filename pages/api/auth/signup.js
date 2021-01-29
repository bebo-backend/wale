
import withSession from '../../../lib/session'
import {User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"

export default withSession(async (req, res) => {
  dbConnect()
  


  try {
    // we check that the user exists and store some data in session
   

const createUser = await User.create(req.body)


res.status(200).json({success:true,message:"Account created"})


   
  

  } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
