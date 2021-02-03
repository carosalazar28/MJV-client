export function FormSignUp({
  handleSubmit,
  name,
  email,
  password,
  confirmPassword,
  handleChange,
  errors
}) {
  return (
    <>
      <form className="Form__container" onSubmit={handleSubmit} >
        <label className="Form__label-name" htmlFor="name" >
          Name
        </label>
        <input
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
        <input
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
        <input
          className="Form__input-password"
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password for the account"
          required
        />
        <p>{errors}</p>
        <label className="Form__label-confirmPassword" htmlFor="confirmPassword" >
          Confirm Password
        </label>
        <input
          className="Form__input-confirmPassword"
          id="confirmPassword"
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm the password"
          required
        />
        <button>Send Form</button>
      </form>
    </>
  );
}
