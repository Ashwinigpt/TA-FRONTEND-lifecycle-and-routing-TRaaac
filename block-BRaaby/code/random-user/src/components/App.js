import React from "react";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            randomUser: [],
            selected: 'name',
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ randomUser: this.state.randomUser.concat(data.results[0]) })
            });
    }

    handleRandomUser = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0]);
                this.setState({ randomUser: [data.results[0]] })
            });
    }

    handleComponent = (value) => {
        this.setState({
            selected: value,
        });
    }

    handleUI = (value) => {
        switch (value) {
            case 'name':
                return <Name randomUser={this.state.randomUser} />;
            case 'email':
                return <Email randomUser={this.state.randomUser} />
            case 'birth':
                return <Age randomUser={this.state.randomUser} />
            case 'address':
                return <Address randomUser={this.state.randomUser} />
            case 'phone':
                return <Phone randomUser={this.state.randomUser} />
            case 'password':
                return <Password randomUser={this.state.randomUser} />
        }
    }


    render() {
        return (
            <>
                <div className='user flex flex-direction-column align-center justify-evenly'>
                    <div className='image-container'>
                        <img className='full-width' src={this.state.randomUser[0] ? this.state.randomUser[0].picture.medium : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
                    </div>
                    {this.handleUI(this.state.selected)}
                    <div className='options flex justify-evenly align-center'>
                        <i onClick={() => this.handleComponent('name')} className="fas fa-user"></i>
                        <i onClick={() => this.handleComponent('email')} className="fas fa-envelope"></i>
                        <i onClick={() => this.handleComponent('birth')} className="fas fa-calendar-times"></i>
                        <i onClick={() => this.handleComponent('address')} className="fas fa-map"></i>
                        <i onClick={() => this.handleComponent('phone')} className="fas fa-phone-square"></i>
                        <i onClick={() => this.handleComponent('password')} className="fas fa-lock"></i>
                    </div>
                    <button onClick={() => this.handleRandomUser()}>RANDOM USER</button>
                </div>
            </>
        );
    }
}

class Name extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <p>My name is</p>
                <h1>{this.props.randomUser[0] ? `${this.props.randomUser[0].name.first} ${this.props.randomUser[0].name.last}` : 'Loading...'}</h1>
            </>
        );
    }
}


class Email extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <p>My email is</p>
                <h1>{this.props.randomUser[0] ? this.props.randomUser[0].email : 'Loading...'}</h1>
            </>
        );
    }
}

class Age extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <p>My age is</p>
                <h1>{this.props.randomUser[0] ? this.props.randomUser[0].dob.age : 'Loading...'}</h1>
            </>
        );
    }
}

class Address extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <p>My address is</p>
                <h1>{this.props.randomUser[0] ? ` ${this.props.randomUser[0].location.street.name} ${this.props.randomUser[0].location.city} ${this.props.randomUser[0].location.state} ${this.props.randomUser[0].location.country}` : 'Loading...'}</h1>
            </>
        );
    }
}

class Phone extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <p>My phone is</p>
                <h1>{this.props.randomUser[0] ? this.props.randomUser[0].phone : 'Loading...'}</h1>
            </>
        );
    }
}

class Password extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <p>My password is</p>
                <h1>{this.props.randomUser[0] ? this.props.randomUser[0].login.password : 'Loading...'}</h1>
            </>
        );
    }
}

export default App;