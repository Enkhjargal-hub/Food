import express from "express";
import { getAllUsers } from "../controllers/users/get-all-users.js";
import { createUser } from "../controllers/users/create-user.js";
// import { getUser } from "../resolvers/users/get-user.js";
// import { updateUser } from "../resolvers/users/update-user.js";
// import { deleteUser } from "../resolvers/users/delete-user.js";
// import { authorize } from "../middleware/authMiddleWare.js";
// import { createUser } from "../resolvers/users/create-user.js"; // Create user function

export const usersRouter = express.Router();

// PATH
// GET, POST, PUT, PATCH, DELETE

usersRouter.get("/", getAllUsers); // Get All Users
usersRouter.post("/", createUser); // Create New User
// usersRouter.get("/:id", getUser); // Get User Details
// usersRouter.put("/:id", authorize, updateUser) // Update User
// usersRouter.delete("/:id", authorize, deleteUser); // Delete User (зөвшөөрөл шаардах ёстой)
