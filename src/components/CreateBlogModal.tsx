import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlogModal() {
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState<string[]>([]);
  const [modal, setModal] = useState("");

  const navigate = useNavigate();

  function addTag(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTagArray([...tagArray, tag]);
    setTag("");
  }

  function handleSubmit() {}

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        New Post
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-close modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="">
            <h3 className="font-bold text-xl text-center">
              Create a new blog post!
            </h3>
            <div className="p-4">
              <form onSubmit={addTag}>
                <div className="form-control w-full max-w-xs flex gap-4">
                  <label className="label">
                    <span className="label-text font-bold">Title of Post</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs outline-none"
                  />
                  <label className="label">
                    <span className="label-text font-bold">Special Tags</span>
                  </label>
                  <div className="grid sm:grid-cols-4 gap-y-4">
                    {tagArray.map((tag, index) => {
                      return (
                        <span key={index} className="badge badge-primary">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      type="text"
                      placeholder="gaming"
                      className="input input-xs w-20 max-w-xs outline-none"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={() => addTag}
                      className="btn btn-xs"
                    >
                      add
                    </button>
                  </div>
                  <label className="label">
                    <span className="label-text font-bold">Body</span>
                  </label>
                  <textarea
                    className="textarea resize-none"
                    placeholder="Say something..."
                    rows={5}
                    cols={5}
                  ></textarea>
                </div>
              </form>
              <div className="modal-action">
                <button onClick={handleSubmit}>Bloog!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogModal;
