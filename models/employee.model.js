module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      profile_picture: {
        type: Sequelize.BLOB
      },
      status:{
        type: Sequelize.ENUM('Active', 'Deleted'),
        defaultValue: 'Active',
      }
    });
    return Employee;
  };