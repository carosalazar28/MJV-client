import { FormProfile } from '../components/FormProfile';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

export function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [job, setJob] = useState(true);
  const [rolDeveloper, setRolDeveloper] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoading(true);
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data: { data } }) => {
        setName(data.name);
        setEmail(data.email);
        setLastname(data.lastname);
        setJob(data.job);
        setRolDeveloper(data.rolDeveloper);
        setBirthdayDate(data.birthdayDate);
        setLoading(false);
      })
      .catch((err) => {
        setErrors({ account: err });
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          name,
          email,
          lastname,
          job,
          rolDeveloper,
          birthdayDate,
        },
      });
      setLoading(false);
      setErrors({ message: 'Your account has been updated ' });
    } catch (err) {
      setErrors({ account: 'Error we can not update the account' });
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
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
      case 'birthdayDate':
        setBirthdayDate(value);
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    axios({
      method: 'DELETE',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(history.push('/'))
      .catch((err) => {
        setErrors({ account: err });
      });
  };

  if (loading) return <Loading />;

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
        birthdayDate={birthdayDate}
        handleChange={handleChange}
        handleDelete={handleDelete}
        errorsAccount={errors.account}
        errorsMessage={errors.message}
      />
    </div>
  );
}
