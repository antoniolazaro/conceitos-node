import * as Yup from 'yup';
import Task from '../models/Task';
import Project from '../models/Project';

class TaskController {
  async insert(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string()
    //     .required()
    //     .max(20),
    //   task: Yup.array.of(
    //     Yup.object().shape({
    //       name: Yup.string()
    //         .required()
    //         .max(20),
    //     })
    //   ),
    // });
    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validation fails' });
    // }
    const projectSaved = await Project.findByPk(req.params.id);
    const tasksSaved = await Task.create({
      name: req.body.tasks[0],
      project_id: projectSaved.id,
    });
    return res.json(tasksSaved);
  }
}

export default new TaskController();
