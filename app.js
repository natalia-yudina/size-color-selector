(function () {
  "use strict";

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
          // capitalized
          <ProductImage />
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
