//Ok so I refactored my own code and I tried to follow the convention that
// you did in switch.js
//And you're totally right. This makes code WAY shorter and easier to manage....


(function() {
    //making the variables for the buttons that activate the popup
    var contactBtn = document.querySelector("#contact-btn");
    var sendBtn = document.querySelector("#send-btn");
    var mobileBtn = document.querySelector("#mobile-contact-btn");
    var emailBtn = document.querySelector("#email-btn");

    //variable targeting the contact div
    var contactDiv = document.querySelector("#contact-target");

    //var for cancel button
    var cancelBtn = document.querySelector("#cancel-btn");

    //adding the event listeners
    contactBtn.addEventListener('click', startPopup);
    sendBtn.addEventListener('click', startPopup);
    mobileBtn.addEventListener('click', startPopup);
    emailBtn.addEventListener('click', startPopup);


    function startPopup(e) {
        e.preventDefault();
        contactDiv.classList.remove("hide-contact-form");
        cancelBtn.addEventListener('click', cancelForm);

        // this hides the mobile nav menu when the contact form pops up.
        window.location.hash = '';
    }


    function cancelForm(e) {
        e.preventDefault();
        contactDiv.classList.add("hide-contact-form");
    }



    //The "send us a message" button in the footer
    /*
    document.querySelector("#send-btn").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#contact-target").classList.remove("hide-contact-form");
        document.querySelector("#cancel-btn").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#contact-target").classList.add("hide-contact-form");
        });
    });



    //The "contact us" link in the header
    document.querySelector("#contact-btn").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#contact-target").classList.remove("hide-contact-form");
        document.querySelector("#cancel-btn").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#contact-target").classList.add("hide-contact-form");
        });
    });






    */

})();