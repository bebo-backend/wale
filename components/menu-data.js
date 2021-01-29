import React, {useState} from 'react'

import {useRouter} from 'next/router'

import axios from 'axios'
import gistfile1 from './contrib/gistfile1'

import SearchComponent,{bigSearchComponent} from './searchComponent'

import Link from 'next/link'




 const MenuData = ({cancelMenu=f=>f}) => {


const [search, setSearch] = useState("")
const [filter, setSearchFilter] = useState('')

const setFilter=(data)=> setSearchFilter(data)
const router = useRouter()

const ApplyFilter= async (e)=>{

e.preventDefault()
cancelMenu()

if (search){


 const postData = {search_data:search,searchfilter:filter}

   let string_url=""

  Object.keys(postData).map(obj=>{

  string_url+=obj+'='+postData[obj]+'&'

})



  
router.push("/search/?"+string_url)

      

}
 		
   
  
  }







    return (  
    <div className="menu" >


    <div className="profile-timeline px-2">
                        
                        
      <ul>
                          
                            <li className="my-2 btn btn-primary w-100 text-white">
                               
                                <Link href="/submitproperty">
                                <span href="/submitproperty">Submit Listing</span>
                                </Link>
                                </li>
                            <li className="my-2 btn btn-danger w-100 text-white">
                             
                                <Link href="/agents">
                                <span href="/agents">Find Agents</span>
                                </Link></li>
                            <li className="my-2 btn btn-warning w-100 text-white">
                             
                              <Link href="/dashboard/profile">
                              <span href="/dashboard/profile">My Profile</span>
                              </Link>
                              </li>
                            <li className="my-2  btn btn-dark w-100 text-white">
                              
                              <Link href="/register">
                              <span href="/register">Register</span>
                               </Link>
                              </li>
                                   <li className="my-2 btn-secondary btn w-100">
                             
                              <Link href="/login">
                              <span href="/login">Login</span> 
                              </Link></li>

                                <li className="my-2 btn btn-info w-100 text-white">
                            <Link href="/contact">
                            <span href="/contact">Contact Us</span></Link> </li>
                       
                        </ul>

                        </div>

</div>
);
}

export default MenuData;
