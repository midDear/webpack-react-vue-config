import {produce} from 'immer'

export const types = {
	action_add: 'action_add',
	action_sub: 'action_sub',
	action_ran: 'action_ran'
}

export const actions = {
	addNumber: number => ( {
		type: types.action_add,
		number
	} ),
	subNumber: number => ( {
		type: types.action_sub,
		number
	} ),
	randNumber: seed => dispatch => {
		setTimeout(() => {
			dispatch({
				type: types.action_ran,
				number: seed * 10
			})
		}, 2000)
	}
}
/// reducer
// immer
export default (state = {number: 0}, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.action_add:
				draft.number += action.number
				break
			case types.action_sub:
				draft.number -= action.number
				break
			case types.action_ran:
				draft.number = action.number
				break
			default:
				return state
		}
	});


// export default (state = { number: 0 }, action) => {
//     switch (action.type) {
//         case types.action_add:
//             return {
//                 ...state, number: state.number + action.number
//             }
//         case types.action_sub:
//             return {
//                 ...state, number: state.number - action.number
//             }
//         case types.action_ran:
//             return {
//                 ...state, number: action.number
//             }
//         default:
//             return state
//     }
// }

