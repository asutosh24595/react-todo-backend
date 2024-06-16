const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['pending','completed'],
    default: 'pending',
    required: true,
  }
});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;
