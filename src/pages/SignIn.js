import { FormSignIn } from '../components/FormSignIn';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export  function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { token }} = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8080',
        url: '/users/sign-in',
        data: { email, password }
      });
      localStorage.setItem('token', token);
      history.push('/profile');
    }
    catch (err) {
      localStorage.removeItem('token');
      setErrors({ account: 'User invalid, does not create the account' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default: break;
    }
  };

  return (
    <FormSignIn
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      handleChange={handleChange}
      errorsPassword={errors.password}
      errorsAccount={errors.account}
    />
  )
}
