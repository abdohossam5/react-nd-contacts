import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

class CreateContact extends Component {

    static propTypes = {
        onCreateContact: PropTypes.func.isRequired
    };

    render() {

        const handleSubmit = (e) => {
            e.preventDefault();
            const values = serializeForm(e.target, {hash: true});
            this.props.onCreateContact(values);
        };

        return (
            <div>
                <Link to="/" className="close-create-contact"/>

                <form className="create-contact-form" onSubmit={handleSubmit}>
                    <ImageInput
                        className="create-contact-avatar-input"
                        name="avatarURL"
                        maxHeight={80}
                    />

                    <div className="create-contact-details">
                        <input name="name" placeholder="Name"/>
                        <input name="email" placeholder="Email"/>
                        <button className="">Add Contact</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateContact;