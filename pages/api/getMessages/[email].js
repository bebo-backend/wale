
import withSession from '../../../lib/session'
import {MessageModel,User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {email,page} = req.query

 const options = {

    page:page ? page:1,
    limit:10,
    sort:{date:-1},
    lean:true,
    populate:"sender"
  }




const sender = await User.findOne({email:email})

let getMessage

if (sender){



// getMessage = await MessageModel.find({receiver:sender._id}).populate("sender").sort({data:"-1"}).limit(10).lean()

getMessage = await MessageModel.paginate({receiver:sender._id},options)


}



res.status(200).json({success:true,message:getMessage})

})
