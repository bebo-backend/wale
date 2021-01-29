
import PropTypes from 'prop-types'
import Link from 'next/link'
import React,{ useState } from 'react';


const Form = ({ errorMessage, onSubmit,onChange=f=>f,load=false }) => {
  
  const [account, setAccount] = useState('User');
  const button = (content="User")=>{


    return 		<label className={"btn "}>
    <input type="radio" name="options" id="admin" value={content}  />
    <div class="icon">
      
      {content==="Agent" ? <img src="vendors/images/briefcase.svg" class="svg" alt="" />:
      <img src="vendors/images/person.svg" class="svg" alt="" />
  }
  </div>
    <span>I'm Anonymous </span>
    {content}
  </label>
  }


 
  
  return (
  <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6 col-lg-7 ">
        <h1 className="pt-4 text-center"> Find your favourite houses, apartments and properties around you...</h1>
					<img  src="vendors/images/login-page-img.png" alt="" />

      
				</div>
				<div class="col-md-6 col-lg-5">
					<div class="login-box bg-white box-shadow border-radius-10">
						<div class="login-title">
							<h2 class="text-center text-primary">Welcome ...</h2>
						</div>
						<form>
							<div class="select-role">
								<div class="btn-group btn-group-toggle" data-toggle="buttons">
{button()}


								</div>
							</div>

{errorMessage && <div class="alert alert-danger" role="alert"> {errorMessage} </div> }
              

							<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" name="email" placeholder="Enter your e-mail" onChange={onChange} />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="icon-copy dw dw-user1"></i></span>
								</div>
							</div>
							<div class="input-group custom">
								<input type="password" name="password" class="form-control form-control-lg" placeholder="**********" onChange={onChange} />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="dw dw-padlock1"></i></span>
								</div>
							</div>
							<div class="row pb-30">
								<div class="col-6">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Remember</label>
									</div>
								</div>
								<div class="col-6">
									<div class="forgot-password"><a href="forgot-password.html">Forgot Password</a></div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-12">
									<div class="input-group mb-0">
										{/* <!--
											use code for form submit
											<input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In"/>
										--> */}
										<a class="btn btn-primary btn-lg btn-block text-white" onClick={onSubmit}>Sign In 
										{load &&	
											 <span class="spinner-grow spinner-grow-sm mx-4" role="status" >
												 </span>}</a>
									</div>
									<div class="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OR</div>
									<div class="input-group mb-0">
                    <Link href="/register">
										<a class="btn btn-outline-primary btn-lg btn-block" href="/register">
                      New to wale.ng ? Create Account</a>
                      </Link>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

)
                  }

export default Form

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
