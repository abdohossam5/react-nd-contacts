import React, {Component} from 'react';
import ContactsList from "./ContactsList";
import * as ContactsApi from './utils/ContactsAPI';

class App extends Component {
    state = {
        contacts: []
    };

    componentDidMount(){
        ContactsApi.getAll().then((contacts) => {
            this.setState({contacts})
        })
    }

    removeContact = (contact) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(c => c.id !== contact.id)
        }))
    };

    render() {
        return (
            <div>
                <ContactsList onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            </div>
        );
    }
}

export default App;
