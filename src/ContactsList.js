import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import EscapeRegExp from 'escape-string-regexp';
import sortBy from  'sort-by';

class ContactsList extends React.Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    };

    state = {
        query: ''
    };

    updateQuery(query) {
        this.setState({
            query
        })
    }

    render() {
        let viewContacts = this.props.contacts.sort(sortBy('name'));

        if(this.state.query){
            let match = new RegExp(EscapeRegExp(this.state.query), 'i');
            viewContacts = viewContacts.filter(c => match.test(c.name));
        }
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input className="search-contacts"
                           type="text"
                           placeholder="Search Here"
                           value={this.state.query}
                           onChange={(e) => this.updateQuery(e.target.value)}/>
                </div>
                <ul className="contact-list">
                    {viewContacts.map((contact) =>
                        (
                            <li className="contact-list-item" key={contact.id}>
                                <div className="contact-avatar" style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}/>
                                <div className="contact-details">
                                    <p>{contact.name}</p>
                                    <p>{contact.email}</p>
                                </div>
                                <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">
                                    Remove
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}


export default ContactsList;