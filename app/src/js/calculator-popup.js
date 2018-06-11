(function() {
  if (window.location.href.includes("product-t160") || window.location.href.includes("product-b90") || window.location.href.includes("product-t90")) {
    var calcBtn = document.querySelector('#calculator');

    calcBtn.addEventListener('click', startPopup);
    var calcDiv = document.querySelector('#calc-form-popup');
    var cancelBtn = document.querySelector('#calc-cancel-btn');
    var calcForm = document.querySelector('#calc-form');
    var calcResults = document.querySelector('#calc-results');
    var calcResultsShelves = document.querySelector('#calc-results-shelves');
    var calcResultsRowsWide = document.querySelector('#calc-results-rows-wide');
    var calcResultsRowsDeep = document.querySelector('#calc-results-rows-deep');
    var calcResultsCubicTotal = document.querySelector('#calc-results-cubic-space');
    calcForm.addEventListener('submit', calculate);

    //SPACING
    const HEIGHT_SPACING = 0.5;
    const WIDTH_SPACING = 0.5;
    const DEPTH_SPACING = 0.5;
    
    // RACKS
    const WIRE_RACK = 0.375;
    const HEAVY_DUTY_WIRE_RACK = 0.75;
    const NO_RACK = 0;
    // FREEZERS
    const B_90_HEIGHT = 60
    const B_90_WIDTH = 31.5
    const B_90_DEPTH = 22.65 

    const T_90_HEIGHT = 60
    const T_90_WIDTH = 34.5
    const T_90_DEPTH = 28

    const T_160_HEIGHT = 60
    const T_160_WIDTH = 34.5
    const T_160_DEPTH = 26.5

    function startPopup(e) {
      e.preventDefault();
      calcDiv.classList.remove('hide-calc-form');
      cancelBtn.addEventListener('click', cancelCalc);
      window.location.hash = '';
    }

    function cancelCalc(e) {
      e.preventDefault();
      calcResults.classList.add('hidden');
      calcDiv.classList.add('hide-calc-form');
      cancelBtn.removeEventListener('click', cancelCalc);
    }

    function calculate(e) {
      e.preventDefault();
      calcResults.classList.remove('hidden');
      const height = parseFloat(document.getElementById('calc-height').value);
      const width = parseFloat(document.getElementById('calc-width').value);
      const depth = parseFloat(document.getElementById('calc-depth').value);

      var results;
      if (height === width) {
        results = calculateStorageSpace(height, width, depth);
      } else {
        var result1 = calculateStorageSpace(height, width, depth);
        var result2 = calculateStorageSpace(width, height, depth)
        if (result1.cubicTotal >= result2.cubicTotal) results = result1;
        else results = result2;
      }
      displayCalculationResults(results);
    }

    function calculateStorageSpace(height, width, depth) {

      var totalHeight = height + HEAVY_DUTY_WIRE_RACK + HEIGHT_SPACING;
      var shelfSpacing = Math.ceil(totalHeight * 2) / 2
      var totalWidth = width + WIDTH_SPACING
      var totalDepth = depth + DEPTH_SPACING
      var results;
      if (window.location.href.includes("product-t90")) {
        results = calculateTotals({height: T_90_HEIGHT, width: T_90_WIDTH, depth: T_90_DEPTH}, shelfSpacing, totalWidth, totalDepth)
      } else if (window.location.href.includes("product-t160")) {
        results = calculateTotals({height: T_160_HEIGHT, width: T_160_WIDTH, depth: T_160_DEPTH}, shelfSpacing, totalWidth, totalDepth)
      } else {
        results = calculateTotals({height: B_90_HEIGHT, width: B_90_WIDTH, depth: B_90_DEPTH}, shelfSpacing, totalWidth, totalDepth)
      }
      return results;
    }

    function calculateTotals(freezer, shelfSpacing, totalWidth, totalDepth) {
      const shelves = Math.max(Math.floor(freezer.height / shelfSpacing), 1);
      const rowsWide = Math.max(Math.floor(freezer.width / totalWidth), 1);
      const rowsDeep = Math.max(Math.floor(freezer.depth / totalDepth), 1);
      const cubicTotal = shelves * rowsWide * rowsDeep;
      return {shelves, rowsWide, rowsDeep, cubicTotal}
    }

    function displayCalculationResults(results) {
      calcResultsShelves.innerHTML = results.shelves;
      calcResultsRowsWide.innerHTML = results.rowsWide;
      calcResultsRowsDeep.innerHTML = results.rowsDeep;
      calcResultsCubicTotal.innerHTML = results.cubicTotal;
    }
  }
})();
