import Project from "../models/project.model.js";
import User from "../models/user.model.js";

export const create = async (req, res) => {
    try {
        const { title, html, css, js } = req.body;

        const newProject = new Project({
            title,
            html,
            css,
            js
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        console.error("Error in createProject controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
