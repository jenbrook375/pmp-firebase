

// submit button event listener
document.getElementById('contactForm').addEventListener('submit', submitForm);
var form = document.getElementById('contactForm');


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
    

    // show alert upon submit
    document.querySelector('.alert').style.display = "block";

    // hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    },3000);

    form.reset();
    return false;
}


// get form input values
function getInputValues(id) {
    return document.getElementById(id).value;
}
