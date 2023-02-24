import React from "react";
import { useNavigate } from "react-router-dom";
type CardProps = {
  postData: {
    title: string;
    body: string;
    likes: [];
    userId: string;
    _id: string;
  };
};
function Cards(props: CardProps) {
  const navigate = useNavigate();

  function viewPost() {
    navigate(`/blog/view/${props.postData._id}`, {
      state: { postData: props.postData },
    });
  }

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl">{props.postData.title}</h2>
        {/* <p className="text-start">{props.postData.body}</p> */}
      </div>
      <div className="card-actions justify-end p-4">
        <button onClick={viewPost} className="btn btn-primary">
          View
        </button>
      </div>
    </div>
  );
}

export default Cards;
