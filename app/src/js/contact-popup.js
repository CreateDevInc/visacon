(function() {


    //The "contact us" link in the header
    document.querySelector("#contact-btn").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#contact-target").classList.remove("hide-contact-form");
        document.querySelector("#cancel-btn").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#contact-target").classList.add("hide-contact-form");
        });
    });


    //The "send us a message" button in the footer
    document.querySelector("#send-btn").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#contact-target").classList.remove("hide-contact-form");
        document.querySelector("#cancel-btn").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#contact-target").classList.add("hide-contact-form");
        });
    });


})();