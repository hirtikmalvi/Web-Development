const express = require("express");

const router = express.Router();
const {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  //GET user with id as API (List user JSON)
  .get(handleGetUserById)
  //PATCH: Edit the User with given Id
  .patch(handleUpdateUserById)
  //DELETE: Delete the User with given Id
  .delete(handleDeleteUserById);

module.exports = router;
