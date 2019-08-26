

// submit button event listener
document.getElementById('contactForm').addEventListener('submit', submitForm);



// submit form
function submitForm(e) {
    // prevents form values from being returned to the html
    e.preventDefault();

    // create variables for all input values
    var name = getInputValues('name');
    var company = getInputValues('company');
    var email = getInputValues('email');
    var phone = getInputValues('phone');
    var message = getInputValues('message');

    // save messages as key/value pairs to collection named 'messages'
    db.collection("messages").add({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}


// get form input values
function getInputValues(id) {
    return document.getElementById(id).value;
}


    // .then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function (error) {
    //     console.error("Error adding document: ", error);
    // }); test.firestore.js