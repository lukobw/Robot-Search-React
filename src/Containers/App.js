import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

 class App extends Component {
     constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({robots: users}));
    }

     onSearchChange = (event) => {
         this.setState({searchField: event.target.value})
    }
     render() {
         const {robots, searchField} = this.state;
         const filteredRobots = robots.filter(robot => {
             return robot.name.toLowerCase().includes(searchField.toLowerCase());
         });

         return !robots.length ? <h1 className="tc">Loading</h1> : 
         (
             <div className="tc">
                 <h1 className="f1">Robot Search</h1>
                 <SearchBox searchChange={this.onSearchChange}/>
                 <Scroll>
                     <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                     </ErrorBoundary>
                 </Scroll>
             </div>
         );
     }
}

export default App;