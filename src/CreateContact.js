import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput'

class CreateContact extends Component {

    render() {
        return (
            <div>
                <Link to="/" className="close-create-contact"/>

                <form className="create-contact-form">
                    <ImageInput
                        className="create-contact-avatar-input"
                        name="avatar"
                        maxHeight={80}
                    />

                    <div className="create-contact-details">
                        <input name="name" placeholder="Name"/>
                        <input name="email" placeholder="Email"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact;