module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      }
    });
  
    return Contact;
  };
