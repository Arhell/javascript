const CONTACTS = [
  {
    id: 1,
    name: 'Darth Vader',
    phoneNumber: '+250966666666',
    image: 'img/darth.gif'
  }, {
    id: 2,
    name: 'Princess Leia',
    phoneNumber: '+250966344466',
    image: 'img/leia.gif'
  }, {
    id: 3,
    name: 'Luke Skywalker',
    phoneNumber: '+250976654433',
    image: 'img/luke.gif'
  }, {
    id: 4,
    name: 'Chewbacca',
    phoneNumber: '+250456784935',
    image: 'img/chewbacca.gif'
  }
];


class Contact extends React.Component {
  render() {
    return (
      <li className="contact">
        <img className="contact-image" src={this.props.image} width="60px" height="60px" />
        <div className="contact-info">
          <div className="contact-name"> {this.props.name} </div>
          <div className="contact-number"> {this.props.phoneNumber} </div>
        </div>
      </li>
    );
  }
}


class ContactList extends React.Component {
  state = { displayedContacts: CONTACTS };
  handleSearch = ({ target: { value } }) => {
    console.log(value);
    this.setState({
      displayedContacts: CONTACTS.filter(contact => contact.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    });
  }
  render() {
    return (
      <div className="contacts">
        <input
          type="text"
          placeholder="Search..."
          className="search-field"
          onChange={this.handleSearch}
        />
        <ul className="contacts-list" id="contactList">
          {this.state.displayedContacts.map(contact => (
            <Contact
              key={contact.id}
              image={contact.image}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
            />
          )) }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ContactList />,
  document.getElementById('content')
);

