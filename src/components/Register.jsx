import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Page</h2>
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
