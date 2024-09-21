const Event = require("../models/eventModel");

exports.getEvents = async (req, res) => {
  const events = await Event.find({ user: req.user._id });
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const { title, description, date, time } = req.body;

  const event = await Event.create({
    title,
    description,
    date,
    time,
    user: req.user._id,
  });

  res.status(201).json(event);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const updatedEvent = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedEvent);
};

exports.deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await event.remove();
  res.json({ message: "Event removed" });
};
