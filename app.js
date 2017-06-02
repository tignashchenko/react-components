class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turnBold: false
    };
  }

  onListItemHover() {
    this.setState({
      turnBold: !this.state.turnBold
    });
  }

  render() {

    var style = {
      'font-weight': this.state.turnBold ? 'bold' : 'none'
    };
    return (

      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.todos}</li>
    );
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
