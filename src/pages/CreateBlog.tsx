import React, { useState, FormEvent } from "react";
import Navbar from "../components/SideNav";
import NavTwo from "../components/TopNav";
import Title from "../components/Title";
import Layout from "../components/Layout";
import { isMobile } from "react-device-detect";
import CreateBlogMobile from "../pages_mobile/CreateBlogMobile";

function CreateBlog() {
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState<string[]>([]);

  function addTag(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTagArray([...tagArray, tag]);
    setTag("");
  }

  function removeTag(tagRemove: string) {
    const filterArr = tagArray.filter((tag) => tag !== tagRemove);
    console.log(filterArr);
    setTagArray(filterArr);
  }

  return (
    <>
      <Layout>
        {isMobile ? (
          <CreateBlogMobile />
        ) : (
          <div>
            <div className="flex flex-col items-center gap-y-10">
              <Title title="Bloog something interesting for the internet to see!"></Title>
              <p className="font-circular py-10">
                Bloog something unique ... or maybe something funny?
              </p>
            </div>
            <div className="justify-start">
              <form className="flex flex-col gap-10" onSubmit={addTag}>
                <div className="flex flex-col">
                  <label className="font-light">Title of Post?</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full  outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-light">Any Special Tags?</label>
                  <div>
                    <input
                      type="text"
                      placeholder="gaming"
                      className="input w-full outline-none"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={() => addTag}
                      className="m-2 btn btn-xs"
                    >
                      add
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-light">Say something...</label>
                  <textarea
                    className="textarea resize-none"
                    placeholder="Say something..."
                    rows={10}
                    cols={50}
                  ></textarea>
                </div>
              </form>
              <div className="grid grid-cols-10 p-10 gap-2">
                {tagArray.length > 0 ? <h1>Your special tags.</h1> : null}
                {tagArray.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="badge badge-primary"
                      onClick={() => removeTag(tag)}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export default CreateBlog;
