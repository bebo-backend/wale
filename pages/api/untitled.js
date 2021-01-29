
import withSession from '../../lib/session'
import {MessageModel,User} from "../../models/model"
import dbConnect from "../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 let {text,receiver,sender} = req.body

sender = await User.findOne({email:sender})

let createMessage, response

if (sender){







  try {
  

      
createMessage = await MessageModel.create({text,receiver,sender:sender._id},(err,data)=>{

    if(data){

          response=data
          console.log(data)

    } else {

        console.log(err)

    }
})



    } catch (error) {
 
    // res.status(200).json({success:false,error:error.message})
    console.log(error.message)

  }



}



res.status(200).json({success:true,response})

})
