import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { getUser } from "../resolvers/users/get-user.js";
import { updateUser } from "../resolvers/users/update-user.js";
import { deleteUser } from "../resolvers/users/delete-user.js";
import { authorize } from "../middleware/authMiddleWare.js";
import { createUser } from "../resolvers/users/create-user.js"; // Create user function

const usersRouter = express.Router();

usersRouter
  .get("/", getUsers) // Get All Users
  .post("/", createUser) // Create New User
  .get("/:id", authorize, getUser) // Get User Details
  .put("/:id", authorize, updateUser) // Update User
  .delete("/:id", authorize, deleteUser); // Delete User (зөвшөөрөл шаардах ёстой)

export default usersRouter;
