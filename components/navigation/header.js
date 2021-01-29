import React, {useState} from 'react'
import Link from 'next/link'
import useUser from '../../lib/useUser'
import { useRouter} from 'next/router'
import useSWR from 'swr'
import fetchJson from '../../lib/fetchJson'
import axios from 'axios'
import {More} from '../../components/pagination'
import MenuData from '../../components/menu-data'

import {Message } from '../../components/DetailComponents'
import {CLOUDINARY_URL} from "../../components/contrib/config"


const header = () => {




  const { user, mutateUser } = useUser()

   const {data:account,mutate:mutateAccount} = useSWR(()=>'/api/dashboard/account/'+user.email,axios)


  const [fetchedMessages,setFetchedMessages] = useState()
  const [menu,setMenu] = useState(false)

const cancelMenu = ()=>setMenu(!menu)

const fetchMessage = async (e)=>{

e.preventDefault()


const BASE_URL = '/api/getMessages/'+user?.email+'/?page='+1




// const {data:messages,mutate:mutateMessages} = useSWR(()=>BASE_URL,axios)

const data = axios.get(BASE_URL).then(response=>{


  if(response){

// console.log(response)
setFetchedMessages(response.data.message)


  }


})





}






  const router = useRouter()
  const {query} = router;
  const propertyType = ["Apartment","Office","House","Hotel","Restaurant","Rooms","Warehouse"]


  return (
    <div class="horizontal light w-100  " >
    <div class="wrapper2 w-100">
 
 <nav id="header" className="navbar navbar-expand-lg navbar-light bg-white flex-row border-bottom shadow">
        <div className="container-fluid">
         
        <button className="navbar-toggler mt-2 mr-4  text-muted" onClick={e=>{
e.preventDefault();
setMenu(!menu)
}}>
            <i className="fe fe-menu navbar-toggler-icon fe-32"></i>
           
          </button>

    

<Link href="/">
          <a className="navbar-brand  mr-0 pt-4" href="/">
          <p className="mt-1"> <i class="icon-copy dw dw-fire mx-1  " style={{fontSize:'40px',color:'black'}}></i>
            <span className=" text-warning font-weight-bold h2">wale</span>  
          </p>
          </a>
          </Link>
     

          <div className="navbar-slide bg-white ml-lg-4" id="navbarSupportedContent">
            <a href="#" className="btn toggle-sidebar d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
              <i className="fe fe-x"><span className="sr-only"></span></i>
            </a>
            <ul className="navbar-nav header-link ">

            <li className="nav-item first mx-1">
                <a href="/" id="dashboardDropdown" className=" nav-link" role="button" onClick={e=>{
                  e.preventDefault();
                  router.push("/")
                }}>
                  <span className="ml-lg-2" style={{color:'black',fontWeight:'bold'}} >HOME</span><span className="sr-only">(current)</span>
                </a>
              
              </li>

              
              <li className="nav-item dropdown mx-1  ">
                <a href="#" id="dashboardDropdown" className="dropdown-toggle nav-link no-arrow  " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="ml-lg-2 " style={{color:'black',fontWeight:'bold'}}>HOUSING</span><span className="sr-only">(current)</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="dashboardDropdown">

                {propertyType.map((value,key)=>(

  <a className="nav-link pl-lg-2 " onClick={e=>{
    e.preventDefault();
    router.push("/search/?search_data="+value+"&searchfilter=type")
  }} >
                    <span className="ml-1">{value}
                    </span></a>

                  ))}
                  
                  </div>
              </li>
      
              <li className="nav-item mx-1">
                <a href="" onClick={e=>{
                  e.preventDefault();
                  router.push("/agents")
                }} id="dashboardDropdown" className=" nav-link" role="button">
                  <span className="ml-lg-1 " style={{color:'black',fontWeight:'bold'}}>AGENTS</span><span className="sr-only">(current)</span>
                </a>
              
              </li>


            <span  className="nav-item" >
<Link href="/submitproperty">
<button type="button" class="btn btn-primary  mx-4 py-2" style={{borderRadius:'0px'}}><span class="fe fe-plus fe-16 mr-1 text-gray"></span> SUBMIT HOUSING</button>
</Link>
</span>

            </ul>

          </div>
        


          <ul className="navbar-nav d-flex flex-row">

      <ViewMessage messages={fetchedMessages} notification={true} user={user} fetchMessage={fetchMessage}   />






            <div class="dropdown ml-lg-0 mx-4 my-2 text-muted" >
											<a class="btn btn-link font-24  p-0 line-height-1 md-title   dropdown-toggle pd-social " href="#" role="button" data-toggle="dropdown" style={{
                        marginTop:'0px'}}>
                    
                  {user?.isLoggedIn && account && account.data.user.image ?
                      <img src={CLOUDINARY_URL+"w_31,h_31,g_face,r_max,c_thumb/"+account.data.user.image.image_id}  className="avatar-img " />

                   : <img src="/vendors/images/no-user-image.jpg" alt="...Image" className="md-icon " style={{width:'45px',height:'40px'}} />
                  }


              
											</a>

											<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list py-2">
												<a class="dropdown-item" href="#">
                         
                        {user?.isLoggedIn ?  
              
              <a className="nav-link py-0 " href="/logout" onClick={async (e) => {
                e.preventDefault()
                await mutateUser(fetchJson('/api/auth/logout'))
                router.push('/login')
              }} > <i class="dw dw-logout-1 mr-1"></i> Log out</a>
             
              :   

              <a className="nav-link " href="login"> <i class="dw dw-login"></i> 
               <Link href="/login">
              Log in </Link> </a> 
              
            }</a>
            
												<a class="dropdown-item">
 <a className="nav-link py-1 "  onClick={e=> {
                e.preventDefault()
               
                router.push('/dashboard/profile')
              }} > <i class="dw dw-edit2 ml-1 mr-2"></i> Profile</a>



                      
                </a>
                
										           <a class="dropdown-item">
 <a className="nav-link py-1 "  onClick={e=> {
                e.preventDefault()
               
                router.push('/submitproperty')
              }} > <i class="icon-copy fa fa-plus-circle ml-0 mr-2"
               aria-hidden="true"></i>  Upload property</a>



                      
                </a>
                        
                        <a class="dropdown-item" href="#">
                        

                        <a className="nav-link py-1 "  onClick={e=> {
                e.preventDefault()
               
                router.push('/help')
              }} > <i class="dw dw-help ml-1 mr-2"></i> Help </a> 


                     </a>
                        <a class="dropdown-item" href="/">

                        <a className="nav-link py-1 "  onClick={e=> {
                e.preventDefault()
               
                router.push('/')
              }} > <i class="dw dw-home ml-0 mr-2"></i> Home  </a>

</a>
											</div>
										</div>


     
          </ul>
        </div>
      </nav>
  

    </div>


          {menu && <div className="menu-data card-box"  >

<p className="pt-4 px-4 btn-link" onClick={e=>setMenu(!menu)}>
<i class="icon-copy dw dw-undo2 mr-3"></i>Menu
</p>
< hr />

<MenuData cancelMenu={cancelMenu} />
    </div>

  }
    </div>


    );
}


