import React from 'react'

export default class Form extends React.Component {

    state = {
        name: "",
        email: "",
        number: "",
        message: ""

    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = e => {
        // Fields don't show in url
        e.preventDefault();
        this.props.onSubmit(this.state)
        // Clear vlaues after submitting
        this.setState({
            name: "",
            email: "",
            number: "",
            message: ""
        });
    };


    render () {
        return (
            <form>
                <input 
                    name = "name"
                    placeholder = "First name" 
                    value={this.state.name} 
                    onChange = {e => this.change(e)}
                />
                <br />
                <input 
                    name = "email"
                    placeholder = "Last name" 
                    value={this.state.email} 
                    onChange = {e => this.change(e)}                
                    />
                <br />
                <input 
                    name = "number"
                    placeholder = "number" 
                    value={this.state.number} 
                    onChange = {e => this.change(e)}                
                />
                <br />
                <input 
                    name = "message"
                    placeholder = "message" 
                    value={this.state.message} 
                    onChange = {e => this.change(e)}                
                />
                <br />

                
                
                <button onClick={e => this.onSubmit(e)}>Submit</button>
                
            </form>
        );
    }
};