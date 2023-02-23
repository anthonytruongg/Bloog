import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Comment from "../components/Comment";
import api from "../components/APIinstance";
import { HiOutlineUser } from "react-icons/hi";
import { isMobile } from "react-device-detect";

type PostDataProps = {
  title: string;
  body: string;
  likes: [];
  userId: string;
  _id: string;
};

type CommentDataProps = {
  _id: string;
  userId: string;
  comment: string;
};

function ViewPost() {
  // make get request to retrieve the posts' details with all comments, etc.
  const location = useLocation();

  const [author, setAuthor] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  // state passed from Card component
  const postData: PostDataProps = location?.state.postData;

  const userID = postData.userId;
  const postID = postData._id;

  // getting comments corresponding to the post
  async function getPostDetails() {
    await api
      .get(`/api/posts/${postID}/${userID}`)
      .then((res) => {
        // console.log(res);
        setAuthor(res.data.post[0].userId.name);
        setCommentArray(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // make a reply component, pass in the post ID, userID with the post req

  // replace with api calls

  useEffect(() => {
    getPostDetails();
    // console.log(postData._id);
    // no dependency allows for live updates of comments
  });
  return (
    <>
      {isMobile ? (
        <Layout>
          <div className="min-h-screen flex flex-col justify-center p-10 gap-y-4 items-center">
            <div className="card w-80 bg-primary flex items-center text-primary-content">
              <div className="card-body text-start">
                <h1 className="card-title text-3xl">
                  <HiOutlineUser /> {author}
                </h1>
                <h2 className="card-title text-2xl">{postData.title}</h2>
                <p className="text-xl">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat tempore ducimus tenetur asperiores ea, illo dicta
                  delectus reiciendis quisquam, iste nihil, voluptas atque
                  pariatur quae quia sit accusamus perferendis officiis!
                </p>

                <div className="card-actions justify-between">
                  <div className="flex gap-2">
                    <button className="btn btn-sm btn-accent">Like</button>
                    <button className="btn btn-sm btn-error">Dislike</button>
                  </div>
                  <button className="btn btn-sm btn-secondary">Reply</button>
                </div>
              </div>
            </div>
            {commentArray.length > 0
              ? commentArray.map((comment: CommentDataProps, index) => {
                  return <Comment key={index} commentData={comment}></Comment>;
                })
              : null}
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="card bg-primary flex items-center text-primary-content">
            <div className="card-body text-start gap-y-20">
              <h1 className="card-title text-5xl">
                <HiOutlineUser /> {author}
              </h1>
              <h2 className="card-title text-4xl">{postData.title}</h2>
              <p className="text-3xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                tempore ducimus tenetur asperiores ea, illo dicta delectus
                reiciendis quisquam, iste nihil, voluptas atque pariatur quae
                quia sit accusamus perferendis officiis!
              </p>
              <div className="card-actions justify-between">
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-accent">Like</button>
                  <button className="btn btn-sm btn-error">Dislike</button>
                </div>
                <button className="btn btn-sm btn-secondary">Reply</button>
              </div>
            </div>
          </div>
          <div className="pt-8 gap-4 grid grid-rows-6 grid-flow-col">
            {commentArray.length > 0
              ? commentArray.map((comment: CommentDataProps, index) => {
                  return <Comment key={index} commentData={comment}></Comment>;
                })
              : null}
          </div>
        </Layout>
      )}
    </>
  );
}

export default ViewPost;
