import { Model, Sequelize } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Task, { foreignKey: 'project_id', as: 'tasks' });
  }
}

export default Project;
