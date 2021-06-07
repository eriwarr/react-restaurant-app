import './App.css';
import { Component } from 'react';
import Modal from './Modal';
const buffaloChicken = "https://blogchef.net/wp-content/uploads/2009/01/buffalo_chicken_pizza_1-1.jpg";
const calzone = "https://www.happyfoodstube.com/wp-content/uploads/2016/03/calzone-pizza-recipe.jpg";
const wings= "https://cdn.vox-cdn.com/thumbor/37Er_wqoqG0DFAwK3k8t8-xv7bw=/0x0:1440x1440/1200x900/filters:focal(605x605:835x835)/cdn.vox-cdn.com/uploads/chorus_image/image/61877527/118316077_1579861602185270_1546917259458022944_o.19.jpg";
const argulaSalad = "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2019-06-snapshot-cooking-lettuce-base-5-ways%2FSnapshot-Lettuce-Base-Arugula--_strawberries-pistachios-basil_70936";
const bread = "https://www.dvo.com/link/0720_232532456.jpg";

function MenuList(props) {
  const menuItem = props.menuItems.map((menuItem) => (
    <div className="card-group" key={menuItem.Id}>
    <div className="card testing">
      <div className="card-body">
        <img src={menuItem.Image} alt=""/>
        <h5 className="card-title">{menuItem.Food}</h5><button type="button" className="btn btn-outline-primary" onClick={() => {props.addItem(menuItem);}}>{menuItem.Price}</button>
        <p className="card-text">{menuItem.Description}</p>
      </div>
    </div>
  </div>
  ));
  return (
    menuItem
    )
}

class Order extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: [],
    }
    this.subtotal = this.subtotal.bind(this);
  }

    subtotal(total) {
      const orderTotal = total.reduce((a, e) => a + e, 0);
      return ( (orderTotal.toFixed(2)) )
    }

  render() {

    const total = this.props.order.map((order) => (
       order.Value
    ));

    return (
      <>
      <div>Cart ({total.length})</div>
      <div>Subtotal: ${this.subtotal(total)}</div>
      </>
    )
  }
}

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItems: [],
      order: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(menuItem) {
    const order = [ ...this.state.order ];
    order.push(menuItem);
    this.setState({ order });

  }



  componentDidMount() {
    const menuItems = [
      {Food: "Buffalo Chicken", Price: "$12.99", Value: 12.99, Description: "Chicken, Gorgonzola, Red Onions, Buffalo Drizzle, Ranch Dressing (No pizza sauce)", Id: 1, Image: buffaloChicken},
      {Food: "Detroit-style Cheese Calzone", Price: "$8.00", Value: 8.00, Description: "Our Calzones have a generous amount of our special shredded mozzarella blend and delicious pizza sauce.", Id: 2, Image: calzone},
      {Food: "Wings", Price: "$12.50", Value: 12.50, Description: "Flavors: Sweet Heat, BBQ, Bourbon Style, Citrus Chipotle, Sweet Teriyaki, Mild Buffalo, Hot Buffalo, Nashville Hot Sauce", Id: 3, Image: wings},
      {Food: "Arugula Salad", Price: "$9.00", Value: 9.00, Description: "Craisins, Candied Pecans, Gorgonzola, Red Onions", Id: 4, Image: argulaSalad},
      {Food: "Cheesy Pi Bread", Price: "$6.00", Value: 6.00, Description: "Mozzarella, Fresh Garlic, Italian Seasoning, Garlic Butter, Romano Cheese, with a side of Pasta Sauce", Id: 5, Image: bread}
    ];
    this.setState({ menuItems });

  }

  render() {

    return (
      <>
      <nav className="App-header">
      WELCOME TO VIC'S PIZZA
      </nav>
      <div className="row row-cols-1 row-cols-md-3 g-4 body">
        <div className="col main">
          <MenuList menuItems={this.state.menuItems} addItem={this.addItem} />
        </div>
        <aside className="order">
          <Order order={this.state.order} />
          <button>View Cart</button>
          <Modal/>
        </aside>
      </div>
      </>
    )
  }
}

export default Menu;
