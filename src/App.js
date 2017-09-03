import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ContactsList from "./ContactsList";
import * as ContactsApi from './utils/ContactsAPI';
import CreateContact from './CreateContact';

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
        }));
        ContactsApi.remove(contact);
    };

    render() {
        return (
            <div>

                <Route exact path="/" render={()=>
                    (<ContactsList onDeleteContact={this.removeContact} contacts={this.state.contacts} />)
                }/>


                <Route path="/create" component={CreateContact}/>

            </div>
        );
    }
}

export default App;
