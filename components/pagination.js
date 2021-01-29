
import { mutate } from 'swr'

import useUser from '../lib/useUser'


export const More = ({hasNext,hasPrev,next,prev,more=false})=>{
 
 const { user, mutateUser } = useUser()

   


const setNextPage =(e)=>{

e.preventDefault()

	if (hasNext){

next()

	}

}

const setPrevPage = (e)=>{

e.preventDefault()

	if (hasPrev){

		prev()
	}
}


return (


   <div className="blog-pagination mb-30">
            <div className="btn-toolbar justify-content-center mb-15">
              <div className="btn-group ">
{!more && hasPrev &&
              <a className="btn btn-secondary next px-4 m-4 text-white" onClick={setPrevPage}>
                                   <i className="fa fa-angle-double-left"></i> Prev </a>
                               }

{!more && hasNext &&                <a className="btn btn-primary next px-4 m-4 text-white" onClick={setNextPage}>
                                   Next <i className="fa fa-angle-double-right"></i></a>
                               }

                               {more && hasNext &&                <a className="btn btn-primary next px-4 m-4 text-white" onClick={setNextPage}>
                                   More <i className="fa fa-angle-double-down"></i></a>
                               }

                               {!more && !hasNext && !hasPrev &&  <a disabled className="btn text-muted btn-outline-success next px-4 m-4" >
                                   <i className="fa fa-empty"></i> No more data </a> }

                                     {more && !hasNext  &&  <a disabled className="btn text-muted btn-outline-success next px-4 m-4" >
                                   <i className="fa fa-empty"></i> No more data </a> }

                                   

                
              </div>
            </div>
          </div>
	)

}


