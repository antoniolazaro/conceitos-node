import Project from '../models/Project';

export default async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findByPk(id);
  if (!project) {
    return res.status(400).json({ error: `Não existe projeto com ID = ${id}` });
  }
  return next();
};
