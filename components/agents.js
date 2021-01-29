import React, {useState} from 'react'

import {useRouter} from 'next/router'
import AgentsData from "../components/agentsdata"
import Link from 'next/link'
import axios from 'axios'





 const Agents = () => {

const [data,setData] = useState('');

const router = useRouter()



    return (  
    

<section className=" bg-white my-4 " style={{marginTop:'10px',paddingTop:'1px',paddingBottom:'8px'}}>
      

      <main role="main" class="main-content mx-4">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center my-4 ">
                <div class="col">
                <h4 className="  px-4 py-2 border-outline-warning text-black font-16 font-weight-bold " style={{borderLeft:'4px solid'}}>TOP AGENTS</h4>
                </div>
                <div class="col-auto"> <Link href="/agents">
                  <button type="button" class="btn btn-outline-secondary mx-4 text-black"><span class="fe fe-users fe-16 text-black h6 mr-2"></span>All Agents</button></Link>
                  
                </div>
              </div>
             
               
                {/*  */}
               
            <AgentsData />
             
            
              {/* <nav aria-label="Table Paging" class="my-3">
                <ul class="pagination justify-content-end mb-0">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav> */}
            </div> 
          </div> 
        </div> 
      
       
      </main>


                </section>

);
}

export default Agents;
