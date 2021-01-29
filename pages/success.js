import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/contrib/layout'
import Form from '../components/auth/Form'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Success = () => {
 


  return (
    <Layout title="Log in">
      <div className=" d-flex w-100 justify-content-center h-100 py-4 mt-4">
   
      <div className="w-50  "  style={{'backgroundColor':'white'}}>

      <div class="modal-header justify-content-center">


      </div>
<h2 className="justify-content-center d-flex my-4"> Form Submitted</h2>
<p className="justify-content-center d-flex text-success my-4 "> <i className="fe fe-32 fe-check-circle"></i> </p>
<p className="justify-content-center d-flex my-4"> Property submitted successfully</p>


<div class="modal-footer justify-content-center">
<Link href="/">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">
                            <i className="fe fe-16 fe-home"></i>    Home</button>
                            </Link>

<Link href="/submitproperty">
							<button type="button" class="btn btn-primary" data-dismiss="modal">Upload More</button>
                            </Link>
                            <Link href="/dashboard/profile">
							<button type="button" class="btn btn-success" data-dismiss="modal">My Profile</button>
                            </Link>
						</div>

</div>
      </div>
      
      
      

    </Layout>
  )
}

export default Success