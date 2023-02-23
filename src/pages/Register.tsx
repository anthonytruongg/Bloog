import React from "react";
import Title from "../components/Title";
import { isMobile } from "react-device-detect";
import BGdesktop from "../assets/desktop.png";
import BGMobile from "../assets/mobile.png";

function Register() {
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
              placeholder="username"
              className="input input-bordered input-primary w-full max-w-xs bg-gray-700"
            />
            <input
              type="text"
              placeholder="password"
              className="input input-bordered input-primary w-full max-w-xs bg-gray-700"
            />
            <button className="btn btn-primary w-full max-w-xs">Login</button>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="form-control mt-6 text-center">
                  <p>
                    Already have an account?{" "}
                    <span className="font-bold">Log in</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