export default header












export const ViewMessage = ({messages,notification=false,user={},loadNext,loadPrev,fetchMessage})=>{


  const router = useRouter()

const [modalUser,setModalUser] = useState({})

const setMessageModal = (e,data)=>{

e.preventDefault()
setModalUser(data);

}



  return (   notification ?  <div class="user-notification pt-3">

        <div class="dropdown pt-2 mr-1">
          <a class="dropdown-toggle no-arrow"  role="button" data-toggle="dropdown" onClick={fetchMessage}>
            <i class="icon-copy dw dw-chat-1 mx-1 " style={{fontSize:'25px'}}></i>
   
          </a>

        

          <div class="dropdown-menu dropdown-menu-right">
            <div class="notification-list mx-h-350 " style={{overflowY:'scroll'}}>
              <ul>
                              <li className="w-100 p-2 py-3 mb-4  font-weight-bold" style={{
                                background:'azure'
                              }} onClick={e=>{

                                router.push("dashboard/profile")
                              }}>


 Latest Messages  - ( View all )



                </li>
              {

               user.isLoggedIn && messages ? Object.values(messages.docs).map((value,key)=>(
 <li className="row mx-1 mb-1">

               
                  <span className="col-4">
                    {value.sender.image ?
                     <img src={CLOUDINARY_URL+"w_80,h_80,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img " />
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className="avatar-img rounded " />

                  }
                  </span>

                  <span className="col-8">
                    <h6 className="mb-1 font-weight-bold f-14">{value.sender.fullname}</h6>
                    <p className="text-muted f-12">{value.text} ...</p>

                    </span>
                
                </li>

                ))
                : <p className="text-muted"> Please login to view messages </p>
              }
               
              
              </ul>
            </div>
          </div>
        </div>
      </div> :
            <div class="notification-list" >
              <ul>
                              <li className="w-100 p-2 py-3  mb-4 font-weight-bold" style={{
                                background:'azure'
                              }}>
Latest Messages ( {messages && messages.data.message.docs.length * messages.data.message.page} )
                </li>
             
              {

               messages ? Object.values(messages.data.message.docs).map((value,key)=>(
 <li className="row mx-1 my-2">

               
                  <p className=" col-3 my-1">
                    {value.sender.image ?
                   
                    <img src={CLOUDINARY_URL+"w_80,h_80,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img " />

              
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className="avatar-img rounded " style={{width:'80px',height:'70px'}} />

                  }
                  </p>

                  <p className=" col-7">
                    <h6 className="mb-1 font-weight-bold f-14">{value.sender.fullname}</h6>
                    <p className="text-muted f-12">{value.text} ...</p>

                    </p>
                     <div class="col-2">
                          <button class="file-action btn btn-outline-primary pr-3 pl-3  " onClick={e=>setMessageModal(e,value.sender)} >
                       <i style={{fontSize:'19px'}} 
                          class="icon-copy dw dw-message  font-weight-bold" href="modal" data-toggle="modal" data-target="#modal2">
                          </i>
                          </button>
                        </div>

                
                </li>

                ))
                : <p className="text-muted"> No new messages </p>
              }
               
               <More 
               hasNext={messages && messages.data.message.hasNextPage} 
                hasPrev={messages && messages.data.message.hasPrevPage} next={loadNext} prev={loadPrev} />
              
              </ul>
           

           <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                     <div class="modal-header pd-5">
<h6 class="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>
                    
                      <div class="modal-body pd-5">
                       <Message user={modalUser} cardBox={false} />
                      </div>
                      <div class="modal-footer">
                        
                        <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>
                </div>



            </div>

      )
}