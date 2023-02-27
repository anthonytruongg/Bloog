import { useContext, useEffect, useState } from "react";
import Card from "../../components/Cards";
import Title from "../../components/Title";
import Layout from "../../components/Layout";
import api from "../../components/APIinstance";
import { isMobile } from "react-device-detect";
import { UserContext } from "../../context/UserContext";

type PostData = {
  title: string;
  body: string;
  likes: [];
  userId: string;
  _id: string;
};

function Home() {
  const [postArray, setPostArray] = useState([]);

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
        <Title title={`Hello. This is what we've got for you today.`} />
        <p className="font-semibold">
          Some posts you may .... or may not like.
        </p>
        {/* <button onClick={() => console.log(postArray)}>FETCH</button> */}
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-4 m-8 p-10">
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
//   const [index, setIndex] = useState(0);

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

//   function previousPost() {
//     if (index < 1) {
//       setIndex(postArray.length - 1);
//       console.log("next post", index);
//     } else {
//       setIndex(index - 1);
//       console.log("next post", index);
//     }
//   }

//   function nextPost() {
//     if (index === postArray.length - 1) {
//       setIndex(0);
//       console.log("prev post", index);
//     } else {
//       setIndex(index + 1);
//       console.log("prev post", index);
//     }
//   }

//   useEffect(() => {
//     fetchPosts();
//     // GET request to fetch all blog posts goes here
//   }, []);

//   return (
//     <>
//       {isMobile ? (
//         <Layout>
//           <div className="flex flex-col items-center justify-center text-start gap-4 h-screen">
//             <Title
//               title={`Hello ${user}. This is what we've got for you today.`}
//             />
//             <p className="font-semibold">
//               Some posts you may .... or may not like.
//             </p>
//             {postArray.length > 0 && <Card postData={postArray[index]}></Card>}
//             <div className="flex flex-row gap-14 p-10">
//               <button className="btn btn-accent" onClick={previousPost}>
//                 back
//               </button>
//               <button className="btn btn-primary" onClick={nextPost}>
//                 next
//               </button>
//             </div>
//           </div>
//         </Layout>
//       ) : (
//         <Layout>
//           <div className="flex flex-col items-center justify-center text-start gap-4">
//             <Title
//               title={`Hello ${user}. This is what we've got for you today.`}
//             />
//             <p className="font-semibold">
//               Some posts you may .... or may not like.
//             </p>
//           </div>
//           <div className="items-center justify-center flex flex-col pt-10">
//             {/* <Card postData={postArray[0]}></Card> */}
//             {postArray.length > 0 && <Card postData={postArray[index]}></Card>}

//             <div className="flex flex-row gap-14 p-10">
//               <button className="btn btn-accent" onClick={previousPost}>
//                 back
//               </button>
//               <button className="btn btn-primary" onClick={nextPost}>
//                 next
//               </button>
//             </div>
//           </div>
//         </Layout>
//       )}
//     </>
//   );
// }

// export default Home;
