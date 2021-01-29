const toJson = async (obj) =>{

    const data =obj.map(doc => {
        const value = doc.toObject()
        value._id = value._id.toString()
        return value
      })
 
      
return data;

}

export default toJson