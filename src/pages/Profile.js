import { FormProfile } from '../components/FormProfile';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Profile() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [job, setJob] = useState(true);
  const [rolDeveloper, setRolDeveloper] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = process.env.REACT_APP_SERVER_URL;
    console.log(url);
    axios({
      method:'GET',
      baseURL: url,
      url: '/users/',
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then(({ data : { data } }) => console.log('here in get', data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'job':
        setJob(checked);
        break;
      case 'rolDeveloper':
        setRolDeveloper(value);
        break;
      default: break;
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <FormProfile
        handleSubmit={handleSubmit}
        name={name}
        email={email}
        lastname={lastname}
        job={job}
        rolDeveloper={rolDeveloper}
        handleChange={handleChange}
        errorsAccount={errors.account}
      />
    </div>
  );
}
