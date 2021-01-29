
import withSession from '../../../lib/session'
import Property,{User,Reviews} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {id,page } = req.query

// console.log(id=="5fd6c8cad5b3c624994b9620")

  try {
    // we check that the user exists and store some data in session

     const options = {

    page:page ? page:1,
    limit:10,
    sort:{date:-1},
    populate:"sender",
    lean:true,
  }


   
    let reviews


    reviews =  await Reviews.paginate({propertyId:String(id)},options)

    // console.log(id)
    
   

res.status(200).json({success:true,reviews})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
