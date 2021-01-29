
import PropTypes from 'prop-types'
import Link from 'next/link'
import React,{ useState } from 'react';


const RegisterForm = ({ errorMessage, onSubmit,onChange=f=>f,load=false }) => {
  
  const [account, setAccount] = useState('User');
  const button = (content="User")=>{

const active = account == content && 'active';

    return 		<label className={"btn "+active}>
    <input type="radio" name="options" id="admin" value={content}  />
    <div class="icon">
      
      {content==="Agent" ? <img src="vendors/images/briefcase.svg" class="svg" alt="" />:
      <img src="vendors/images/person.svg" class="svg" alt="" />
  }
  </div>
    <span>I'm </span>
    {content}
  </label>
  }


 
  
  return (
  <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6 col-lg-7">
        <h1 className="text-center"> Sign up now and Sell or Rent your property for million of users</h1>
					<img src="vendors/images/register-page-img.png" alt="" />

      
				</div>


				<div class="col-md-6 col-lg-5">


					<div class="login-box bg-white box-shadow border-radius-10">
						<div class="login-title">
							<h2 class="text-center text-primary"><i class="icon-copy fe fe-home"></i> Sign up ...</h2>
						</div>


            
						<form>
							<div class="select-role">
		
							</div>


              

<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" name="fullname" placeholder="Full name" onChange={onChange} />
								<div class="input-group-append custom">
									<span class="input-group-text">
                    <i class="icon-copy dw dw-user1"></i></span>
								</div>
							</div>

							{errorMessage && errorMessage.fullname && <div class="alert alert-danger" role="alert"> {errorMessage.fullname} </div> }



							<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" name="email" placeholder="Enter your e-mail" onChange={onChange} />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="icon-copy fe fe-mail"></i></span>
								</div>
							</div>
							{errorMessage && errorMessage.email && <div class="alert alert-danger" role="alert"> {errorMessage.email} </div> }

							<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" name="phone" placeholder="Phone number" onChange={onChange} />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="icon-copy fe fe-phone"></i></span>
								</div>
							</div>
							{errorMessage && errorMessage.phone && <div class="alert alert-danger" role="alert"> {errorMessage.phone} </div> }

							<div class="input-group custom">
								<input type="password" name="password" class="form-control form-control-lg" placeholder="**********" onChange={onChange} />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="dw dw-padlock1"></i></span>
								</div>
							</div>

							{errorMessage && errorMessage.password && <div class="alert alert-danger" role="alert"> {errorMessage.password} </div> }
						
							<div class="form-group">
																<div class="custom-control custom-checkbox mb-5">
																	<input type="checkbox" class="custom-control-input" id="customCheck1-1"/>
																	<label class="custom-control-label weight-400" for="customCheck1-1">I agree to receive notification emails</label>
																</div>
															</div>
							<div class="row">
								<div class="col-sm-12">
									<div class="input-group mb-0">
										{/* <!--
											use code for form submit
											<input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In"/>
										--> */}
										<a class="btn btn-primary btn-lg btn-block text-white"
										 onClick={onSubmit}>Create Account 
										 	{load &&	
											 <span class="spinner-grow spinner-grow-sm mx-3" role="status" >
												 </span>}</a>
								

									</div>
									<div class="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OR</div>
									<div class="input-group mb-0">
                    <Link href="/login">
										<a class="btn btn-outline-primary btn-lg btn-block" href="/login">
                    You already have an account ? Log in</a>
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

export default RegisterForm

RegisterForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
