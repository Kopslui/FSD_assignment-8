import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css'; // Import the CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // On success, save token to local storage or handle accordingly
        localStorage.setItem('token', data.token); // Store token in localStorage
        alert('Login successful!');
        navigate('/dashboard'); // Redirect to another page, e.g., dashboard
      } else {
        setError(data.message || 'Login failed!');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        
        {/* Display error message */}
        {error && <div className="error-message">{error}</div>}

        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoCapitalize="none" // Disable automatic capitalization
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" className="btn" value="Login" />
          <div>
            If you don't have an account? <Link to="/signup">Signup Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
