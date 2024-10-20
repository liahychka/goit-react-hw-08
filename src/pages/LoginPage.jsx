import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
    .unwrap()
      .then(res => {
        toast(`Welcome, ${res.user.name}!`);
        navigate('/');
      })
      .catch(() => {
        toast.error('invalid credentials');
      });
    options.resetForm();
}

    return (
    <div className="hero bg-base-200 min-h-screen">
        <Formik onSubmit={handleSubmit}
          initialValues={initialValues}
          className="card-body">
        <Form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <Field name='email' type="email" placeholder="email" className="input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <Field name='password' type="current-password" placeholder="password" className="input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Log In</button>
        </div>                            
        </Form>
      </Formik>
</div>
  )
}

export default LoginPage