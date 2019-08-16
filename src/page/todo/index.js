import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "./actions";
function Todo({ items, addTodo, delTodo }) {
	// 控制input value的值
	const [text, setText] = React.useState("this is default text ");
	// button click传参的写法
	const exeDelTodo = id => () => delTodo(id);
	// 不传参
	const exeAddTodo = () => addTodo(text);
	// 可以抽出来作为单独的item
	const renderItem = items =>
		items.map(item => (
			<li key={item.id}>
				<span>{item.text}</span>
				<button onClick={exeDelTodo(item.id)}>del this item</button>
			</li>
		));

	return (
		<div>
			<input onChange={e => setText(e.target.value)} />
			<button onClick={exeAddTodo}>add text</button>
			<ul>{renderItem(items)}</ul>
		</div>
	);
}
// 将 state转换进来
const mapStateToPros = state => {
	return state.todo;
};
// 将 action转换进去
const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch);
};
// 如果要在组件中使用 redux的方法,必须connect
export default connect(
	mapStateToPros,
	mapDispatchToProps
)(Todo);