import React, {useState} from 'react'
import Link from 'next/link';
import Layout from "../components/contrib/layout"

import Agents from "../components/agents"

import {useRouter} from 'next/router'
import SearchComponent from '../components/searchComponent'
import SearchFilter from '../components/search'
import SortComponent from '../components/sortcomponent'
import PropertyData from "../components/propertydata"
import gistfile1 from '../components/contrib/gistfile1'
import {NextSeo} from 'next-seo'



 const main = () => {


const [search, setSearch] = useState("")
const [sort, setSort] = useState([])
const [filter, setSearchFilter] = useState('')



const route = useRouter()

const {search_data,...restQuery} = route.query

const setFilter=(data)=> setSearchFilter(data)

const sortedData = (data)=>{

	setSortData(data)
}

const queryToString=  (filter)=>{


  
	if (filter){
return "searchfilter="+filter

	} else {
    
    let string_url=""
  
    
  
    Object.keys(restQuery).map(obj=>{
  
    string_url+=obj+'='+route.query[obj]+'&'
  
  })
  
//   console.log(string_url);

  return string_url
}
  
                      
     
    
    }


const returnFilter = (filter)=>{


  const propertyType = ["Apartment","Office","House","Hotel","Restaurant","Rooms","Warehouse"]
  const status = ["For Sale","For Rent","For Roomates"]
const rooms = [1,2,3,4,5,6]
	return  <> <a href="#" id="dashboardDropdown" className="dropdown-toggle nav-link p-0 mx-3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="" style={{color:'black',fontWeight:'bold'}}>{filter}</span><span className="sr-only">(current)</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="dashboardDropdown">

                { filter == 'Type' && propertyType.map((value,key)=>(

  <a className="nav-link  " key={key} onClick={e=>{
    e.preventDefault();
    setSearch(value)
    setFilter(filter)
    
  }} >
                    <span className="ml-1">{value}
                    </span></a>

                  ))}


           

                   { filter == 'State' &&  gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
     <a className="nav-link  " key={index} onClick={g=>{
    g.preventDefault();
     setSearch(e.state.name)
     setFilter(filter)
  }} >
                    <span className="ml-1">{e.state.name}
                    </span></a>


</>



))

}



                   { filter == 'Status' &&  status && Object.values(status).map((value,index)=>(
 
    
     <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(value)
     setFilter(filter)

  }} >
                    <span className="ml-1">{value}
                    </span></a>






))

}



       { filter == 'Bedrooms' &&  rooms && Object.values(rooms).map((value,index)=>(
 
    
     <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(value)
     setFilter(filter)
  }} >
                    <span className="ml-1">{value} Room(s)
                    </span></a>

))

}




       { filter == 'Bathrooms' &&  rooms && Object.values(rooms).map((value,index)=>(
 
    
     <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(value)
     setFilter(filter)
  }} >
                    <span className="ml-1">{value} Room(s)
                    </span></a>

))

}




{ filter == 'City' &&  gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
     <span className="nav-link font-weight-bold " key={index} onClick={e=>{
    e.preventDefault();
    
  }} >
                    <span className="ml-1">{e.state.name}
                    </span></span>

           {Object.values(e.state.locals).map((city,index)=>(

    
  <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(city.name)
     setFilter(filter)
  }} >
                    <span className="ml-1">{city.name}
                    </span></a>

))}




</>



))

}



                  
                  </div>
           </>       

}



    

   return (  
        <Layout title="Search " >


  <NextSeo title={search?search:search_data} titleTemplate='%s | postlist.ng'
description={"Search - " + search?search:search_data } />



<main id="main" >


<div class="page-header my-4 ">
					<div class="row my-0" >
						<div class=" col-sm-12">
						
							<nav aria-label="breadcrumb " role="navigation">

								<ol class="breadcrumb pb-2 ">
									<li class="breadcrumb-item"><Link href="/">
									<a href="/">Home</a></Link></li>
										<li class="breadcrumb-item text-muted ">
										Results for {search_data}</li>

									
								
								</ol>

								
							</nav>

							<nav aria-label="breadcrumb" role="navigation ">

								<ol class="breadcrumb  ">
		

									<li class="breadcrumb-item active filter " aria-current="page">

                                <i class="icon-copy dw dw-filter1 mr-2"></i>  <div className="row">
										{
											Object.values(['State','City','Type','Status','Bedrooms','Bathrooms']).map(filter=> <span className="m-0"> 
												{returnFilter(filter)}</span>)
										}
										 </div>    </li>
								
								</ol>

								
							</nav>
						</div>
					
					</div>
				</div>

                <div class="page-header m-0">
					<div class="row my-2" >
						<div class=" col-sm-6 pt-4">

<SearchComponent setSearch={setSearch} filter={true} setFilter={setFilter} searchFilter={filter} />
</div>

<div class=" col-sm-6 text-right px-2">



<SortComponent  setSort={setSort}  />
</div>

</div>


	 <PropertyData search_data={search?search:search_data} sort={sort} query={queryToString(filter)}  />


</div>

    </main>

</Layout>

);
}

export default main
