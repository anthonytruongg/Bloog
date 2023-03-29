import { useEffect, useState } from "react";
import { api } from "../components/APIinstance";
type CommentProps = {
  commentData: {
    userId: string;
    comment: string;
  };
};
function Comment(props: CommentProps) {
  const userId = props.commentData.userId;
  const comment = props.commentData.comment;

  const [author, setAuthor] = useState("");

  async function getUser() {
    await api
      .get(`/api/comment/${userId}`)
      .then((res) => {
        // console.log("GET USER", res);
        setAuthor(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUser();
  });
  // if a comment gets more than 10 dislikes, the comment is removed
  // if a comment gets more than 10 likes, it turns bg-violet-800
  // special users can have different colors to their name
  return (
    <div className="p-4">
      <div className="card-compact w-80 bg-ghost shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-red-500">
            {author}
            <span className="font-light italic text-white">says...</span>
          </h2>
          <p className="text-start font-medium text-SM">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
