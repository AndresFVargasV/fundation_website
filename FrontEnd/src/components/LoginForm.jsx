import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  return (
    <>
      <form style={{ width: "23rem" }} onSubmit={onSubmit}>
        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
          Iniciar sesión
        </h3>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "El correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "El correo no es válido",
              },
            })}
            className="form-control form-control-lg"
          />
          {errors.email && (
            <span className="text-danger text-small d-block mb-2">
              {errors.email.message}
            </span>
          )}
          <label className="form-label" htmlFor="email">
            Correo
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            className="form-control form-control-lg"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
            })}
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

export default LoginForm;
