import { Component } from 'react';
import './App.css';


class Modal extends Component {
  constructor(props){
    super(props);
    this.state= {
      show: false,
    }
  }
  render() {
    if(!this.state.show) {
      return null
    }
    return (
        <div className="Modal">
          <div className="Modal-content">
            <div className="Modal-header">
              <h4 className="Modal-title">Ordered Items</h4>
            </div>
            <div className="Modal-body">
              This is model content
            </div>
            <div className="Modal-footer">
              <button className="button">Close</button>
            </div>
          </div>
        </div>

    )

  }

}


export default Modal
