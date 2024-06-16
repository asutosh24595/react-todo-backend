const Tasks = require("../models/Tasks");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Tasks({ title, description, date });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.removeTask = async (req, res) => {
  try {
    const { id } = req.body;
    const task = await Tasks.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.deleteOne();
    res.status(200).json({ message: "Task removed successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date } = req.body;
    const updateData = {
      title,
      description,
      date,
    };
    const options = { new:true, runValidators: true };

    const updatedTask = await Tasks.findByIdAndUpdate(id, updateData, options);
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    await updatedTask.updateOne({ _id: id }, updateData);
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
