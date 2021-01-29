
import withSession from '../../../lib/session'
import Property,{User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {email,image_id } = req.body


  try {
    // we check that the user exists and store some data in session
    
    

    const update =  await User.findOneAndUpdate({email:email}, {image:{image_id}}, data=>{


        
    })

 
   

    if (update){
        res.status(200).json({success:true,message:"picture updated"})
    } else {
        res.status(200).json({success:false,error:"Upload error"})
    }




   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
