import React, { Component} from 'react';
import Searchbox from '../components/Searchbox'
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

const pa1 = {
   textAlign:'center'
}


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response=> response.json())
        .then (users => this.setState({robots:users}));
    
    }

    onSearchChange =(event)=> {
        this.setState({searchfield:event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots= robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length) {
            return <h1>Loading</h1>
        } else {
        return (
            <div style={pa1}>
            <h1 className='head'>Robofriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>
        );
    }
    }
    
}

export default App;