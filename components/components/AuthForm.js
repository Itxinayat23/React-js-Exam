// import React, { useState } from 'react';
// import { auth } from './firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import './AuthForm.css';

// const AuthForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(true);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     try {
//       if (isRegistering) {
//         await createUserWithEmailAndPassword(auth, email, password);
//         setSuccess('Registration successful! Please log in.');
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         setSuccess('Login successful!');
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-form">
//         <h2>{isRegistering ? 'Register' : 'Login'}</h2>
//         {error && <p className="error">{error}</p>}
//         {success && <p className="success">{success}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
//         </form>
//         <button className="toggle-button" onClick={() => setIsRegistering(!isRegistering)}>
//           {isRegistering ? 'Switch to Login' : 'Switch to Register'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;