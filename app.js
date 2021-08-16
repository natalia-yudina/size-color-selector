(function () {
  "use strict";

  // ProductImage component
  // component starts with capital letter
  function ProductImage(props) {
    // <img src="assets/red.jpg" alt="Product Image" />
    return React.createElement("img", {
      src: "assets/red.jpg",
      width: "65%",
      alt: "Product Image",
    });
  }

  // //React.createElement(1 - what type of element we are creating, 2 - props to pass into the element, 3 - what should be inside element)

  // ProductCustomizer component
  function ProductCustomizer(props) {
    return React.createElement(
      "div",
      { className: "customizer" },
      // creating element for ProductImage component
      React.createElement(
        "div",
        { className: "product-image" },
        React.createElement(ProductImage)
      )
    );
  }

  // render components in the page (element to be rendered, place in html file - getElementById or querySelector)
  // create element which is represented by component ProductCustomizer and render it in browser
  ReactDOM.render(
    React.createElement(ProductCustomizer),
    document.getElementById("react-root")
  );
})();
querySelector;
