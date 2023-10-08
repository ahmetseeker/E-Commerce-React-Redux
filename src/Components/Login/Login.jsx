import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/slices/authSlice';

const Login = () => {

  const initialState = {
    name: "",
    email: "",
    password: "",
    img: ""
  }

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  const dispatch = useDispatch();

  return (
      <div className='d-flex flex-column gap-4 justify-content-center align-items-center vh-100 bg-light'>
        <div className="card bg-white text-white col-lg-4 shadow">
            <div className="card-header p-5 bg-info text-center m-2 shadow-lg rounded">
                <h1>Login</h1>
            </div>
            <div className="card-body">
                <div className="form-group mt-2">
                    <label htmlFor="name" className="form-label text-secondary">Name</label>
                    <input type="text" id='name' name='name' className='form-control' value={values.name} onChange={onChange}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email" className="form-label text-secondary">Email</label>
                    <input type="email" id='email' name='email' className='form-control' value={values.email} onChange={onChange}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="password" className="form-label text-secondary">Password</label>
                    <input type="password" id='password' name='password' className='form-control' value={values.password} onChange={onChange}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="img" className="form-label text-secondary">Image</label>
                    <input type="text" id='img' name='img' className='form-control' placeholder='Image is optinal!' value={values.img} onChange={onChange}/>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-info w-100 text-white my-2 p-2" onClick={() => dispatch(login(values))}>Login</button>
                <div className='text-center mt-1 p-2 text-secondary'>You don't have an account yet! <strong>Sing Up</strong></div>
            </div>
        </div>
    </div>
  )
}

export default Login