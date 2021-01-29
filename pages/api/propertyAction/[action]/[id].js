
import withSession from '../../../../lib/session'
import Property,{User} from "../../../../models/model"
import dbConnect from "../../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {id,action } = req.query



  try {
    // we check that the user exists and store some data in session
   
   const deleteDoc = await Property.deleteOne({_id:id},(err,data)=>{

if (data){

	 console.log(data)
	 res.status(200).json({success:true})
	  
}



   })
    




    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
