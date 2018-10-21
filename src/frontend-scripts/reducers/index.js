import { combineReducers } from 'redux';
import {
	userInfo,
	gameInfo,
	gameList,
	generalChats,
	midSection,
	playerNotesActive,
	profile,
	replay,
	userList
} from './sh-app';
import version from './version';
import notes from './notes';

export default combineReducers({
	userInfo,
	midSection,
	gameList,
	gameInfo,
	userList,
	generalChats,
	profile,
	replay,
	version,
	playerNotesActive,
	notes
});
