import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      {
        path: "/create-post",
        element: <CreatePost /> /*action: formSubmitAction */,
      }, //We can use Action too. formSubmitAction is a function. See PPT for more info...
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
