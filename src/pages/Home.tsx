// import { useEffect, useState } from "react";
// import Card from "../components/Cards";
// import Title from "../components/Title";
// import Layout from "../components/Layout";
// import api from "../components/APIinstance";
// import { isMobile } from "react-device-detect";

// type PostData = {
//   title: string;
//   body: string;
//   likes: [];
//   userId: string;
//   _id: string;
// };

// function Home() {
//   const [postArray, setPostArray] = useState([]);

//   const user = "gigg";

//   async function fetchPosts() {
//     await api
//       .get("/api/posts/all")
//       .then((res) => {
//         console.log(res);
//         setPostArray(res.data);
//         // console.log("POST ARRAY", postArray);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   useEffect(() => {
//     fetchPosts();
//     // GET request to fetch all blog posts goes here
//   }, []);

//   return (
//     <Layout>
//       <div className="flex flex-col items-center justify-center text-start gap-4">
//         <Title title={`Hello ${user}. This is what we've got for you today.`} />
//         <p className="font-semibold">
//           Some posts you may .... or may not like.
//         </p>
//         {/* <button onClick={() => console.log(postArray)}>FETCH</button> */}
//       </div>
//       <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-4 m-8">
//         {postArray.length > 0
//           ? postArray.map((post: PostData, index) => {
//               return <Card key={index} postData={post}></Card>;
//             })
//           : null}
//       </div>
//     </Layout>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";
import Card from "../components/Cards";
import Title from "../components/Title";
import Layout from "../components/Layout";
import api from "../components/APIinstance";
import { isMobile } from "react-device-detect";

type PostData = {
  title: string;
  body: string;
  likes: [];
  userId: string;
  _id: string;
};

function Home() {
  const [postArray, setPostArray] = useState([]);
  const [index, setIndex] = useState(0);

  const user = "gigg";

  async function fetchPosts() {
    await api
      .get("/api/posts/all")
      .then((res) => {
        console.log(res);
        setPostArray(res.data);
        // console.log("POST ARRAY", postArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchPosts();
    // GET request to fetch all blog posts goes here
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-start gap-4">
        <Title title={`Hello ${user}. This is what we've got for you today.`} />
        <p className="font-semibold">
          Some posts you may .... or may not like.
        </p>
        {/* <button onClick={() => console.log(postArray)}>FETCH</button> */}
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-4 m-8">
        {postArray.length > 0
          ? postArray.map((post: PostData, index) => {
              return <Card key={index} postData={post}></Card>;
            })
          : null}
      </div>
    </Layout>
  );
}

export default Home;
