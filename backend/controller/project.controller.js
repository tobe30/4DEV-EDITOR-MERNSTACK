import Project from "../models/project.model.js";
import User from "../models/user.model.js";

export const create = async (req, res) => {
  const { html, css, js, title } = req.body;

  try {
    const newProject = await Project.create({
      userId: req.user._id,
      html,
      css,
      js,
      title,
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save project' });
  }
};

export const getProject = async (req, res) => {
    try {
   const project = await Project.find({ userId: req.user._id }).sort({ createdAt: -1 });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
}