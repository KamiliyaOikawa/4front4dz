import React from 'react';
import {tab} from "@testing-library/user-event/dist/tab";
import Menu from "../../components/Menu/Menu";
class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    this.state = {menu : false}
  }

  handleMenu = () =>{
    this.setState({menu:!this.state.menu})
  }

      render() {
        return(
            <div>
              <h2>Menu change</h2>
              <button onClick={this.handleMenu}>menu</button>
              {
                this.state.menu && <Menu/>
              }
            </div>
        )
      }

}

export default Portfolio;