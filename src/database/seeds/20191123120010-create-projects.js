module.exports = {
  up: (queryInterface, Sequelize) => {
    const date1 = new Date();
    const date2 = new Date();
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          name: 'Project 1',
          created_at: date1,
          updated_at: date1,
        },
        {
          name: 'Project 2',
          created_at: date2,
          updated_at: date2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects');
  },
};
