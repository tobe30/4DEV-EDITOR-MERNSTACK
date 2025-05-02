import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  html: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
