import { useForm } from "../hooks/useForm";
import LoginForm from "../components/LoginForm";

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
                <LoginForm
                  handlesubmit={handlesubmit}
                  email={email}
                  password={password}
                  handleInputChange={handleInputChange}
                />
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
