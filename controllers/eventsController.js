import saveData, { getData } from "../localStorage.js";
import { validationResult } from 'express-validator';

// Controller to get all events
export const getEvents = (req, res) => {
  const events = getData('events');
  res.status(200).json(events);
};

// Controller to get an event by ID
export const getEventById = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const events = getData('events');
  const event = events.find(e => e.id === parseInt(req.params.id));

  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
};

// Controller to create a new event
export const createEvent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, date, location, capacity } = req.body;
  const events = getData('events');
  
  const eventExists = events.some(e => e.name.trim().toLowerCase() === name.trim().toLowerCase());
  if (eventExists) {
    return res.status(400).json({ message: `Event with the name ${name} already exists` });
  }

  const newEvent = {
    id: events.length ? events[events.length - 1].id + 1 : 1,
    name,
    date,
    location,
    capacity,
    participants: []
  };

  // Limit events to 50, remove the oldest 10 if exceeded
  if (events.length >= 50) {
    events.splice(0, 10);
  }

  events.push(newEvent);
  saveData('events', events);

  res.status(201).json({
    message: 'Event created successfully!',
    event: newEvent,
  });
};

// Controller to update an event by ID
export const updateEvent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, date, location, capacity } = req.body;
  const events = getData('events');
  const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));

  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  const event = events[eventIndex];

  if (name) event.name = name;
  if (date) event.date = date;
  if (location) event.location = location;
  if (capacity) event.capacity = capacity;

  saveData('events', events);

  res.status(200).json({
    message: 'Event updated successfully!',
    event,
  });
};

// Controller to delete an event by ID
export const deleteEvent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const events = getData('events');
  const eventId = parseInt(req.params.id);
  const eventIndex = events.findIndex(e => e.id === eventId);

  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  events.splice(eventIndex, 1);
  saveData('events', events);

  res.status(200).json({
    message: 'Event deleted successfully',
  });
};

// Controller to add a participant to an event
export const addParticipantToEvent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { eventId } = req.params;
  const { name, email, age } = req.body;
  
  const events = getData('events');
  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) {
    return res.status(404).json({ message: `Event with ID ${eventId} not found` });
  }

  if (!event.participants) event.participants = [];

  const newParticipant = {
    id: event.participants.length + 1,
    name,
    email,
    age,
  };

  const participantExists = event.participants.some(p => p.name.toLowerCase() === name.toLowerCase());
  if (participantExists) {
    return res.status(400).json({ message: `Participant "${name}" already exists in the event` });
  }

  event.participants.push(newParticipant);
  saveData('events', events);

  res.status(201).json({
    message: `Participant ${name} added to event ${event.name}`,
    event,
  });
};

// Controller to remove a participant from an event
export const removeParticipantFromEvent = (req, res) => {
  const { eventId, participantId } = req.params;
  
  const events = getData('events');
  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) {
    return res.status(404).json({ message: `Event with ID ${eventId} not found` });
  }

  const participantIndex = event.participants.findIndex(p => p.id === parseInt(participantId));
  if (participantIndex === -1) {
    return res.status(404).json({ message: `Participant with ID ${participantId} not found in event ${event.name}` });
  }

  const removedParticipant = event.participants[participantIndex].name;
  event.participants.splice(participantIndex, 1);
  saveData('events', events);

  res.status(200).json({
    message: `Participant ${removedParticipant} removed from event ${event.name}`,
  });
};
