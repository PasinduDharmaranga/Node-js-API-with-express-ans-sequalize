const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;
var controllers = {
    create: async function (req, res) {
        if (!req.body.name || !req.body.email) {
            return res.status(400).send({
                message: "Content can not be empty!"
            });

        }
        const employee = {
            name: req.body.name,
            email: req.body.email,
            published: req.body.published ? req.body.published : false
        };
        Employee.create(employee)
            .then(data => {
                res.status(200).json({ data: data });
            })
            .catch(err => {
                res.status(500).json({ data: err });;
                ;
            });
    },
    findOne: async function (req, res) {
        Employee.findOne({ where: { email: req.body.email} })
            .then(data => {
                if (data) {
                    return res.status(200).json({ data: data });
                } else {
                    return res.status(200).json({ data: "No user found" });
                }
            })
            .catch(err => {
                return res.status(500).json({ data: err });
            });
    }
}

module.exports = controllers;