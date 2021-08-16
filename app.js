(function () {
  "use strict";

  //React.createElement(1 - what type of element we are creating, 2 - props to pass into the element, 3 - what should be inside element)
  var ProductCustomizer = React.createElement(
    "div",
    { className: "customizer" },
    "Product customizer will go here"
  );

  // render components in the page (element to be rendered, place in html file - getElementById or querySelector)
  ReactDOM.render(ProductCustomizer, document.getElementById("react-root"));
})();
querySelector;
