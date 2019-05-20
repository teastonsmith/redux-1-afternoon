import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Name.css';
import store, {
	UPDATE_RECIPE_NAME,
	UPDATE_RECIPE_CATEGORY,
  UPDATE_AUTHOR_FIRST_NAME,
  UPDATE_AUTHOR_LAST_NAME,
} from './../../store';

class Name extends Component {
	constructor(props) {
		super(props);
    const reduxState = store.getState()
		this.state = {
			recipe: reduxState.recipe,
      category: reduxState.category,  
      authorFirstName: reduxState.authorFirstName,
      authorLastName: reduxState.authorLastName
		};
	}
	handleNameChange(nameVal) {
		this.setState({
			name: nameVal,
		});
	}

	handleCategoryChange(catVal) {
		this.setState({
			category: catVal,
		});
	}
	saveChanges() {
		// Send data to Redux state
		store.dispatch({
			type: UPDATE_RECIPE_NAME,
			payload: this.state.recipe,
		});
		store.dispatch({
			type: UPDATE_RECIPE_CATEGORY,
			payload: this.state.category,
    });
    store.dispatch({
      type: UPDATE_AUTHOR_FIRST_NAME,
      payload: this.state.authorFirstName
    })
    store.dispatch({
      type: UPDATE_AUTHOR_LAST_NAME,
      payload: this.state.authorLastName
    })
	}
	render() {
		return (
			<div className='Name forms'>
				<div className='input_container'>
					<h2>Recipe Name:</h2>
					<input
						value={this.state.name}
						onChange={e => this.handleNameChange(e.target.value)}
					/>
				</div>
				<div className='input_container'>
					<h2>Category:</h2>
					<select
						value={this.state.category}
						onChange={e => this.handleCategoryChange(e.target.value)}>
						<option value={''}>----</option>
						<option value={'Breakfast'}>Breakfast</option>
						<option value={'Second Breakfast'}>Second Breakfast</option>
						<option value={'Brunch'}>Brunch</option>
						<option value={'Lunch'}>Lunch</option>
						<option value={'Dinner'}>Dinner</option>
						<option value={'Drinks'}>Drinks</option>
						<option value={'Dessert'}>Dessert</option>
					</select>
				</div>
				<Link to='/add/author'>
					<button onClick={() => this.saveChanges()} className='right_button'>
						Next
					</button>
				</Link>
			</div>
		);
	}
}

export default Name;
