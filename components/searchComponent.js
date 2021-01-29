import React, {useState} from 'react'
import Link from 'next/link';


import {useRouter} from 'next/router'







 const main = ({setSearch=f=>f,filter=false,setFilter=f=>f, searchFilter="Housing"}) => {

    const [state,setState] = useState("all")
    





const change=(e)=>{
// console.log(e.target.value);
    setState(e.target.value)
    setSearch(e.target.value ? e.target.value : 'all')
}

const click=(e)=>{
    e.preventDefault()
    setSearch(state ? state : 'all')
}

const type=(filter="City")=>   <span class=" dropdown "  onClick={e=>{setFilter(filter)}}>

    
<span role="button" data-toggle="dropdown-status"  >
    
    By {filter}</span>


</span>

    return (  
       
<div class="input-group mb-3 search-form">
                        <div class="input-group-prepend bg-gray-400">
                       {filter ?  
                      
                       
                            <span class="input-group-text  text-white dropdown px-3 " style={{background:'black',border:'0px solid'}}>
                                <i role="button" data-toggle="dropdown" class="dropdown-toggle icon-copy dw dw-filter-1 search-icon"></i>
                                
                                <div class="dropdown-menu dropdown-menu-right ">


                                              <a class="dropdown-item dropdown" >
                                                {type("Title")}
                                                    </a>

                                                    <a class="dropdown-item dropdown" >
                                                    {type("Status")}
                                                  </a>



                                                    <a class="dropdown-item dropdown" >
                                                    {type("Address")}  
                                                    </a>



												<a class="dropdown-item dropdown" >
                                                {type("City")}
                                                    </a>
                                              


                                                    <a class="dropdown-item dropdown" >

                                       {type("State")}                                                  
                                                   
                                                    </a>


                                <a class="dropdown-item dropdown" >
                                                {type("Agents")}
                                                    </a>


                                                

											</div>

                                </span>
                      :
                          <span class="input-group-text"><i class="dw dw-search2 search-icon"></i></span>}
                        </div>
                        <input type="text" class="form-control" placeholder={filter? searchFilter ? "Search properties by " +searchFilter: "Search Housing you want" :"Find agent who knows your market best"} onChange={change}  />
                        <div class="input-group-append bg-blue-700" onClick={click}>
                        <span class="input-group-text"><i class="ion-arrow-down-c px-2"></i></span>
                        </div>
                      </div>




);
}

export default main;


