import React, { useState } from "react";
import { Link as To, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import CreateBlogPost from "../components/CreateBlogModal";
import { isMobile } from "react-device-detect";
function NavbarTwo() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);

  function showModal() {
    setModal(!modal);
  }

  return (
    <>
      {isMobile ? (
        <div className="btm-nav">
          <button onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
          <button className="" onClick={() => navigate("/create")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                id="secondary"
                d="M19.44,8.22C17.53,10.41,14,10,14,10s-.39-4,1.53-6.18a3.49,3.49,0,0,1,.56-.53L18,4l.47-1.82A8.19,8.19,0,0,1,21,2S21.36,6,19.44,8.22Z"
              />
              <path
                strokeWidth="2"
                id="primary"
                d="M19.44,8.22C17.53,10.41,14,10,14,10s-.39-4,1.53-6.18a3.49,3.49,0,0,1,.56-.53L18,4l.47-1.82A8.19,8.19,0,0,1,21,2S21.36,6,19.44,8.22ZM14,10l-2,2"
              />
              <path
                strokeWidth="2"
                id="primary-2"
                data-name="primary"
                d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12"
              />
            </svg>
          </button>

          <button onClick={() => navigate("/user")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-onyx p-2">
          <div className="sm:px-10">
            <To
              to="/"
              className=" px-2 normal-case text-xl outline-none border-none"
            >
              <p className="text-french-gray btn btn-ghost">Bloog!</p>
            </To>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="input sm:w-96 input-bordered outline-none bg-gray-500"
            />
          </div>
          <div className="flex items-center">
            <div className="px-2">
              <To to="/create" className="btn btn-ghost">
                New Post
              </To>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <FaRegUser className="w-10 text-md rounded-full" />
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </p>
                </li>
                <li>
                  <To to="">Login</To>
                </li>
                <li>
                  <To to="">Register</To>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarTwo;
