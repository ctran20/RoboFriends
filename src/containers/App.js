import React, { Component } from 'react';
import CardList from '../components/CardList';
import AddRobot from '../components/AddRobot';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputBox: {},
            robots: robots,
            newBot: '',
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    onAddChange = (event) => {
        this.setState({ newBot: event.target.value });
        this.state.inputBox = event;
    }

    addRobot = () => {
        if (this.state.newBot !== '') {
            this.state.robots.unshift({
                name: this.state.newBot,
                email: this.state.newBot.replace(/\s/g, "").toLowerCase() + '@robot.com'
            });
            this.setState({ newBot: '' });
            this.state.inputBox.target.value = '';
        }

    }

    /*componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users })
            );
    }*/

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f-subheadline lh-title' >RoboFriends</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <AddRobot addChange={this.onAddChange} addBot={this.addRobot} />
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>

                    <CardList robots={filteredRobots} />
                </div>
            );
        }

    }
};

export default App;