var GroceryList = () => (
  <ul>
    <Meat />
  <Vegetables />
  </ul>
);

var Meat = () => (
  <li>Meat</li>
);

var Vegetables = () => (
  <li>Vegetables</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
