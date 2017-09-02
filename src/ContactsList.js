import React from 'react';
import PropTypes from  'prop-types';
import './index.css'


function ContactsList (props) {
        const contacts = props.contacts;

        return (
            <ul className="contact-list">
                { contacts.map( (contact) =>
                    (
                        <li className="contact-list-item" key={contact.id}>
                            <div className="contact-avatar" style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}/>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => props.onDeleteContact(contact)} className="contact-remove">Remove</button>
                        </li>
                    )
                ) }
            </ul>
        )
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactsList;