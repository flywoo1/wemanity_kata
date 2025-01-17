const db = require("../model");
const Contact = db.contacts;
const Op = db.Sequelize.Op;

// Validate fields
function validateFields (req, res) {
  if (!req.body.number || !req.body.firstName || !req.body.lastName) {
    res.status(400).send({
      message: "Phone Number, first name, and last name can't be empty!"
    });
    return false;
  }
  else if (!req.body.number.match(/^\+\d+[ ]\d+[ ]\d{6,}$/)) {
      res.status(400).send({
          message: "Phone Number have wrong format!"
        });
        return false;
  }
  else return true
}

// Create and Save a new Contact
exports.create = (req, res) => {
  // Validate request
  if (validateFields (req, res)) {

    // Create a Contact
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      number: req.body.number
    };
  
    // Save Contact in the database
    Contact.create(contact)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Contact."
        });
      });
    };
  };

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
  const keyword = req.query.keyword;
  var condition = keyword ? { [Op.or] : [
    { firstName: { [Op.like]: `%${keyword}%` }},
    { lastName: { [Op.like]: `%${keyword}%` }},
    { number: { [Op.like]: `%${keyword}%` }}
  ] } : null;

  Contact.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contacts."
      });
    });
  };

// Find a single Contact with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Contact.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Contact with id=${id}.`
      });
    });
  };

// Update a Contact by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (validateFields (req, res)) {
    Contact.update(req.body, {
      where: { id: id }
    })
      .then(resCode => {
        if (resCode == 1) {
          res.send({
            message: "Contact was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Contact with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Contact with id=${id}.`
        });
      });
    };
  };
