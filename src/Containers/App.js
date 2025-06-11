import React, {Component} from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends Component  {
    constructor(){
        super();
        this.state = {
            Robots:[],
            searchfield:''
        }
    }

     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(user => this.setState({Robots:user}))
    }
   

   onSearchchange = (event) =>{
    this.setState({searchfield:event.target.value});
   }  
   
   
    render(){
        const {Robots, searchfield} = this.state;
        const filterrobots = Robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }
        );
        if(!Robots.length){
            return <h1 className="tc">loading</h1>;
        }
        else {
    return (
   <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchchange ={this.onSearchchange}/>
      <Scroll>
        <ErrorBoundary>
            <Cardlist Robots={filterrobots} />
        </ErrorBoundary>
     
     </Scroll>
   </div>

    );
    }
}
}
export default App;