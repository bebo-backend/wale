import React from 'react'
import Link from 'next/link'


const Footer = () => {


return (

    <>
  <footer class="footer-section my-0 bg-white shadow-lg pb-2">
        <div class="container">
            <div class="row py-4">
                <div class="col-lg-4 col-md-6">
                    <div class="fs-about">
                        <div class="fs-logo">
                            <Link href="/">
          <a className="navbar-brand  mr-0" href="/">
          <p className="pt-2"> <i class="icon-copy dw dw-house1 mx-2 text-success" style={{fontSize:'26px'}}></i>
            <span className="h2 text-warning">Wale</span>  
          </p>
          </a>
          </Link>
                        </div>
                        <h6 style={{lineHeight:'28px'}}>We help you find a new home by offering a smart real estate.</h6>
                        

                        <div class="site-social pd-social my-4">
                            <a href="#" style={{background:'blue'}}><i class="fa fa-facebook"></i></a>
                            <a href="#" style={{background:'violet'}}><i class="fa fa-twitter"></i></a>
                            <a href="#" style={{background:'red'}}><i class="fa fa-youtube-play"></i></a>
                            <a href="#" style={{background:'green'}}><i class="fa fa-instagram"></i></a>
                            <a href="#" style={{background:'black'}}><i class="fa fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="fs-widget">
                        <h5 className="my-4 text-dark" >Help</h5>
                        <ul className="footer-link">
                            <li className="my-2"><a href="#">Privacy Policy</a></li>
                            <li className="my-2"><a href="#">Contact Support</a></li>
                            <li className="my-2"><a href="#">Knowledgebase</a></li>
                            <li className="my-2"><a href="#">Careers</a></li>
                            <li className="my-2"><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="fs-widget">
                        <h5 className="my-4 text-dark">Links</h5>
                         <ul className="footer-link" >
                            <li className="my-2">
                            <Link href="/contact">
                            <a href="/contact">Contact</a></Link> </li>
                            <li className="my-2">
                               
                                <Link href="/submitproperty">
                                <a href="/submitproperty">Submit Listing</a>
                                </Link>
                                </li>
                            <li className="my-2">
                             
                                <Link href="/agents">
                                <a href="/agents">Seller</a>
                                </Link></li>
                            <li className="my-2">
                             
                              <Link href="/dashboard/profile">
                              <a href="/dashboard/profile">My Profile</a>
                              </Link>
                              </li>
                            <li className="my-2">
                              
                              <Link href="/register">
                              <a href="/register">Register</a>
                               </Link>
                              </li>
                                   <li className="my-2">
                             
                              <Link href="/login">
                              <a href="/login">Login</a> 
                              </Link></li>
                       
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="fs-widget">
                        <h5 className="my-4">Newsletter</h5>
                        <p>Subscribe to receive our newsletter.</p>
                        <div >
                         <input type="text" class="form-control" placeholder="Enter your email"  />
                          <button type="submit" class="btn btn-primary my-2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-text">
                <p>
  Copyright &copy;{new Date().getFullYear()} All rights reserved by Gks Inc.
</p>
            </div>
        </div>
    </footer>



  {/* <!-- End Footer --> */}

  {/* <!-- Vendor JS Files 
  
  <script src="js/jquery.min.js"></script>

    <script src="js/bootstrap.min.js"></script>

    <script src='js/jquery.stickOnScroll.js'></script>
    <script src="js/config.js"></script>

    <script src='js/select2.min.js'></script>

--> 
*/}

</>
  )
}

export default Footer