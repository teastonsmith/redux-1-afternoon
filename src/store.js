import { createStore } from 'redux';

const initialState = {
	recipe: [],
	category: [],
};

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME';
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY';

function reducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case UPDATE_RECIPE_NAME:
			return {
				...state,
				recipe: action.recipe,
			};
		case UPDATE_RECIPE_CATEGORY:
			return {
				...state,
				category: action.category,
			};
		default:
			return state;
	}
}

export default createStore(reducer);
