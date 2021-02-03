import {
  FormContainer,
  InputForm,
  ButtonSend,
  Errors,
} from './SignUp/SignUpStyles';

export function FormSignIn({
  handleSubmit,
  email,
  password,
  handleChange,
  errorsPassword,
  errorsAccount,
}) {
  return (
    <>
      <FormContainer className="Form__container" onSubmit={handleSubmit} >
        <Errors>{errorsAccount}</Errors>
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
        <label className="Form__label-password" htmlFor="password" >
          Password
        </label>
        <InputForm
          className="Form__input-password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password for the account"
          required
        />
        <Errors>{errorsPassword}</Errors>
        <ButtonSend>Send Form</ButtonSend>
      </FormContainer>
    </>
  );
}
