import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const LoginForm = ({ handleInputChange, handlesubmit, email, password }) => {
  return (
    <>
      <form style={{ width: "23rem" }} onSubmit={handlesubmit}>
        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
          Iniciar sesión
        </h3>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control form-control-lg"
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="email">
            Correo
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="form-control form-control-lg"
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
        </div>

        <div className="pt-1 mb-4">
          <button className="btn btn-info btn-lg btn-block" type="submit">
            Iniciar sesión
          </button>
        </div>

        <p className="small mb-5 pb-lg-2">
          <Link to="/restore" className="text-muted">
            ¿Olvidaste tu contraseña?
          </Link>
        </p>
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="link-info">
            Registrate Aquí
          </Link>
        </p>
      </form>
    </>
  );
};
LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handlesubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
