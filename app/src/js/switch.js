(function() {

    var metricTable = document.querySelector(".metric");
    var metricButton = document.querySelector("#metric");
    var englishTable = document.querySelector(".english");
    var englishButton = document.querySelector("#english");


    metricTable.classList.add("hidden");



    englishButton.classList.add("active-table");
    metricButton.classList.add("switchable");


    metricButton.addEventListener("click", function() {
        if (metricButton.classList.contains("switchable")) {
            englishTable.classList.add("hidden");
            englishButton.classList.remove("active-table");
            englishButton.classList.add("switchable");

            metricTable.classList.remove("hidden");
            metricButton.classList.remove("switchable");
            metricButton.classList.add("active-table");

        }
    })

    englishButton.addEventListener("click", function() {
        if (englishButton.classList.contains("switchable")) {
            metricTable.classList.add("hidden");
            metricButton.classList.remove("active-table");
            metricButton.classList.add("switchable");

            englishTable.classList.remove("hidden");
            englishButton.classList.remove("switchable");
            englishButton.classList.add("active-table");

        }
    })





})();