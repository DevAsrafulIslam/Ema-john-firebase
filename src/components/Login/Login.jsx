import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const signIn = result.user;
        console.log(signIn);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="border-2 border-[goldenrod mt-[50px] w-96 mx-auto py-20 rounded-md">
      <h2 className="text-2xl text-center">Login </h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex flex-col justify-center items-start ">
          <label htmlFor="">Email</label>
          <input
            className="border rounded-md border-[goldenrod] w-fit px-1 py-2"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-start ">
          <label htmlFor="">Password</label>
          <input
            className="border rounded-md border-[goldenrod] w-fit px-1 py-2"
            type={show ? "text" : "password"}
            name="password"
            placeholder="password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>{show ? "Hide Password" : "Show Password"}</small>
          </p>
        </div>
        {/* <button className="w-[190px]">Login</button> */}
        <input
          className="w-[190px] border bg-slate-400 py-2 rounded-md hover:bg-slate-500 hover:text-white"
          type="submit"
          value="Login"
        />

        <p>
          <small>
            New to Ema-John? <Link to="/signup">Sign Up</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
