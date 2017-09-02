import React, {Component} from 'react';
import './index.css'


class ContactsList extends Component {

    render() {
        const contacts = this.props.contacts;

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
                            <button className="contact-remove">Remove</button>
                        </li>
                    )
                ) }
            </ul>
        )
    }
}

export default ContactsList;