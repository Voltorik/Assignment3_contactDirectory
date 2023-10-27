const data = {
    contacts: require("../model/contacts.json"),
    setContacts: function (data) {
        this.contacts = data;
    },
};

// Get all contacts
const getContacts = (req, res) => {
    res.json(data.contacts);
};

// Create new contact
const createContact = (req, res) => {
    const newContact = {
        id: data.contacts?.length 
            ? data.contacts[data.contacts.length - 1].id + 1 
            : 1,
        name: req.body.name,
        phoneNum: req.body.phoneNum,
        email: req.body.email,
        address: req.body.address,
    };

    if (!newContact.name || !newContact.phoneNum || !newContact.email) {
        return res.status(400).json({
            messaage : 'Error name, phone number, and email are required.'
        });
    }
    data.setContacts([...data.contacts, newContact]);
    res.status(201).json(data.contacts);
}

// Update contact
const updateContact = (req, res) => {
    const contact = data.contacts.find(
        (con) => con.id === parseInt(req.body.id)
    );
    if (!contact) {
        return res.status(400).json({
            message: `Contact ${req.body.id} is not found.`
        });
    }

    if (req.body.name) contact.name = req.body.name;
    if (req.body.phoneNum) contact.phoneNum = req.body.phoneNum;
    if (req.body.email) contact.email = req.body.email;
    if (req.body.address) contact.address = req.body.address;

    res.status(200).json(data.contacts);
}

// Delete contact
const deleteContact = (req, res) => {
    const contactIndex = data.contacts.findIndex(
        (con) => con.id === parseInt(req.body.id)
    );

    if (contactIndex === -1) {
        return res.status(400).json({
            message: `Contact ${req.body.id} is not found.`
        });
    }

    data.contacts.splice(contactIndex, 1)
    res.status(200).json(data.contacts);
};

// Get a contact by id
const getContact = (req, res) => {
    const contact = data.contacts.find(
        (contact) => contact.id === parseInt(req.params.id)
    );
    if (!contact) {
        return res.status(400).json({
            message: `Contact ${req.body.id} is not found.`
        });
    }
    res.json(contact);
}

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContact,
};