import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

import PasswordRecoveryForm from '../components/PasswordRecovery';

function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [errorsRecovery, setErrorsRecovery] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/email/recovery-pass',
        data: { email },
      });
      enqueueSnackbar(
        'Te hemos enviado un correo de recuperacion de contraseña, por favor revisa tu correo',
        {
          variant: 'success',
        }
      );
    } catch (error) {
      setErrorsRecovery(error);
      enqueueSnackbar('El email no existe', {
        variant: 'error',
      });
    }
  };

  return (
    <PasswordRecoveryForm
      errorsRecovery={errorsRecovery}
      email={email}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default PasswordRecovery;
