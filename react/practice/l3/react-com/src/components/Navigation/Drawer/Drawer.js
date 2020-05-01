import React, {Component} from "react";
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [1, 2, 3]

class Drawer extends Component{

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          {/*eslint-disable-next-line*/}
          <a>
            Link {link}
          </a>
        </li>
      )
    })
  }

  render() {

    const cls = ['Drawer'];

    if(!this.props.isOpen) {
      cls.push('close')
    }

    return(
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </React.Fragment>
    )
  }
}

export default Drawer