import { produce } from "immer";
export const types = {
	add_todo: "add_todo",
	del_todo: "del_todo"
};

let id = 1;

export const actions = {
	addTodo: text => ({
		type: types.add_todo,
		text
	}),
	delTodo: id => ({
		type: types.del_todo,
		id
	})
};

const initState = {
	items: []
};

export default (state = initState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.add_todo:
				id++;
				draft.items.push({
					text: action.text,
					id
				});
				break;
			case types.del_todo:
				const index = draft.items.findIndex(e => e.id === action.id);
				index > -1 && draft.items.splice(index, 1);
				break;
			default:
				return state;
		}
	});