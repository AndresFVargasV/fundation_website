import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const LoginPage = () => {
  const [{ email, password }, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    reset();
    console.log(email, password);
  };
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }} onSubmit={handlesubmit}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
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
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="submit"
                    >
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
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
