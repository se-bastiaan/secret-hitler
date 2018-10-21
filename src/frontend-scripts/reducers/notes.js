import * as notesActions from '../actions/notes';

const initialState = {
	value: '',
	visible: false,
};

export default function notesReducer(state = initialState, action) {
	switch (action.type) {
		case notesActions.NOTES_SHOW:
			return {
				...state,
				visible: true,
			};
		case notesActions.NOTES_HIDE:
			return {
				...state,
				visible: false,
			};
		case notesActions.NOTES_CLEAR:
			return {
				...state,
				value: '',
			};
		case notesActions.NOTES_SET:
			return {
				...state,
				value: action.payload,
			};
	}
	return state;
};
