import { useState, FormEvent } from "react";

function CreateBlogMobile() {
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const colorArr = [
    "badge badge-primary",
    "badge badge-secondary",
    "badge badge-accent",
    "badge badge-success",
  ];

  function addTag(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (tagArray.length === 4) {
      setMessage("You have reached the maximum limit!");
      return;
    }

    setTagArray([...tagArray, tag]);
    setTag("");
  }

  function removeTag(tagRemove: string) {
    setMessage("");
    const filterArr = tagArray.filter((tag) => tag !== tagRemove);
    console.log(filterArr);
    setTagArray(filterArr);
  }

  return (
    <div className="w-screen p-10">
      <div className="flex flex-col items-center gap-y-10">
        <h1 className="font-bold text-4xl font-circular">
          Bloog something interesting for the internet to see!
        </h1>
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
          <button className="btn btn-secondary">Bloog it!</button>
        </form>
        <div className="flex flex-col gap-y-4 flex-wrap">
          {tagArray.length > 0 ? (
            <h1 className="text-center">Your special tags.</h1>
          ) : null}
          {tagArray.map((tag, index) => (
            <span
              key={index}
              className={colorArr[index % colorArr.length]}
              onClick={() => removeTag(tag)}
            >
              {tag}
            </span>
          ))}
          <span className="text-center">{message}</span>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogMobile;
