import saveData, { getData } from "../localStorage.js";
import { validationResult } from "express-validator";

// Controller to get user approval status
export const getUserApproval = (req, res) => {
  const approvals = getData("approval");

  if (!approvals || approvals.length === 0) {
    return res.status(404).json({ message: "No user approval data found" });
  }

  // Map the data to return only the user's fields, excluding the code
  const response = approvals.map((approval) => ({
    id: approval.user.id,
    name: approval.user.name,
    email: approval.user.email,
    cpf: approval.user.cpf,
    status: approval.user.status,
  }));

  res.status(200).json(response);
};

// Controller to post a new user approval request
export const postUserApproval = (req, res) => {
  const approvalsUsers = getData("approval");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, cpf } = req.body;
  const code = generateRandomCode();

  const newApproval = {
    user: {
      id: approvalsUsers.length + 1,
      name,
      email,
      cpf,
      status: "PENDING",
    },
    code,
  };

  let approvals = getData("approval") || [];

  approvals.push(newApproval);
  saveData("approval", approvals);

  // Return user data without code
  const { code: hiddenCode, ...userResponse } = newApproval;
  res.status(201).json({
    id: newApproval.user.id,
    name: userResponse.user.name,
    email: userResponse.user.email,
    cpf: userResponse.user.cpf,
    status: userResponse.user.status,
  });
};

// Helper function to generate a random code
const generateRandomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Controller to approve a user
export const approveUser = (req, res) => {
  const { code } = req.body;
  let approvals = getData("approval") || [];

  const approvalIndex = approvals.findIndex(
    (approval) => approval.code === code
  );

  if (approvalIndex === -1) {
    return res.status(400).json({ message: "Invalid approval code" });
  }

  approvals[approvalIndex].user.status = "APPROVED";
  saveData("approval", approvals);

  res.status(200).json({
    message: "User approved successfully",
    user: approvals[approvalIndex].user,
  });
};
export const updateUserApproval = (req, res) => {
  const { id } = req.params;
  const { name, email, cpf } = req.body;

  let approvals = getData("approval") || [];
  const approvalIndex = approvals.findIndex(
    (approval) => approval.user.id === parseInt(id)
  );

  if (approvalIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) approvals[approvalIndex].user.name = name;
  if (email) approvals[approvalIndex].user.email = email;
  if (cpf) approvals[approvalIndex].user.cpf = cpf;

  saveData("approval", approvals);

  res
    .status(200)
    .json({
      message: "User updated successfully",
      user: approvals[approvalIndex].user,
    });
};

// Controller to delete user approval by ID
export const deleteUserApproval = (req, res) => {
  const { id } = req.params;

  let approvals = getData("approval") || [];
  const approvalIndex = approvals.findIndex(
    (approval) => approval.user.id === parseInt(id)
  );

  if (approvalIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Remove user from the array
  const deletedUser = approvals.splice(approvalIndex, 1);
  saveData("approval", approvals);

  res
    .status(200)
    .json({ message: "User deleted successfully", user: deletedUser[0].user });
};

// Controller to approve user based on CPF
export const approveUserByCpf = (req, res) => {
  const { cpf } = req.body;
  let approvals = getData("approval") || [];

  // Check if the user with the provided CPF exists and has a code
  const approval = approvals.find(
    (approval) => approval.user.cpf === cpf && approval.code
  );

  if (!approval) {
    return res
      .status(404)
      .json({ message: "User not found or approval code missing" });
  }

  // Update user status to APPROVED
  approval.user.status = "APPROVED";
  saveData("approval", approvals);

  res.status(200).json({
    message: "User approved successfully",
    user: approval.user,
  });
};
