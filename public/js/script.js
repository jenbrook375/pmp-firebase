// Find 'speak to an expert' button
document.getElementById('expert').addEventListener('click', openContactForm);
document.getElementById('information').addEventListener('click', openContactForm);

// opens new tab with contact form
function openContactForm(){
    window.open("form.html");
}

// find 'learn more' button
document.getElementById('learn').addEventListener('click', showMore);


// toggles panel element to show
function showMore(){
    document.getElementById('panel').style.display="block";
    document.getElementById('learn').style.display='none';
}