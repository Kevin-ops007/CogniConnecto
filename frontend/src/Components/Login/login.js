import React, { useState } from "react";
import "./login.css"; // Import CSS file for styling
import { useNavigate, Navigate } from "react-router-dom";
// import Home from "../Home/Home";
import Form from 'react-bootstrap/Form';
import Logo from './Logo3.png';
import Button from "react-bootstrap/esm/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake username and password for demonstration
    const fakeUsername = "cognito";
    const fakePassword = "cognito123";

    // Check if username and password match the fake credentials
    if (username === fakeUsername && password === fakePassword) {
      setLoginStatus("Login successful");
      navigate("./events", { replace: true });
      // Perform further actions, such as redirecting to a different page
    } else {
      setLoginStatus("Login failed");
      setLoginError(true);
    }

    // Reset the form
    setUsername("");
    setPassword("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="login-page">
      <h1>CogniConnecto</h1>
      <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputuser">Username</Form.Label>
        <Form.Control
          type="text"
          id="username1"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError && <p className="error">Invalid username or password</p>}
        {loginStatus && <p className="status">{loginStatus}</p>}
       <Button
       classname="mt-3"
       variant = "primary"
                    onClick={handleSubmit}>
                      Submit
                    </Button>
      </form>
    </div>
  );
  // return (
  //   <div className="login-page" style={{ textAlign: 'center' }}>
  //     <img src={Logo} alt="CogniConnecto Logo" />
  //     {/* <h2>CogniConnecto</h2> */}
  //     <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
  //       <div>
  //         <label htmlFor="username">Username:</label>
  //         <input
  //           type="text"
  //           id="username"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password:</label>
  //         <input
  //           type="password"
  //           id="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </div>
  //       {loginError && <p className="error">Invalid username or password</p>}
  //       {loginStatus && <p className="status">{loginStatus}</p>}
  //       <button type="submit">Login</button>
  //     </form>
  //   </div>
  // );
  
}

export default Login;