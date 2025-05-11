import  { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import "./auth.css"


const Login = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const navigate = useNavigate();
	const queryClient = useQueryClient();


  const { mutate:loginMutation, isError, error } = useMutation({
    mutationFn: async ({ email, password }) => {
      try {
         const res = await fetch('api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      return data;
      } catch (error) {
        throw new Error(error);
      }
     
    },
    onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ["authUser"]})
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation(inputs);
  };

  const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3 text-white">Login</h3>
        {isError && <div className="alert alert-danger">{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              name='email'
              className="form-control custom-input"
              value={inputs.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control custom-input"
              name='password'
              value={inputs.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type='submit'  className="btn btn-purple w-100">Login</button>
        </form>
        <button className="btn btn-link text-white mt-2" onClick={() => navigate('/signup')}>
          Don’t have an account? Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
