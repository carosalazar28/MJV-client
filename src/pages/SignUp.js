import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormSignUp } from '../components/SignUp/FormSignUp';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
      try {
        const { data: { token }} = await axios({
          method: 'POST',
          baseURL: 'http://localhost:8080',
          url: '/users/sign-up',
          data: { name, email, password }
        });
        localStorage.setItem('token', token);
        history.push('/profile');
      }
      catch (err) {
        localStorage.removeItem('token');
        setErrors({ account: 'User invalid, does not create the account' });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default: break;
    }
  };

  const validate = () => {
    const arePasswordEqual = !!password && !!confirmPassword && password === confirmPassword;
    const securePassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password);

    if (!arePasswordEqual) {
      setErrors({password: 'The password does not match'});
      return false;
    }

    if(!securePassword) {
      setErrors({password: 'The password must be at least 8-16 characters long, at least one digit, at least one lowercase, and at least one uppercase. It may NOT have other symbols'});
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Sign up</h1>
      <FormSignUp
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errorsPassword={errors.password}
        errorsAccount={errors.account}
      />
    </div>
  );
}
