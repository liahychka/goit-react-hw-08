import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
      dispatch(register(values))
          .unwrap()
      .then(res => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('invalid credentials');
      });
    options.resetForm();
}

  return (
       <div>
      <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
      <Form>
              <label>
                  <span>name</span>
                  <Field type="text" name="name" />     
        </label>
              <label>
                <span>email</span>
               <Field type="email" name="email"/>   
          </label>
                    <label>
                <span>password</span>
               <Field type="current-password" name="password"  />   
          </label>
          
			<button type="submit">Register</button>
		</Form>
    </Formik>
      </div>
  )
}

export default RegistrationForm