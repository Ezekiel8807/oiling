import "./register.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//components
import InlineErrorMsg from "../../components/errorMessages/InlineErrorMsg";

const Register = ({ serverError, serverSuccess }) => {
  //manage form data with react state
  const [errMsg, setErrMsg] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regButtonValue, setRegButtonValue] = useState("Register");

  // initialize useNavigation
  const navigate = useNavigate();

  //form validation
  const handleRegister = async (e) => {
    //prevent form default behaviour
    e.preventDefault();

    // check for empty values
    if (!username || !email || !password) {
      return setErrMsg("All fields required");
    } else {
      setRegButtonValue("Processing...");
      const registrationInfo = { username, email, password };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API_BASE_URL}register/`,
        {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify(registrationInfo),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setErrMsg(data.msg);
        setRegButtonValue("Register");
      } else if (response.status === 201) {
        navigate("/login");
        serverSuccess("Registration Successful");
      } else if (response.status === 500) {
        serverError("Sorry! something when wrong");
        setRegButtonValue("Register");
      } else {
        setErrMsg(data.msg);
        setRegButtonValue("Register");
      }
    }
  };

  return (
    <div className="register">
      <div className="loginBlock">
        <form action="" method="POST" onSubmit={handleRegister}>
          <h2 className="loginHead">Join Us On Oily</h2>

          <div className="login_with">
            <button type="button"> Continue with google</button>
            <button type="button"> Continue with facebook </button>
          </div>

          <div className="divider">
            <span>-------------</span> <span> OR </span>{" "}
            <span>-------------</span>
          </div>

          <div className="login_">
            <InlineErrorMsg errMsg={errMsg} />
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              autoComplete="true"
              placeholder="Username"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              autoComplete="true"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              autoComplete="true"
              placeholder="Password"
              required
            />
          </div>
          <small
            style={{
              margin: "2% 5%",
              display: "block",
              textDecoration: "none",
            }}
          >
            <Link to="/" target="_self" rel="noopener noreferrer">
              Back to homepage{" "}
            </Link>
          </small>

          <div className="loginButtonBlock">
            <button className="loginButton" type="submit">
              {regButtonValue}
            </button>
          </div>

          <div className="login_foot">
            <p>
              Already a member?{" "}
              <Link to="/login" target="_self" rel="noopener noreferrer">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
