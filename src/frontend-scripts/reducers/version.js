import * as versionActions from '../actions/version';

const initialState = { current: { number: '', color: '', date: '' }, lastSeen: '' };

export default (state = initialState, action) => {
	switch (action.type) {
		case versionActions.VERSION_UPDATE:
			console.log(action.payload);
			return {
				...state,
				...action.payload
			};
		case versionActions.VERSION_VIEW_PATCH_NOTES:
			return {
				...state,
				lastSeen: state.current.number
			};
		default:
			return state;
	}
};
