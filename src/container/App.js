import React, {Component} from 'react';
import Cardlist from '../component/CardList'
import Searchbox from '../component/Searchbox'
import Scroll from '../component/Scroll'
import './App.css'
import 'tachyons';
import ErroBoundry from '../component/ErroBoundry'

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	onSearchChange = (event) =>{
		this.setState({searchField : event.target.value});
		console.log("change")
	}
	render(){
		
		const filtered_r = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})

		if(this.state.robots.length ===0) return(<h1>Loading</h1>)
		else{
			return (
			<div className= 'tc'>
				<h1>Seach a Robot </h1> 
				<Searchbox change={this.onSearchChange}/>
				<Scroll>
					<ErroBoundry>
					<Cardlist robots={filtered_r}/>
					</ErroBoundry>
				</Scroll>
			</div>
			);
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}))
	}
}
export default App;