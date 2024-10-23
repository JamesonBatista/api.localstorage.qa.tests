import express from 'express';
import { param, body } from 'express-validator';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  addMemberToProject,
  removeMemberFromProject
} from '../controllers/projectsController.js';

const router = express.Router();

// Route to get all projects
router.get('/', getProjects);

// Route to create a new project
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Project name is required').isString().withMessage('Project name must be a string'),
    body('leader').notEmpty().withMessage('Leader is required').isString().withMessage('Leader must be a string'),
    body('description').notEmpty().withMessage('Description is required').isString().withMessage('Description must be a string'),
    body('endDate').isISO8601().withMessage('Invalid end date')
      .custom(value => {
        const endDate = new Date(value);
        const today = new Date();
        if (endDate <= today) {
          throw new Error('End date must be later than today');
        }
        return true;
      })
  ],
  createProject
);

// Route to get a project by ID
router.get('/:id', [param('id').isInt().withMessage('ID must be an integer')], getProjectById);

// Route to update a project by ID
router.put('/:id', [param('id').isInt().withMessage('ID must be an integer')], updateProject);

// Route to delete a project by ID
router.delete('/:id', [param('id').isInt().withMessage('ID must be an integer')], deleteProject);

// Route to add a member to a project
router.post(
  '/:projectId/member',
  [
    param('projectId').isInt().withMessage('Project ID must be an integer'),
    body('member_name').notEmpty().withMessage('Member name is required'),
    body('office').notEmpty().withMessage('Office is required'),
  ],
  addMemberToProject
);

// Route to remove a member from a project
router.delete(
  '/:projectId/member/:memberId',
  [
    param('projectId').isInt().withMessage('Project ID must be an integer'),
    param('memberId').isInt().withMessage('Member ID must be an integer'),
  ],
  removeMemberFromProject
);

export default router;
