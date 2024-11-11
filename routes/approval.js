const express = require("express");
const { body, param } = require("express-validator");

const {
  getUserApproval,
  postUserApproval,
  approveUser,
  updateUserApproval,
  deleteUserApproval,
  approveUserByCpf,
} = require("../controllers/approvalController.js");

const router = express.Router();

// Route to get user approval data
router.get("/", getUserApproval);

// Route to create a new user approval request
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("cpf")
      .notEmpty()
      .withMessage("CPF is required")
      .isLength({ min: 11, max: 11 })
      .withMessage("CPF must be 11 digits"),
  ],
  postUserApproval
);

// Route to approve a user
router.post(
  "/approve",
  [body("code").notEmpty().withMessage("Approval code is required, create new approval in post /approval")],
  approveUser
);

// Route to update an approval by ID
router.put(
  "/:id",
  [
    param("id").isInt().withMessage("ID must be a valid integer"),
    body("name").optional().isString(),
    body("email").optional().isEmail().withMessage("Must be a valid email"),
    body("cpf")
      .optional()
      .isLength({ min: 11, max: 11 })
      .withMessage("CPF must be 11 digits"),
  ],
  updateUserApproval
);

// Route to delete an approval by ID
router.delete(
  "/:id",
  [param("id").isInt().withMessage("ID must be a valid integer")],
  deleteUserApproval
);

// Route to approve user by CPF
router.post(
  "/approve-by-cpf",
  [
    body("cpf")
      .notEmpty()
      .withMessage("CPF is required")
      .isLength({ min: 11, max: 11 })
      .withMessage("CPF must be 11 digits"),
  ],
  approveUserByCpf
);

module.exports = router;
