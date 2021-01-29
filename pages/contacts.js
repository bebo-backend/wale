
 import React  from "react"
 import Layout from "../components/contrib/layout"

 const Contacts = () => {
     return ( 
 
        <Layout title="contacts us "  >

            <main id='main' style={{'backgroundColor':'white'}}>


            <section class="breadcrumbs mb-4 py-4">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h4>Contact</h4>
          <ol>
            <li><a href="/">Home</a></li>
      
          </ol>
        </div>

      </div>
      <hr />
    </section>



        
    <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
    <div class="container">

      <div class="row">

        <div class="col-lg-6">

          <div class="row">
            <div class="col-md-12">
              <div class="info-box">
                <i class="bx bx-map"></i>
                <h3 className="my-3">Our Address</h3>
                <p>No 27, Adelakun, Aradagun, Olorunda LCDA, Badagry</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box">
                <i class="bx bx-envelope"></i>
                <h3 className="my-3">Email Us</h3>
                <p>oluwamotunde@gmail.com</p> <p>oluwamoshadrach16@yahoo.com</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box">
                <i class="bx bx-phone-call"></i>
                <h3 className="my-3">Call Us</h3>
                <p>+234 8149913012</p> <p>+2347062221190</p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-6 my-4">
          <form  method="post" role="form" class="php-email-form">
            <div class="form-row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
              </div>
              <div class="col-md-6 form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div class="validate"></div>
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div class="validate"></div>
            </div>
            

            <div class="mb-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message"></div>
            </div>


            
            <div class="text-center">  <button type="submit" class="btn btn-primary my-2">
            Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  </main>

  </Layout>

);
}


export default Contacts