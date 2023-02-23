import React from "react";
import Title from "./Title";
import { Link as To } from "react-router-dom";

type PageProps = {
  children: React.ReactNode;
};

function Navbar(props: PageProps) {
  let user = "gigg";
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-50 bg-prussian-blue text-start text-base-content">
          {/* <!-- Sidebar content here --> */}
          {/* <Title title={"Hey there, welcome back"} /> */}
          <li className="p-4 font-bold">
            <To to="/create">Create a blog post</To>
          </li>
          <li className="p-4 font-bold">
            <To to="/user">Your posts</To>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
