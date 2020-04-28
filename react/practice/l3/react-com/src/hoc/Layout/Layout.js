import React, {Component} from "react";
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

class Layout extends Component{

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }


  render() {
    return (
      <div className="Layout">

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout