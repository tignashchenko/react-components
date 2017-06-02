class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.todos}</li>
    )
  }
}

/*var GroceryListItem = (props) => (
  <ul>
    <li>{props.todos}</li>
  </ul>
);*/

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
  <GroceryListItem todos={['Meat']}/>
<GroceryListItem todos={['Vegetables']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
