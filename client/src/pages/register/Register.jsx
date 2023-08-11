import "./register.css";
import { useState } from "react";
import { axiosInstance } from "../../config";
import { baseurl } from "../../config";
import { useHistory } from 'react-router-dom';

export default function Register() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
     res.data && window.location.replace("https://darkxenium-blogs.onrender.com/login");
      res.data && history.push('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div id="register" className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="registerInput"
          type="text"
          required
          placeholder="Enter your username "
        />
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="registerInput"
          type="text"
          required
          placeholder="Enter your email "
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="registerInput"
          type="password"
          required
          placeholder="Enter your password "
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      {/* <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button> */}
      {error && (
        <span id="error">
          Something Went Wrong. User may already exist, please try logging in.
        </span>
      )}
    </div>
  );
}
