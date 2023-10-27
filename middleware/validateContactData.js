const contacts = require("../model/contacts.json");

const validateContactData = async (req, res, next) => {
    if (req.body.name) {
        if (typeof req.body.name != "string") {
            return res.status(400).json({
                error: "name must be a string."
            });
        }
    }

    if (req.body.phoneNum) {
        if (typeof req.body.phoneNum != "string") {
            return res.status(400).json({
                error: `Error, phoneNum must be a string.`
            });
        }
    }

    if (req.body.id) {
        const contact = contacts.find(
            (con) => con.id === parseInt(req.body.id));
        if (!contact) {
            return res.status(400).json({
                error: `Error, contact not found.`
            });
        }
    }

    next();
}

module.exports = validateContactData;