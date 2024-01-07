import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  // if (password !== confirm) {
  //   setError("Passwords do not match");
  //   return;
  // } else if (password.length < 6) {
  //   setError("Password must be at least 6 characters");
  //   return;
  // }
  // createUser(email, password)
  //   .then((result) => {
  //     const logUser = result.user;
  //     console.log(logUser);
  //   })
  //   .catch((error) => {
  //     setError(error.message);
  //     console.log(error);
  //   });
  // };

  return (
    <div className="border-2 border-[goldenrod mt-[50px] w-96 mx-auto py-20 rounded-md">
      <h2 className="text-2xl text-center">Sign Up </h2>
      <form
        onSubmit={handleSignUp}
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
            type="password
            "
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-start ">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            className="border rounded-md border-[goldenrod] w-fit px-1 py-2"
            type="password
            "
            name="confirm"
            placeholder="password"
            required
          />
        </div>
        {/* <button className="w-[190px]">Login</button> */}
        <input
          className="w-[190px] border bg-slate-400 py-2 rounded-md hover:bg-slate-500 hover:text-white"
          type="submit"
          value="Sign Up"
        />
        <p>
          <small>
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-600 ">
              Login
            </Link>
          </small>
        </p>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default SignUp;
