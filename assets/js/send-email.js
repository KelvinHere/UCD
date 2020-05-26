function sendMail(contactForm) {
    emailjs.send("gmail", "kelvin", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("success");
        },
        function(error) {
            alert(error)
        }
    )
    return false;
}