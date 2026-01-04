import React, { useEffect, useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';

function Register() {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className={`main ${isLoaded ? 'loaded' : ''}`}>
      <div className='main_session'>
        <div className='main_session_a'>
          <div className='main_session_a_container'>
            <div className='dora_logo'>
              <div>Buildora</div>
            </div>
            
            <div className='main_session_a_login'>
              <div>
                <div className='dora_title'>Create Your Account</div>
                <div className='dora_description'>Enter correct details to create your account</div>
              </div>

              <div>
                <div>
                  <div>

                    <div className='dora_prime_container'>
                        <div className='dora_prime_input'>
                            <div className='dora_input_label'>First Name</div>
                            <div className='dora_input'><input placeholder='First Name' type='text'></input></div>
                        </div>
                        <div className='dora_prime_input'>
                            <div className='dora_input_label'>Last Name</div>
                            <div className='dora_input'><input placeholder='Last Name' type='text'></input></div>
                        </div>

                    </div>

                    <div className='dora_prime_input'>
                      <div className='dora_input_label'>Email</div>
                      <div className='dora_input'><input placeholder='abc@example.com' type='email'></input></div>
                    </div>
                    <div className='dora_prime_input'>
                      <div className='dora_input_label'>Password</div>
                      <div className='dora_input'><input placeholder='Enter Your Password' type='password'></input></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='dora_login_options'>
                <div className='dora_remember'>
                  <div><input type='checkbox'></input></div>
                  <div className='dora_text'>Remember me</div>
                </div>
                <div className='dora_text'>Forgot Your Password?</div>
              </div>

              <div className='dora_primt_btn'>
                <button>Create Account</button>
              </div>

              <div className='dora_text'>Already have an account? <span><Link className='link' to="/">Log in</Link></span></div>
            </div>

            <div className='dora_footer_text'>
              <div className='dora_text'>Copyrights 2026 Buildora Enterprice LTD</div>
              <div className='dora_text'>Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className='main_session_b'>
          <div className='main_session_b_image'>
            <img alt='dora_image' src='https://images.pexels.com/photos/35454115/pexels-photo-35454115.jpeg'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register