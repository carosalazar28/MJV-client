import {
  FormContainer,
  InputForm,
  ButtonSend,
  Errors,
} from './styled/FormStyles';

export function FormProfile({
  handleSubmit,
  name,
  email,
  lastname,
  job,
  rolDeveloper,
  handleChange,
  errorsAccount,
}) {
  return (
    <>
      <FormContainer className="Form__container" onSubmit={handleSubmit} >
        <Errors>{errorsAccount}</Errors>
        <label className="Form__label-name" htmlFor="name" >
          Name
        </label>
        <InputForm
          className="Form__input-name"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name new user"
          required
        />
        <label className="Form__label-email" htmlFor="email" >
          Email
        </label>
        <InputForm
          className="Form__input-email"
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email new user"
          required
        />
        <label className="Form__label-lastname" htmlFor="lastname" >
          Lastname
        </label>
        <InputForm
          className="Form__input-lastname"
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
          placeholder="Lastname for the account"
        />
        <label className="Form__label-rolDeveloper" htmlFor="rolDeveloper" >
          Rol Developer
        </label>
        <select
          className="Form__input-rolDeveloper"
          id="rolDeveloper"
          name="rolDeveloper"
          value={rolDeveloper}
          onChange={handleChange}
          placeholder="What is your rol"
        >
          <option
            value="FE"
            className="Form__input-fe"
          >
            Front End
          </option>
          <option
            value="BE"
            className="Form__input-be"
          >
            Back End
          </option>
          <option
            value="FS"
            className="Form__input-fs"
          >
            Full Stack
          </option>
        </select>
        <label className="Form__label-job" htmlFor="job" >
          You have Job
        </label>
        <InputForm
          className="Form__input-job"
          id="job"
          type="checkbox"
          name="job"
          value={job}
          onChange={handleChange}
        />
        <ButtonSend>Send Form</ButtonSend>
      </FormContainer>
    </>
  );
}
