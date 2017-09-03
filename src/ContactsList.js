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

    resetQuery(){
        this.setState({query: ''})
    }

    render() {
        const {contacts, onDeleteContact} = this.props;
        const {query} = this.state;
        let viewContacts = contacts.sort(sortBy('name'));

        if(query){
            let match = new RegExp(EscapeRegExp(query), 'i');
            viewContacts = viewContacts.filter(c => match.test(c.name));
        }
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input className="search-contacts"
                           type="text"
                           placeholder="Search Here"
                           value={query}
                           onChange={(e) => this.updateQuery(e.target.value)}/>
                </div>

                {viewContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Showing {viewContacts.length} of {contacts.length}</span>
                        <button onClick={() => this.resetQuery()}>show all</button>
                    </div>
                )}

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
                                <button onClick={() => onDeleteContact(contact)} className="contact-remove">
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