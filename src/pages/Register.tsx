import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { isMobile } from "react-device-detect";
import BGdesktop from "../assets/desktop.png";
import api from "../components/APIinstance";

type UserProps = {
  username: string;
  email: string;
  password: string;
};

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggle, setToggle] = useState("password");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const [userData, setUserData] = useState<UserProps>({
    username: "",
    email: "",
    password: "",
  });

  function toggleShow() {
    if (toggle === "password") {
      setToggle("text");
    }
    if (toggle === "text") {
      setToggle("password");
    }
  }
  // note to myself, pls finish the register success component :D and set up nodemailer :D
  // backend is all gucci to go
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userData);
    setErrorMessage("");
    setSuccessMessage("");
    if (username && email && password) {
      await api
        .post("/api/user/new", {
          username: username,
          password: password,
          email: email,
        })
        .then((res) => {
          console.log("response", res);
          setSuccessMessage(res.data);
          navigate("/register/success");
        })
        .catch((err) => {
          console.log("error", err.response.data);
          setErrorMessage(err.response.data);
        });
    } else {
      setErrorMessage("Please fill out all fields.");
    }
  }

  useEffect(() => {
    // setUser();
  }, []);

  return (
    <>
      {isMobile ? (
        <div
          className="bg-slate-600 h-screen w-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BGdesktop})` }}
        >
          <div className="flex flex-col items-center justify-center gap-4 h-full w-full space-y-3">
            <Title title="Login" />
            <input
              type="text"
              placeholder="email"
              className="input input-bordered input-primary w-full max-w-xs bg-gray-700"
            />
            <input
              type="text"
              placeholder="password"
              className="input input-bordered input-primary w-full max-w-xs bg-gray-700"
            />
            <button className="btn btn-primary w-full max-w-xs">
              Register
            </button>
          </div>
        </div>
      ) : (
        <div
          className="hero min-h-screen bg-base-200 bg-cover"
          style={{ backgroundImage: `url(${BGdesktop})` }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                Share your opinions on Bloog!
              </h1>
              <p className="py-6">
                Bloog is a website that allows users to post whatever
                opinion/view they want. The only catch is, if the others do not
                like your post, it will be removed.
              </p>
              <p className="py-6">The power belongs in the users!</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="input input-bordered"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={toggle}
                      placeholder="password"
                      className="input input-bordered"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="text-red-300 font-circular font-bold pt-2 text-center">
                      {errorMessage}
                    </span>
                    <span className="text-emerald-300 font-circular font-bold pt-2 text-center">
                      {successMessage}
                    </span>
                    <div className="flex gap-2 pt-2">
                      <input type="checkbox" onClick={toggleShow} />
                      <label
                        htmlFor=""
                        className="text-sm font-light font-Jost"
                      >
                        Show password
                      </label>
                    </div>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSubmit}
                    >
                      Register
                    </button>
                  </div>
                  <div className="form-control mt-6 text-center">
                    <p>
                      Already have an account?{" "}
                      <span className="font-bold">Log in</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
