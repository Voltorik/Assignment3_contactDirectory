# Assignment3_contactDirectory
This project is a contact directory that uses a json file as its database.
The json file in not rewritten after execution so certain functions only work with the hardcoded values.

# Quick Start
1. Clone down the repo and run locally. Local host is set to port 3000.
2. Open up a web browser and enter `localhost:3000`. This will take you to the main page.
3. From there all the functions should be available. Please read the bellow for more info.

# Useful info to know
- Each function works with the preloaded contacts in the contacts.json file. Since the json file is not rewritten, some of the functions won't work with newly created contacts. 

# REST API Usage
- GET "/contact" - retrieves all contacts
- GET "/contact/:id" - retrieves the specifed contact via their id
  - accepts: id (required)
- PUT "/contact" - updates a contact uisng their id
  - accepts: name, phoneNum, email, and address
- POST "/contact" - creates a new contact
  - accepts: name (required), phoneNum (required), email (required), address
- DELETE "/contact" - deletes a contact via their id
  - accepts: id (required)

# Web UI
- Contacts Table - displays all the current contacts every page refresh.
- Create New Contact - generates a new contact based on the provided info. Name, phone number, and email are required.
- Update Contact - updates a contact based on provided info. Id parameter is required. If a cell is left blank, that value remains unchanged.
- Delete Contact - deletes a contact with the given Id. 
- Get Contact By Id - displays a contact based on the given Id within the Contact Table below it. 

## Project Criteria: 
Assignment: Contact Directory

Create a web application using Express.js to manage a contact directory. The application should allow users to add, view, update, or delete contact information. All contact data should be stored in a local JSON file which will act as your database.

Requirements:
Setup:

    Initialize a new Node.js project and install Express.js.
    Create a new JSON file named contacts.json to store contact information.

Contact Schema:

    Each contact should have the following information:
    Name (required)
    Phone Number (required)
    Email (required)
    Address (optional)

API Endpoints:

    Implement the following HTTP methods:
    GET to retrieve and display all contacts or a single contact by ID.
    POST to add a new contact.
    PUT or PATCH to update an existing contact by ID.
    DELETE to delete a contact by ID.

Middleware Function:

    Create a middleware function that validates the contact data before it reaches the endpoint handlers.
    The middleware should check that the name and phone number fields are provided and are of the correct data type.
    If the data is invalid, respond with an appropriate error message. If the data is valid, pass control to the next function in the stack.

Validation:

    (This can now be handled by the middleware function.)

User Interface:

    Create a simple front-end using HTML, CSS, and JavaScript to interact with your API.
    The UI should have forms for adding, updating, and deleting contacts.
    Display the list of contacts, and allow the user to click on a contact to view more details.

Error Handling:

    Implement error handling to manage cases where a contact does not exist, or the data provided is invalid.

Documentation:

    Include a README file in your project repository explaining how to run your project, and how to interact with the API.

Submission:

Submit the GitHub link of your project repository.

Ensure your repository is public, has a descriptive README, and is well-commented.
