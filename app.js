(function () {
  "use strict";
  // SizeSelector component
  function SizeSelector(props) {

    function sizeOptions() {
      // array of all sizes
      var sizes = window.Inventory.allSizes;

      return sizes.map(function(num) {
        // num is element of array
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      });
    }

    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select name="sizeOptions" id="size-options">
          // generate options
          {sizeOptions()}
        </select>
      </div>
    );
  }

  // ProductImage component
  // component starts with capital letter
  function ProductImage(props) {
    // JSX expression
    return <img src="assets/red.jpg" width="65%" alt="Product Image" />;
  }

  // ProductCustomizer component
  function ProductCustomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
        <div className="selectors">
          <SizeSelector />
        </div>
      </div>
    );
  }

  // render components in the page (element to be rendered, place in html file - getElementById or querySelector)
  // create element which is represented by component ProductCustomizer and render it in browser
  ReactDOM.render(
    <ProductCustomizer />,
    document.getElementById("react-root")
  );
})();
querySelector;
