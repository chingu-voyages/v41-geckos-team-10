import "./Form.css"

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit} className="form-container">
    <label>
      <span className="form--span">Username</span>
      <input type="text" name="username" className="form--input" required />
    </label>
    <label>
      <span className="form--span">Password</span>
      <input type="password" name="password" className="form--input" required />
    </label>
    {!isLogin && (
      <label>
        <span className="form--span">Repeat password</span>
        <input type="password" name="rpassword" className="form--input" required />
      </label>
    )}

    <div className="submit">
          <button type="submit" className="form--button">Sign up</button>
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}
  </form>
)

export default Form