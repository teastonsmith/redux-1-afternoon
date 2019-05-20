import { createStore } from 'redux';

const initialState = {
	recipe: '',
	category: '',
	authorFirstName: '',
	authorLastName: '',
	ingredients: [],
};

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME';
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY';
export const UPDATE_AUTHOR_FIRST_NAME = 'STORE_AUTHOR_FIRST_NAME';
export const UPDATE_AUTHOR_LAST_NAME = 'STORE_AUTHOR_LAST_NAME';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

function reducer(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case UPDATE_RECIPE_NAME:
			return {
				...state,
				recipe: payload,
			};
		case UPDATE_RECIPE_CATEGORY:
			return {
				...state,
				category: payload,
			};
		case UPDATE_AUTHOR_FIRST_NAME:
			return {
				...state,
				authorFirstName: payload,
			};
		case UPDATE_AUTHOR_LAST_NAME:
			return {
				...state,
				authorLastName: payload,
			};
		case ADD_INGREDIENT:
			const newIngredients = [...state.ingredients, payload];
			return {
				...state,
				ingredients: newIngredients,
			};
		default:
			return state;
	}
}

export default createStore(reducer);
