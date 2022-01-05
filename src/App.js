import React from 'react';
import CardList from './CardList';
import { works } from './works';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			works: works,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredWorks = this.state.works.filter(works => {
			return works.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Virginia Woolf's Works</h1>
				<div
				style={{background: 'url(bg.jpeg) center no-repeat',
  				backgroundSize: 'cover'}}
  				>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList works = {filteredWorks}/>
				</div>
			</div>
		);
	}
}

export default App;