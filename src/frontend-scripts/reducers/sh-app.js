import {
	TOGGLE_PLAYER_NOTES,
	UPDATE_GAMEINFO,
	UPDATE_GAMELIST,
	UPDATE_GENERALCHATS,
	UPDATE_MIDSECTION,
	UPDATE_USER,
	UPDATE_USERLIST
} from '../actions/actions.js';

export const userInfo = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_USER:
			state = action.user;
			break;
	}
	return state;
};

export const midSection = (state = 'default', action) => {
	switch (action.type) {
		case UPDATE_MIDSECTION:
			state = action.midSection;
			break;
	}
	return state;
};

export const playerNotesActive = (state = '', action) => {
	switch (action.type) {
		case TOGGLE_PLAYER_NOTES:
			state = action.playerName;
			break;
	}
	return state;
};

export const gameList = (state = [], action) => {
	switch (action.type) {
		case UPDATE_GAMELIST:
			state = action.gameList;
			break;
	}
	return state;
};

export const gameInfo = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_GAMEINFO:
			state = action.gameInfo;
			break;
	}
	return state;
};

export const userList = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_USERLIST:
			state = action.userList;
			break;
	}
	return state;
};

export const generalChats = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_GENERALCHATS:
			state = action.info;
			break;
	}
	return state;
};

export const profile = (state = { status: 'INITIAL' }, action) => {
	switch (action.type) {
		case 'REQUEST_PROFILE':
			return { status: 'LOADING' };
		case 'PROFILE_NOT_FOUND':
			return { status: 'NOT_FOUND' };
		case 'RECEIVE_PROFILE':
			return Object.assign({}, action.profile, {
				status: 'READY',
				activeStat: 'MATCHES'
			});
		case 'UPDATE_ACTIVE_STATS':
			return Object.assign({}, state, { activeStat: action.activeStat });
		default:
			return state;
	}
};

export const replay = (state = { status: 'INITIAL' }, action) => {
	switch (action.type) {
		case 'CLEAR_REPLAY':
			return { status: 'INITIAL' };
		case 'REQUEST_REPLAY':
			return { status: 'LOADING' };
		case 'REPLAY_NOT_FOUND':
			return { status: 'NOT_FOUND' };
		case 'RECEIVE_REPLAY':
			return {
				status: 'READY',
				ticks: action.replay,
				game: action.game,
				position: 0
			};
		case 'REPLAY_TO':
			return Object.assign({}, state, {
				position: action.position
			});
		default:
			return state;
	}
};
