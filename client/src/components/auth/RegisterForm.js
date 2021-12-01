import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./utils.css";
import "./style.css";
import Swal from "sweetalert2";

const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContext);

  // Local state
  const [RegisterForm, setRegisterForm] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });


  const { username, password, repeatPassword } = RegisterForm;

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...RegisterForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password doesn't match",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    try {
      const registerData = await registerUser(RegisterForm);
      if (!registerData.success) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: registerData.message || "Password doesn't match",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={register}>
              <span className="login100-form-title p-b-49"> Login </span>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                  value={username}
                  onChange={onChangeRegisterForm}
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={onChangeRegisterForm}
                />

                <span className="focus-input100" data-symbol="" />
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Repeat Password</span>
                <input
                  className="input100"
                  type="password"
                  name="repeatPassword"
                  placeholder="Type your password again "
                  value={repeatPassword}
                  onChange={onChangeRegisterForm}
                />

                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31">
                {/* <a > Forgot password? </a> */}
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Register</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span> Or Sign Up Using </span>
              </div>
              <div className="flex-c-m">
                <a  className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a  className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a  className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17"> I've already account </span>
                <Link to="/login" className="txt2">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default RegisterForm;
