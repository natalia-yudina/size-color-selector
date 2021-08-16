(function () {
  "use strict";
  // SizeSelector component
  function SizeSelector(props) {

    function sizeOptions() {
      // props.sizes - array of all sizes

      return props.sizes.map(function(num) {
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
        <select defaultValue={props.size} name="sizeOptions" id="size-options">
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
    // convert the whole string literal into an expression by surrounding it with braces
    // using template literal
    return <img src={`assets/${props.color}.jpg`} width="65%" alt="Product Image" />;
  }

  // ProductCustomizer component
  function ProductCustomizer(props) {

    var [size, setSize] = React.useState(8);

    // the same as
    // var sizeState = React.useState(8);
    // var size = sizeState[0];
    // var setSize = sizeState[1];

    var [sizes, setSizes] = React.useState(window.Inventory.allSizes);

    var [color, setColor] = React.useState("red");

    // curly braces are for any JavaScript expression that needs to be passed as a prop (size={8})
    // to pass a string it can be like a regular looking HTML attribute (color="red")
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage color={color}/>
        </div>
        <div className="selectors">
          <SizeSelector size={size} sizes={sizes}/>
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
