import { useState } from 'react';
import { FormSignUp } from '../components/SignUp/FormSignUp';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()) {
      // eslint-disable-next-line
      console.log('yes');
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

    if (!arePasswordEqual) {
      setErrors({password: 'La contraseña no coincide'});
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
        errors={errors.password}
      />
    </div>
  );
}
