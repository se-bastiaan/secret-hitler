export const NOTES_SHOW = 'NOTES_SHOW';
export function show() {
	return {
		type: NOTES_SHOW,
	};
}

export const NOTES_HIDE = 'NOTES_HIDE';
export function hide() {
	return {
		type: NOTES_HIDE,
	};
}

export const NOTES_SET = 'NOTES_SET';
export function set(value = '') {
	return {
		type: NOTES_SET,
		payload: value,
	};
}

export const NOTES_CLEAR = 'NOTES_CLEAR';
export function clear() {
	return {
		type: NOTES_CLEAR
	};
}
