import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

class ContactsList extends React.Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    };

    render() {
        return (
            <ul className="contact-list">
                {this.props.contacts.map((contact) =>
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
        )
    }
}


export default ContactsList;