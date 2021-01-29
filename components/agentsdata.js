import React, {useState,useEffect, cloneElement} from 'react'

import {useRouter} from 'next/router'

import axios from 'axios'

import useSWR from 'swr'

import GetProperty from "./propertycount"

import Link from 'next/link'

import {Message } from './DetailComponents'

import {More } from './pagination'

import {CLOUDINARY_URL} from "./contrib/config"

 const AgentsData = ({search="all",sort=""}) => {



 const [page,setPage] = useState(1)
    
    
  const {data:agents,mutate:mutateProperty} = useSWR(()=>'/api/agents/'+search+'?sort='+sort+'&&page='+page,axios)

  

const loadNext=()=> setPage(agents.data.agents.nextPage)
const loadPrev=()=> setPage(agents.data.agents.prevPage)





const router = useRouter()
const [modalUser,setModalUser] = useState({})

const setMessageModal = (e,user)=>{

e.preventDefault()
setModalUser(user);

}



if (!agents) {
    return (

        <div className="col-12 mb-30 bg-white p-4">
<div className=" height-100-p ">

{/* <img src="/vendors/images/new-loader.gif" alt="" width='60' /> */}

<div className="profile-info">
        <h5 className="mb-20 h5 text-blue">Getting ( Agents ) data ...</h5>
        </div>
</div>
</div>

    )
}



    return (  
    
<section className=" bg-white " style={{marginTop:'30px',
paddingTop:'8px',paddingBottom:'8px',marginBottom:'20px'}}>
       

       <div className="row mb-4">

{agents.data && agents.data.agents.docs.map((data,key) =>      <div className="col-md-6 col-lg-4">
             <div className="px-2 py-1 card-box mb-4">
             <Link href={"/seller/"+data.email}> 
                    <div className=" text-center row" href={"/seller/"+data.email}>
                      

                      <div className="avatar avatar-xl  mt-4 col-3  ">
                        <a className="ml-2" >
                        { data.image ? 
                                       <img src={CLOUDINARY_URL+"w_200,h_200,c_crop,g_face,r_max,c_thumb/"+data.image.image_id}  className="avatar-img " />
                                    : <img className="rounded " src="vendors/images/no-user-image.jpg"  alt=""/>} 
                        </a>
                      </div>


                      <div className="my-2 p-2 ml-2 ">
                        <strong className="font-16 my-0 ml-0">{data.fullname} </strong>
                        <p className="small text-muted mb-1">{data.email}</p>
                        <p className="middle"><span className="badge badge-light text-success">{data.phone} <i className="icon-copy dw dw-phone-call mx-2"></i></span></p>
                      </div>
                    </div> 
                    </Link>
                    {/*  */}
                    <div className="">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                          <small>
                          <i className="icon-copy dw dw-shopping-cart-1 fe-16  mx-2 my-2"></i>
                           <GetProperty email={data.email} />    </small>
                        </div>
                        <div className="col-auto pr-4">
                          <div className="file-action ">
                          <a onClick={e=>setMessageModal(e,data)} className="icon-copy dw dw-message text-dark fe-24" href="modal" data-toggle="modal" data-target="#modal"></a>
                          </div>
                        </div>
                      </div>
                    </div> 
                    {/*  */}
                  </div>
                </div> )}

              
    </div>          
        
          <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pd-5">
<h6 className="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>

                      <div className="modal-body pd-5">
                       <Message user={modalUser} cardBox={false} />
                      </div>
                      <div className="modal-footer">
                        
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>

                  
                </div>



   <More 
               hasNext={agents.data.agents.hasNextPage} 
                hasPrev={agents.data.agents.hasPrevPage} next={loadNext} prev={loadPrev} />
      
                
                </section>

);
}

export default AgentsData;
