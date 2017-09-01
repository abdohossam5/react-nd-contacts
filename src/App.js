import React, {Component} from 'react';
import './App.css';

class ContactsList extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <ol>
                {contacts.map( c => <li key={c.name}>{c.name}</li> )}
            </ol>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <ContactsList contacts={[
                    {name:'Abdo'},
                    {name:'John'}
                ]}/>
                <ContactsList contacts={[
                    {name:'Adam'},
                    {name:'Arya'}
                ]}/>
            </div>
        );
    }
}

export default App;
