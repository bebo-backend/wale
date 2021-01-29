import React, {useState} from 'react'
import PropertyData from "../components/propertydata"
// import {useRouter} from 'next/router'






 const LatestProperty = () => {

const [search,setSearch] = useState('All');

// const router = useRouter()

const getTabData = (e)=>{
e.preventDefault()
	setSearch(e.target.text)
}

    return (  
    

<section className="mb-12 bg-white fiat-view-pic " style={{paddingTop:'8px',paddingBottom:'8px'}}>
        <div class="container-fluid ml-0  ">
            <div class="row my-4 py-8">
                <div class="col-lg-5 mt-6">
                    <div class="section-title mb-2">
                        <h4 className="  px-4 py-2 text-black font-16 font-weight-bold" style={{borderLeft:'4px solid rgb(0, 123, 181)'}}>LATEST HOUSING</h4>
                    </div>
                </div>
                <div class="col-lg-7 ">

              
               


	<div class="height-100-p overflow-hidden">
	<div class="profile-tab height-100-p property">
	  <div class="tab height-100-p">
		  <ul class="nav nav-tabs customtab" role="tablist">
	  <li class="nav-item">
		  <a class="nav-link active p-1" data-toggle="tab" role="tab" onClick={getTabData}>All</a>
	  </li>

	  <li class="nav-item">
		  <a class="nav-link p-1" data-toggle="tab" role="tab" onClick={getTabData} >Apartment</a>
	  </li>
	  <li class="nav-item">
		  <a class="nav-link p-1" data-toggle="tab" role="tab" onClick={getTabData}>House</a>
	  </li>
	  <li class="nav-item">
		  <a class="nav-link p-1" data-toggle="tab" role="tab" onClick={getTabData}>Rooms</a>
	  </li>
	  <li class="nav-item">
		  <a class="nav-link p-1" data-toggle="tab" role="tab" onClick={getTabData}>Office</a>
	  </li>
	  <li class="nav-item">
		  <a class="nav-link p-1" data-toggle="tab" role="tab" onClick={getTabData}>Warehouse</a>
	  </li>
  </ul>



</div></div></div>
				
						
				

                </div>
                </div>

               
                </div>

				<PropertyData search_data={search} query={"searchfilter=type"}/>   

                </section>

);
}

export default LatestProperty;
