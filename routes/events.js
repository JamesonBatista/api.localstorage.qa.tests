import express from 'express';
import { param, body } from 'express-validator';
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  addParticipantToEvent,
  removeParticipantFromEvent,
} from '../controllers/eventsController.js';

const router = express.Router();

// Route to get all events
router.get('/', getEvents);

// Route to create a new event
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Event name is required').isString().withMessage('Event name must be a string'),
    body('date').isISO8601().withMessage('Date must be in ISO8601 format (YYYY-MM-DD)'),
    body('location').notEmpty().withMessage('Location is required'),
    body('capacity').isInt({ gt: 5, max: 50 }).withMessage('Capacity must be an integer between 5 and 50'),
  ],
  createEvent
);

// Route to get an event by ID
router.get('/:id', [param('id').isInt().withMessage('ID must be an integer')], getEventById);

// Route to update an event by ID
router.put('/:id', [param('id').isInt().withMessage('ID must be an integer')], updateEvent);

// Route to delete an event by ID
router.delete('/:id', [param('id').isInt().withMessage('ID must be an integer')], deleteEvent);

// Route to add a participant to an event
router.post(
  '/:eventId/participants',
  [
    param('eventId').isInt().withMessage('Event ID must be an integer'),
    body('name').notEmpty().withMessage('Participant name is required'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('age').isInt({ gt: 12 }).withMessage('Age must be greater than 12'),
  ],
  addParticipantToEvent
);

// Route to remove a participant from an event
router.delete(
  '/:eventId/participants/:participantId',
  [
    param('eventId').isInt().withMessage('Event ID must be an integer'),
    param('participantId').isInt().withMessage('Participant ID must be an integer'),
  ],
  removeParticipantFromEvent
);

export default router;
