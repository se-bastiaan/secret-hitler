export const VERSION_UPDATE = 'VERSION_UPDATE';
export function updateVersion(version) {
	return {
		type: VERSION_UPDATE,
		payload: version,
	};
}

export const VERSION_VIEW_PATCH_NOTES = 'VERSION_VIEW_PATCH_NOTES';
export function viewPatchNotes() {
	return { type: VERSION_VIEW_PATCH_NOTES };
}
