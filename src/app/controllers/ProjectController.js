import * as Yup from 'yup';
import Project from '../models/Project';
import Task from '../models/Task';

class ProjectController {
  async insert(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(20),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id, name } = await Project.create(req.body);
    return res.json({
      id,
      name,
    });
  }

  async index(req, res) {
    const { id } = req.params;
    if (!id) {
      const { page = 1 } = req.query;
      const projects = await Project.findAll({
        limite: 20,
        offset: (page - 1) * 20,
        order: ['name'],
        include: [
          {
            model: Task,
            as: 'tasks',
          },
        ],
      });
      return res.json(projects);
    }
    const project = await Project.findByPk(id, {
      include: [
        {
          model: Task,
          as: 'tasks',
        },
      ],
    });
    return res.json(project);
  }

  async update(req, res) {
    const projectUpdated = await Project.update(
      {
        name: req.body.name,
      },
      { where: { id: req.params.id } }
    );
    return res.json(projectUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;
    await Project.destroy({ where: { id } });
    return res.json({ message: `Projeto com ID = ${id} excluído com sucesso` });
  }
}

export default new ProjectController();
