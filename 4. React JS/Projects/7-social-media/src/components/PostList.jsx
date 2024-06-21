// import { useContext, useEffect, useState } from "react";
// import Post from "./Post";
// import PostListProvider, {
//   PostList as PostListData,
// } from "../store/post-list-store";
// import WelcomeMessage from "./WelcomeMessaage";
// import LoadingSpinner from "./LoadingSpinner";

// const PostList = () => {
//   const { postList, addInitialPost } = useContext(PostListData);

//   const [fetching, setFetching] = useState(false);

//   useEffect(() => {
//     setFetching(true);
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         // for (let post of data.posts) {
//         //   console.log(post);
//         // }
//         // console.log(data.posts[0]);
//         // console.log(data.posts[0].id);
//         // console.log(data.posts[0].body);
//         data.posts.forEach((post) => {
//           addInitialPost(
//             post.id,
//             post.userId,
//             post.title,
//             post.body,
//             post.reactions.likes,
//             post.tags
//           );
//         });
//       });
//     setFetching(false);
//   }, [postList]);

//   // fetch("https://dummyjson.com/posts")
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     // for (let post of data.posts) {
//   //     //   console.log(post);
//   //     // }
//   //     // console.log(data.posts[0]);
//   //     // console.log(data.posts[0].id);
//   //     // console.log(data.posts[0].body);
//   //     data.posts.forEach((post) => {
//   //       console.log(post);
//   //       addInitialPost(
//   //         post.id,
//   //         post.userId,
//   //         post.title,
//   //         post.body,
//   //         post.reactions.likes,
//   //         post.tags
//   //       );
//   //     });
//   //   });

//   // fetch("https://dummyjson.com/posts")
//   //   .then((res) => res.json())
//   //   .then((data) => console.log(data.posts));

//   return (
//     <>
//       {fetching && <LoadingSpinner></LoadingSpinner>}
//       {!fetching &&
//         (postList.length === 0 ? (
//           <WelcomeMessage></WelcomeMessage>
//         ) : (
//           postList.map((post) => <Post key={post.id} post={post}></Post>)
//         ))}
//     </>
//   );
// };

// export default PostList;

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessaage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.posts[0]);
        // console.log(data.posts[0].id);
        // console.log(data.posts[0].body);
        console.log(data.posts);

        data.posts.forEach((post) => {
          addInitialPost(
            post.id,
            post.userId,
            post.title,
            post.body,
            post.reactions.likes,
            post.tags
          );
        });
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching &&
        (postList.length === 0 ? (
          <WelcomeMessage></WelcomeMessage>
        ) : (
          postList.map((post) => <Post key={post.id} post={post}></Post>)
        ))}
    </>
  );
};

export default PostList;
