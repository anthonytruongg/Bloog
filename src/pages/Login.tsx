import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { isMobile } from "react-device-detect";
import BGdesktop from "../assets/desktop.png";
import api from "../components/APIinstance";

type UserProps = {
  username: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const [userData, setUserData] = useState<UserProps>({
    username: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userData);
    setErrorMessage("");
    setSuccessMessage("");
    if (email && password) {
      await api
        .post("/api/user/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          //   console.log("response", res);
          setSuccessMessage(res.data);
        })
        .catch((err) => {
          //   console.log("error", err.response.data);
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
              <h1 className="text-5xl font-bold">Hey there, welcome back</h1>
              <p className="py-10">
                By continuing, you’re agreeing to our Terms of Service, Privacy
                Policy, and Cookie Policy.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
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
                      type="password"
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
                      Login
                    </button>
                  </div>
                  <div className="form-control mt-6 text-center">
                    <p>
                      Don't have an account?{" "}
                      <span
                        className="font-bold cursor-pointer"
                        onClick={() => navigate("/register")}
                      >
                        Register
                      </span>
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

export default Login;
