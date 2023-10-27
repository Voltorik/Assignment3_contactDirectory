const express = require("express");
const router = express();
const contactsController = require("../../controllers/contactController");
const validateContactData = require("../../middleware/validateContactData");

router
    .route("/")
    .get(contactsController.getContacts)
    .post(validateContactData, contactsController.createContact)
    .put(validateContactData, contactsController.updateContact)
    .delete(validateContactData, contactsController.deleteContact);

router.route("/:id").get(contactsController.getContact);

module.exports = router;