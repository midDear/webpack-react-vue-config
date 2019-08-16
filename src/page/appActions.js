export const types = {
	action_change_lang: 'action_change_lang'
}

const langType = {
	zh: 'zh',
	en: 'en'
}

/// reducer
export default (state = {lang: langType.en}, action) => {
	switch (action.type) {
		case types.action_change_lang:
			return {
				...state, lang: action.lang
			}
		default:
			return state
	}
}


