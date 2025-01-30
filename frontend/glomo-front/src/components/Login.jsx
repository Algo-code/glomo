// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/api/token/', {
//         username,
//         password,
//       });

//       // Save the token in localStorage
//       localStorage.setItem('access_token', response.data.access);
//       localStorage.setItem('refresh_token', response.data.refresh);

//       // Call onLogin to update the app state
//       onLogin(response.data.access);
//     } catch (error) {
//       setErrorMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {errorMessage && <div>{errorMessage}</div>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
