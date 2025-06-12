import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    if (email === storedEmail) {
      navigate('/home');
    } else {
      alert('Invalid Email');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>🔐 Login Page</h2>
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
