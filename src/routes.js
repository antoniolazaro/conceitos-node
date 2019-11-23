import { Router } from 'express';
import idValidator from './app/middleware/idValidator';
import countAccess from './app/middleware/countAccess';
import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.use(countAccess);

routes.post('/projects', ProjectController.insert);
routes.get('/projects', ProjectController.index);

routes.get('/projects/:id', idValidator, ProjectController.index);
routes.put('/projects/:id', idValidator, ProjectController.update);
routes.delete('/projects/:id', idValidator, ProjectController.delete);
routes.post('/projects/:id/tasks', TaskController.insert);

export default routes;
