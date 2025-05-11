import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import "./auth.css"

const Signup = () => {
  const [inputs, setInputs] = useState({username:'', email: '', password: '' });
  const navigate = useNavigate();

	const queryClient = useQueryClient();
  

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({username, email, password }) => {
      try {
        const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
      return data;
      } catch (error) {
        console.error(error);
				throw error;
      }
      
    },
   onSuccess: async () => {
			// toast.success("Account created successfully");
		await	queryClient.invalidateQueries({ queryKey: ["authUser"] });
     		navigate("/"); // Redirect to the home page
		}
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(inputs);
  };

  // best practice
  	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3 text-white">Sign Up</h3>
        {isError && <div className="alert alert-danger">{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">username</label>
            <input
              type="text"
              className="form-control custom-input"
              name='username'
              placeholder="Enter your username"
              value={inputs.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Enter your email"
              name='email'
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
              placeholder="Enter your password"
              name='password'
              value={inputs.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-purple w-100">
            {
							isPending ? "Loading..." : "Sign up"
						}
          </button>
					{isError && <p className='text-red-500'>{error.message}</p>}
        </form>
        <button className="btn btn-link text-white mt-2" onClick={() => navigate('/login')}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
