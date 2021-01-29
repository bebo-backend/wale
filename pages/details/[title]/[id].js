import { useState } from 'react'

import Layout from '../../../components/contrib/layout'

import { useRouter } from 'next/router'

import {NextSeo} from 'next-seo'
import ViewDetail from '../../../components/viewproduct'
import {Message } from '../../../components/DetailComponents'

const Detail = ({user}) => {

   
    const router = useRouter()
    const {title,id}  = router.query


 return (
    <Layout title={title}>

    


    <NextSeo title={title} titleTemplate='%s | wale.ng'
description={"View product - "+title} />


<ViewDetail title={title} id={id} />

    <div class="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header pd-5">
<h6 class="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>

                      <div class="modal-body pd-5">
                       <Message user={user} cardBox={false} />
                      </div>
                      <div class="modal-footer">
                        
                        <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>

</div>




     

    </Layout>
  )
                    
}


export const getServerSideProps = async ({query}) => {
 
const {id,title} = query

  const res = await fetch('http://localhost:3000/api/actions/setview/'+String(id))
  const json = await res.json()
  return { props:{user:json.user}}
}




export default Detail