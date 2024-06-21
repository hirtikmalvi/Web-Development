import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = [action.payload, ...newPostList];
  }

  return newPostList;
};

// const DEFAULT_POST_LIST = [
//   // {
//   //   id: "1",
//   //   title: "Going to Delhi",
//   //   body: "Hey Friends, I am going to Delhi today in Ashram Express from Sabarmati Junction to Old Delhi Junction!",
//   //   reactions: 2,
//   //   userID: "user-7",
//   //   tags: ["Delhi", "Train", "AshramExpress"],
//   // },
//   // {
//   //   id: "2",
//   //   title: "Got placed in Bacancy",
//   //   body: "Hey Friends, Intersting news to share, I have got placement in Bacancy",
//   //   reactions: 8,
//   //   userID: "user-15",
//   //   tags: ["Bacancy", "Placement"],
//   // },
// ];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    [] // DEFAULT_POST_LIST
  );

  const addPost = (userID, postTitle, postBody, reactions, tags) => {
    // console.log(userID, postTitle, postBody, reactions, tags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userID,
        tags: tags,
      },
    });
  };

  const addInitialPost = (id, userID, postTitle, postBody, reactions, tags) => {
    // console.log(userID, postTitle, postBody, reactions, tags);
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        id: id,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userID,
        tags: tags,
      },
    });
  };

  const deletePost = (postID) => {
    console.log(postID);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {/* <PostList.Provider value={(postList, addPost, deletePost)}> */}
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
