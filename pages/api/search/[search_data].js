
import withSession from '../../../lib/session'
import Property,{User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"
import {sortBy, reverse} from 'lodash'
import { enGB } from 'date-fns/locale'


export default withSession(async (req, res) => {


  dbConnect()


 






  try {
    // we check that the user exists and store some data in session
  let property

    const limit = 24

  const {sort,state, city,type,street,minRange,maxRange,search_data,searchfilter,agent,page,status} =  req.query


// console.log('search_filter', search_data)

const getField = (field)=>{

  switch (String(field).toLowerCase()){

case "status":{

  return ['status']
  break;
}

case "price":{

  return ['price']
  break;
}

case "city":{

  return ['location.city']
  break;
}


case "type":{

  return ['type']
  break;
}

case "state":{

  return ['location.state']
  break;
}

case "agents":{

  return ["agentuser.fullname"]
  break;
}

case "title":{

 return ['title','type','status','duration']
  break;
}


case "address":{

  return ['location.street']
  break;
}

default :{

return ['title','type','status','duration']

break;

}



  }
}


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

    return {"agentuser.fullname":-1}
   

   break;
 }

 case "lv":{

    return {views:-1,likes:-1}
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
    limit:limit,
    sort:getSort(sort),
    lean:true,
    select:"title status type location price duration images agentuser likes views",
    populate:"agentuser"
  }


  const options = {
    page:page ? page:1,
    limit:limit,
    sort:getSort(sort),
    lean:true,
    search:{
      value:search_data,
      fields: getField(searchfilter)
    },
    select:"title status type location price duration images agentuser likes views",
    populate:"agentuser"
  }





    if (search_data == "All" || search_data =="all") {

    property =  await Property.paginate({},allOptions)


    } else if (searchfilter && searchfilter != "Agents") {

      property =  await Property.paginate({},options)

    } else if (searchfilter && searchfilter == "Agents") {

     const user  = await User.findOne({fullname:search_data})

      property =  await Property.paginate({agentuser:user},allOptions)

    }    else {

property =  await Property.paginate({$and:[
  {status:status},
  {price: { $gte: minRange, $lte: maxRange }}
  ]
},options)


   

    }


res.status(200).json({success:true,property:property})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
