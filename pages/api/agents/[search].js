
import withSession from '../../../lib/session'
import Property,{User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"
import {sortBy, reverse} from 'lodash'

export default withSession(async (req, res) => {


  dbConnect()





  try {
    // we check that the user exists and store some data in session
  let agents


 
const {search,sort,page,limit} = req.query



const getSort = (sort)=>{




switch(String(sort)){

 case "dn2o":{

   return {date:-1}
   break;
 }

 case "do2n":{

   return {date:1}

   break;
 }

 case "name":{

    return {"fullname":-1}
   

   break;
 }

 case "lv":{

     return {date:-1}
   

   break;
 }

 default :{

  return {date:-1}
   break;
 }


}
   

}



const allOptions = {

    page:page ? page:1,
    limit:limit ? limit:16,
    sort:getSort(sort),
    lean:true,
    select:"fullname phone email image address "
  }


  const options = {

    page:page ? page:1,
    limit:limit ? limit:16,
    sort:getSort(sort),
    lean:true,
    search:{
      value:search,
      fields:['email','fullname']
    },
    select:"fullname phone email image address"
  }




 


if (search =="all"){

  agents =  await User.paginate({},allOptions)

      
}  else {


  agents =  await User.paginate({},options)

  // agents = await User.paginate({},options)

}




  
res.status(200).json({success:true,agents:agents})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
