import React, { Component} from 'react'
import { Button,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown,
  NavItem, Header, Brand } from 'react-bootstrap'

class HeaderFunc extends Component {

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }
  
  constructor(props) { 
	super(props);
	this.state = { 
			authenticate: false
	}
	this.handleSelect = this.handleSelect.bind(this);
  }

   render() {
        return (
		  <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
			<NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
			<NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
			<NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
		</Nav>
      )
  }


}

export default HeaderFunc
