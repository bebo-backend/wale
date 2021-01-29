
import withSession from '../../../../lib/session'
import Property,{User} from "../../../../models/model"
import dbConnect from "../../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {email,page } = req.query



  try {
    // we check that the user exists and store some data in session

     const options = {

    page:page ? page:1,
    limit:10,
    sort:{date:-1},
    lean:true,
  }


   
    let property
    const user =  await User.findOne({email:email})

    if (user){

        property =  await Property.paginate({agentuser:user._id},options)
    }
   





res.status(200).json({success:true,property,user})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
