import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const sendCredentialsToAPI = async (uname, pwd) => {
    const credentials = new URLSearchParams();
    credentials.append('Uname', uname);
    credentials.append('Pwd', pwd);

    


    try {
      const response = await axios.post('http://localhost:5020/Login', credentials);
      console.log('Credentials sent successfully!', response.data);
      if (response.data.message === "Login successful") {
        document.getElementById("sp").innerHTML = "<h2>Login Successfully!!<h2>"
      }
      // Handle the response here, such as setting tokens or updating UI based on success
    } catch (error) {
      alert("You are not a user Please Register");
      // console.error('Error sending credentials:', error);
      setError('Failed to log in. Please try again.');
      // Handle error scenarios or update UI with error message
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendCredentialsToAPI(username, password);
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <section className="text-center text-lg-start">
          {/* <style>
          cascadingRight: {
      cascadingRight:{
        marginRight:"50px",
      }
      margin-right: -50px;
  }

  @media (max-width: 991.98px) {
      .cascading-right {
          marginRight: 0;
      }
  }
          </style> */}


          <div className="container py-4">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card cascading-right">
                  <div className="card-body p-5 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">Sign up now</h2>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                          <label htmlFor="username" className="form-label">Username:</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <label htmlFor="password" className="form-label">Password:</label>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                  <span id="sp"></span>

                    {/* <div className="text-center">
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                              <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                              <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                              <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                              <i className="fab fa-github"></i>
                            </button> */}


                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  className="w-100 rounded-4 shadow-4" alt="" />
              </div>
            </div>
          </div>
          </section>
        






















        {/* <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <span id="sp"></span> */}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  );

}
export default Login;
