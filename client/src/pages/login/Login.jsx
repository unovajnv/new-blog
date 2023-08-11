import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import {axiosInstance} from "../../config";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Usermame</label>
        <input
          ref={userRef}
          required
          className="loginInput"
          type="text"
          placeholder="Enter your Username "
        />
        <label>Password</label>
        <input
          required
          ref={passwordRef}
          className="loginInput"
          type="password"
          placeholder="Enter your password "
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {/* <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button> */}
    </div>
  );
}
