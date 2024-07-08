const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 434;
let users = require("./MOCK_DATA.json");

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //Perform the operation you want to perform
  //Modify the req, res object if needed
  console.log("HELLO FROM MIDDLEWARE 1");
  fs.appendFile(
    "log.txt",
    `${Date.now()}: ${req.method} ${req.path}\n`,
    (err) => {
      if (err) {
        console.log("ERROR!!");
      } else {
        next();
      }
    }
  );
  // next(); //If you want to allow to go to next middleware/code
});

/*
 A hybrid server does 2 jobs:
- at '/users' : render an html page (SSR), when it knows that surely a browser is the client
- at '/api/users' : sends the data as json, so that a mobile app or react can handle that at the client side
*/

//ROUTES
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

//GET all users as HTML
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  return res.send(html);
});

//GET all users as API (List all users JSON)
app.get("/api/users", (req, res) => {
  return res.json(users);
});

//POST: Create New User
app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  users.push({ ...body, id: users[users.length - 1].id + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res
      .status(201)
      .json({ status: "success", id: users[users.length - 1].id });
  });
});

app
  .route("/api/users/:id")
  //GET user with id as API (List user JSON)
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found!" });
    return res.json(user);
  })
  //PATCH: Edit the User with given Id
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    console.log(body);
    users.forEach((user, index) => {
      if (user.id === id) {
        users[index] = { ...user, ...body };
      }
    });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) console.log(`user with id ${id} is deleted!`);
      return res.json({
        status: "success",
        message: `user with id ${id} is edited!`,
      });
    });
  })
  //DELETE: Delete the User with given Id
  .delete((req, res) => {
    const id = Number(req.params.id);
    users = users.filter((user) => user.id !== id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) console.log(`user with id ${id} is deleted!`);
      return res.json({
        status: "success",
        message: `user with id ${id} is deleted!`,
      });
    });
  });

// //GET user with id as API (List user JSON)
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   if (!user) return res.status(404).json({ error: "User not found!" });
//   return res.json(user);
// });

// //PATCH: Edit the User with given Id
// app.patch("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const body = req.body;
//   console.log(body);
//   users.forEach((user, index) => {
//     if (user.id === id) {
//       users[index] = { ...user, ...body };
//     }
//   });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) console.log(`user with id ${id} is deleted!`);
//     return res.json({
//       status: "success",
//       message: `user with id ${id} is edited!`,
//     });
//   });
// });

// //DELETE: Delete the User with given Id
// app.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   users = users.filter((user) => user.id !== id);
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) console.log(`user with id ${id} is deleted!`);
//     return res.json({
//       status: "success",
//       message: `user with id ${id} is deleted!`,
//     });
//   });
// });

//Same Routes can also be performed as below
/*
app
  .route("/api/users/:id")
  .patch((req, res) => {
    //ToDO: Edit the User with given Id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //ToDO: Delete the User with given Id
    return res.json({ status: "pending" });
  });
*/

app.listen(PORT, () => {
  console.log(`SERVER CONNECTED AT PORT ${PORT}`);
});
