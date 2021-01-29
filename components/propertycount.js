import React, {useState} from 'react'

import {useRouter} from 'next/router'

import axios from 'axios'

import useSWR from 'swr'



 const GetProperty = ({email}) => {

    const {data:propertyCount,mutate:mutateProperty} = useSWR(()=>'api/propertyCount/'+email,axios)



if (!propertyCount) {
    return (

        <span className="col-12  bg-white p-4">


<img src="/vendors/images/new-loader.gif" alt="" width='10' />
loading

</span>

    )
}



    return (  
    

<span>
       

			
       {propertyCount.data.property} Property    

                </span>

);
}

export default GetProperty;
