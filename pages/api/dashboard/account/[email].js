
import withSession from '../../../../lib/session'
import Property,{User} from "../../../../models/model"
import dbConnect from "../../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {email } = req.query


  try {
    // we check that the user exists and store some data in session
   
    let property
    const user =  await User.findOne({email:email})

    if (user){

        property =  await Property.find({agentuser:user._id}).lean()
    }
   





res.status(200).json({success:true,property:property.length,user})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
