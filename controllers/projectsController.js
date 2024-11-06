import saveData, { getData } from "../localStorage.js";
import { validationResult } from "express-validator";

// Controller to get all projects
export const getProjects = (req, res) => {
  const projects = getData("projects");
  res.status(200).json(projects);
};

// Controller to get a project by ID
export const getProjectById = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const projects = getData("projects");
  const project = projects.find((p) => p.id === parseInt(req.params.id));

  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
};

// Controller to create a new project
export const createProject = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, endDate, leader } = req.body;
  const projects = getData("projects");

  const projectExists = projects.some(
    (p) => p.name.trim().toLowerCase() === name.trim().toLowerCase()
  );
  if (projectExists) {
    return res
      .status(400)
      .json({ message: `A project named ${name} already exists` });
  }

  const startDate = new Date().toISOString().split("T")[0];
  const newProject = {
    id: projects.length + 1,
    name,
    leader,
    description,
    startDate,
    endDate,
    members: [],
  };

  // Limit projects to 50, remove the oldest 10 if exceeded
  if (projects.length >= 50) {
    projects.splice(0, 10);
  }

  projects.push(newProject);
  saveData("projects", projects);

  res.status(201).json({
    message: "Project created successfully!",
    project: newProject,
  });
};

// Controller to update a project by ID
export const updateProject = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, startDate, endDate, members } = req.body;
  const projects = getData("projects");
  const projectIndex = projects.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (projectIndex === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  const project = projects[projectIndex];

  if (name) project.name = name;
  if (description) project.description = description;
  if (startDate) project.startDate = startDate;
  if (endDate) project.endDate = endDate;
  if (members) project.members = members;

  saveData("projects", projects);

  res.status(200).json({
    message: "Project updated successfully!",
    project,
  });
};

// Controller to delete a project by ID
export const deleteProject = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const projects = getData("projects");
  const projectId = parseInt(req.params.id);
  const projectIndex = projects.findIndex((p) => p.id === projectId);

  if (projectIndex === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  const deletedProject = projects[projectIndex].name;
  projects.splice(projectIndex, 1);
  saveData("projects", projects);

  res.status(200).json({
    message: `Project ${deletedProject} deleted successfully!`,
  });
};

// Controller to add a member to a project
export const addMemberToProject = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { projectId } = req.params;
  const { member_name, office } = req.body;

  const projects = getData("projects");
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return res
      .status(404)
      .json({ message: `Project with ID ${projectId} not found` });
  }

  const members = project.members || [];
  const newMember = {
    id_member: members.length + 1,
    member_name,
    office,
  };

  // Check if the member already exists in the project
  const memberExists = members.some(
    (m) => m.member_name.toLowerCase() === member_name.toLowerCase()
  );
  if (memberExists) {
    return res
      .status(400)
      .json({ message: `Member ${member_name} already exists in the project` });
  }

  members.push(newMember);
  project.members = members;
  saveData("projects", projects);

  res.status(201).json({
    message: `Member ${member_name} added to project ${project.name}`,
    project,
  });
};

// Controller to remove a member from a project
export const removeMemberFromProject = (req, res) => {
  const { projectId, memberId } = req.params;

  const projects = getData("projects");
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return res
      .status(404)
      .json({ message: `Project with ID ${projectId} not found` });
  }

  const memberIndex = project.members.findIndex(
    (m) => m.id_member === parseInt(memberId)
  );
  if (memberIndex === -1) {
    return res
      .status(404)
      .json({
        message: `Member with ID ${memberId} not found in project ${project.name}`,
      });
  }

  const removedMember = project.members[memberIndex].member_name;
  project.members.splice(memberIndex, 1);
  saveData("projects", projects);

  res.status(200).json({
    message: `Member ${removedMember} removed from project ${project.name}`,
    project,
  });
};
