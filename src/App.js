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

    createContact = (contact) => {
        ContactsApi.create(contact).then((contact) => {
            this.setState((prevState) => ({contacts: prevState.contacts.concat([contact])}));
        })
    };

    render() {
        return (
            <div>

                <Route exact path="/" render={()=>
                    (<ContactsList onDeleteContact={this.removeContact} contacts={this.state.contacts} />)
                }/>


                <Route path="/create" render={({history})=>
                    (<CreateContact  onCreateContact={(c)=>{
                        this.createContact(c);
                        history.push('/')
                    }}/>)
                }/>

            </div>
        );
    }
}

export default App;
