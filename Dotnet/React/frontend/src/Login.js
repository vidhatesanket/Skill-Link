// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const sendCredentialsToAPI = async (username, password) => {
//     const credentials = {
//       username: username,
//       password: password,
//     };

//     try {
//       const response = await axios.post('https://reqres.in/api/register', credentials);
//       console.log('Credentials sent successfully!', response.data);
//       // Handle response or update UI based on the API response
//     } catch (error) {
//       console.error('Error sending credentials:', error);
//       // Handle error scenarios
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendCredentialsToAPI(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendCredentialsToAPI = async (username, password) => {
    const credentials = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post('https://reqres.in/api/register', credentials);
      console.log('Credentials sent successfully!', response.data);
      // Assuming the API returns a token or user data upon successful registration
      setSuccessMessage('Registration successful!'); // Update UI or perform actions with the response data
    } catch (error) {
      console.error('Error sending credentials:', error);
      setError('Failed to register. Please try again.'); // Update UI with an error message
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccessMessage(''); // Reset success message
    sendCredentialsToAPI(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <div>
        <label htmlFor="username">Username:</label>
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
    </form>
  );
};

export default LoginForm;

