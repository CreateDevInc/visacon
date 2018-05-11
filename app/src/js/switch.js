

        // By taking the code that we write and chunking it into
        // functions, we can avoid having to re-write the same thing
        // over and over. We end up with slightly less code, but more importantly, logic
        // looks cleaner, reads much easier, and becomes easier to maintain as a result.

        // This was just a quick refactoring (which I do to my own
        // code as well), but if you're interested in how we could
        // improve this method even further, let me know and I'd
        // love to talk about it!

(function () {
    // Only run on product pages; otherwise, we'll get a console
    // error when we try to add event listeners to elements that don't
    // exist on the home/contact pages.
    if (window.location.href.includes('product')) {
        var metricTable = document.querySelector(".metric");
        var englishTable = document.querySelector(".english");
        var metricButton = document.querySelector("#metric");
        var englishButton = document.querySelector("#english");

        metricButton.addEventListener("click", toggleTable);
        englishButton.addEventListener("click", toggleTable);

        function toggleTable(e) {
            if (e.target.id === 'metric') {
                deactivate(englishTable, englishButton);
                activate(metricTable, metricButton);
            }
            else {
                deactivate(metricTable, metricButton);
                activate(englishTable, englishButton);
            }
        }

        function deactivate(table, button) {
            table.classList.add("hidden");
            button.classList.remove("active-table");
            button.classList.add("switchable");
        }

        function activate(table, button) {
            table.classList.remove("hidden");
            button.classList.remove("switchable");
            button.classList.add("active-table");
        }
    }
})();